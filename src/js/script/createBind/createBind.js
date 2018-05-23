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

export function createEdge(target: Sugar) {
    if (target.xCoord > liaise.selectedNode.xCoord) {
        for (let item of target.childSugars) {
            if (item === liaise.selectedNode) return;
        }
    }
    else {
        for (let item of liaise.selectedNode.childSugars) {
            if (item === target) return;
        }
    }
    let edge: Glycobond;
    switch (liaise.selectedNode.getGlycan()) {
        case target.getGlycan():
            edge = drawCyclicEdge(liaise.selectedNode, target);
            createCyclic(edge, liaise.selectedNode, target);
            break;
        default: {
            edge = drawEdge(liaise.selectedNode.xCoord, liaise.selectedNode.yCoord, target.xCoord, target.yCoord);
            let parentChild: Array<Sugar> = culcParentChild(liaise.selectedNode, target);
            let parentSugar: Sugar = parentChild[0];
            let childSugar: Sugar = parentChild[1];
            childSugar.setParentSugars(parentSugar);
            childSugar.setParentBond(edge);
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
            parentSugar.setChildSugars(childSugar);
            parentSugar.setChildNodes(childSugar);
            edge.setParentSugar(parentSugar);
            edge.setChildSugar(childSugar);
        }
    }
    stageUpdate(liaise.selectedNode, target, edge);
    edge.addEventListener("click", edgeClickEvent, false);
    return;
}