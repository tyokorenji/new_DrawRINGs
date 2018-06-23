//@flow
"use strict";

import { modeType } from "../react/modeType";
import { liaise, glycans } from "./main";
import { nodeType } from "../react/nodeModeSearch";
import { createNodeShape } from "./createSugar/createNodeShape";
import { nodeClickEvents } from "./nodeClickEvents";
import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";
import { Fragment } from "./class/Fragment";
import { getRelativeCoordinate } from "./getRelativeCoordinate";
import { setGlids } from "./main";
import { checkGrids } from "./main";
import { Glycobond } from "./class/Glycobond";
import { createFragmentBind } from "./createBind/createFragmentBind";
import {edgeClickEvent} from "./edgeClickEvent";


export function canvasClickEvent() {
    //DrawGlycanの機能
    switch(liaise.modeType) {
        case modeType.NODE: {
            let coordinates: Array<number> = getRelativeCoordinate(event);
            if(coordinates[0] === 0 && coordinates[1] === 0) {
                return;
            }
            if(!checkGrids(coordinates)) {
                return;
            }
            console.log("canvasClick Nodeに入ったよ！");
            let shapeType: Symbol = nodeType(liaise.nodeSelect);
            let sugar: Sugar = createNodeShape(shapeType, event);
            sugar.setCoordinate(coordinates[0], coordinates[1]);
            setGlids.push(coordinates);
            liaise.stageUpdate();
            switch (sugar.name) {
                case "undefined":
                    alert("ERROR!!!");
                    return;
                default:
                    break;
            }
            sugar.addEventListener("click", nodeClickEvents, false);
            let glycan: Glycan = new Glycan();
            glycan.setRootNode(sugar);
            glycans.push(glycan);
            sugar.setGlycan(glycan);
            if (sugar.hasChildSugars()) {
                console.log("childGlycan!!");
                for (let child: Sugar of sugar.getChildSugars()){
                    sugar.setChildGlycan(child);
                }
            }
            return;
        }

        case modeType.FRAGMENT: {
            if(liaise.isSelectedGlycanEmpty()) {
                return;
            }
            else {
                let coordinates: Array<number> = getRelativeCoordinate(event);
                if(coordinates[0] === 0 && coordinates[1] === 0) {
                    return;
                }
                if(!checkGrids(coordinates)) {
                    return;
                }
                console.log("canvasClick Fragmentに入ったよ！");
                let shapeType: Symbol = nodeType(liaise.nodeSelect);
                let sugar: Sugar = createNodeShape(shapeType, event);
                sugar.setCoordinate(coordinates[0], coordinates[1]);
                setGlids.push(coordinates);
                switch (sugar.name) {
                    case "undefined":
                        alert("ERROR!!!");
                        return;
                    default:
                        break;
                }
                sugar.addEventListener("click", nodeClickEvents, false);
                let fragmentGlycan: Fragment = new Fragment();
                fragmentGlycan.setRootNode(sugar);
                sugar.setGlycan(fragmentGlycan);
                fragmentGlycan.setParentFragmentBracket(liaise.selectedGlycan[0].getFragmentBracket());
                liaise.selectedGlycan[0].getFragmentBracket().setChildGlycans(fragmentGlycan);
                // if (sugar.hasChildSugars()) {
                //     for (let child: Sugar of sugar.getChildSugars()){
                //         sugar.setChildGlycan(child);
                //     }
                // }
                // fragmentGlycan.setParentFragmentBracket(liaise.selectedGlycan.getParentFragmentBracket());
                let edge: Glycobond = createFragmentBind(sugar);
                edge.setChildSugar(sugar);
                sugar.setParentBond(edge);
                edge.addEventListener("click", edgeClickEvent, false);
                console.log(edge);
                liaise.removeStage(sugar);
                liaise.addStage(edge);
                liaise.addStage(sugar);
                liaise.stageUpdate();
                return;
            }
        }
        default: {
            return;
        }
    }
}