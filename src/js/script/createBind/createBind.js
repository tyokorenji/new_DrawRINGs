//@flow
"use strict";

import { liaise } from "../main";
import { drawEdge } from "./drawEdge";
import { stageUpdate } from "./updateStage";
import { culcParentChild } from "../culcParentChild";
import { Sugar } from "../class/Sugar";
import { edgeClickEvent } from "../edgeClickEvent";
import { glycans } from "../main";
import { Glycobond } from "../class/Glycobond";
import { createCyclic } from "../createCyclic/createCyclic";
import { drawCyclicEdge } from "../createCyclic/drawCyclicEdge";
import { Fragment } from "../class/Fragment";
import { Glycan } from "../class/Glycan";

export function createEdge(target: Sugar) {
    let parentChild: Array<Sugar> = culcParentChild(liaise.selectedNode, target);
    // if (target.xCoord > liaise.selectedNode.xCoord) {
    //     for (let item of target.childSugars) {
    //         if (item === liaise.selectedNode) return;
    //     }
    // }
    // else {
    //     for (let item of liaise.selectedNode.childSugars) {
    //         if (item === target) return;
    //     }
    // }
    let pastBond: Object;
    switch (liaise.selectedNode.getGlycan()) {
        case target.getGlycan(): {
            for(let parentBond: Glycobond of parentChild[1].getParentBond()) {
                if(parentBond.getChildSugar() === parentChild[1] && parentBond.getParentSugar() === parentChild[0]) {
                    console.log("すでに結合されている構造");
                    return;
                }
            }
            if (parentChild[1].isCyclicEmpty()) {
                console.log("結合のないサイクリック");
                // pastBond = parentChild[1].checkDrawingParentBond(parentChild[0]);
                pastBond = {};
                break;
            }
            else {
                console.log("すでに結合されているサイクリック");
                // pastBond = parentChild[0].checkDrawingParentBond(parentChild[1]);
                return;
            }
        }
        default: {
            if(parentChild[0].getGlycan() instanceof Fragment && parentChild[1].getGlycan() instanceof Fragment) {
                console.log("Fragment");
                pastBond = parentChild[1].getParentBond()[0];
            }
            else {
                console.log("普通のEdge");
                pastBond = {};
            }
            break;
        }
    }
    if(Object.keys(pastBond).length) {
        liaise.removeStage(pastBond);
        liaise.stageUpdate();
    }
    let edge: Glycobond;
    switch (liaise.selectedNode.getGlycan()) {
        case target.getGlycan():
            edge = drawCyclicEdge(liaise.selectedNode, target);
            createCyclic(edge, liaise.selectedNode, target);
            break;
        default: {
            edge = drawEdge(liaise.selectedNode.xCoord, liaise.selectedNode.yCoord, target.xCoord, target.yCoord);

            let parentSugar: Sugar = parentChild[0];
            let childSugar: Sugar = parentChild[1];
            childSugar.setParentSugars(parentSugar);
            childSugar.setParentBond(edge);
            if(childSugar.getGlycan() instanceof Fragment) {
                childSugar.getGlycan().getParentFragmentBracket().spliceChildGlycans(childSugar.getGlycan());
            }
            else if(childSugar.getGlycan() instanceof Glycan) {
                for (let i = 0; i < glycans.length; i++) {
                    switch (childSugar.getGlycan()) {
                        case glycans[i]: {
                            glycans.splice(i, 1);
                            childSugar.setGlycan(parentSugar.getGlycan());
                            childSugar.setLayer(parentSugar.getLayer() + 1);
                            break;
                        }
                        default:
                            break;
                    }
                }
            }

            parentSugar.setChildSugars(childSugar);
            parentSugar.setChildNodes(childSugar);
            for (let child: Sugar of parentSugar.getChildSugars()) {
                if(!parentSugar.isCyclicEmpty()) {
                    if(child === parentSugar.getCyclic().getReductionSugar()){
                        continue;
                    }
                }
                parentSugar.setChildGlycan(child);
            }
            edge.setParentSugar(parentSugar);
            edge.setChildSugar(childSugar);
        }
    }
    stageUpdate(liaise.selectedNode, target, edge);
    edge.addEventListener("click", edgeClickEvent, false);
    return;
}