//@flow
"use strict";

import { modeType } from "../react/modeType";
import { liaise, glycans } from "./main";
import {nodeModeSearch, nodeType} from "../react/nodeModeSearch";
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
import { edgeClickEvent } from "./edgeClickEvent";
import { createComposition } from "./createComposition/createComposition";
import { getMouseCoordinateCanvas } from "./getRelativeCoordinate";
import {SNFGSymbolGlycan} from "./data/SNFGGlycanTable";
import { nodeModeType } from "../react/nodeModeType";
import {UndefSugar} from "./class/UndefSugar";


export function canvasClickEvent() {
    //DrawGlycanの機能
    switch(liaise.modeType) {
        case modeType.NODE: {
            let mouseCoordinate: Array<number> = getMouseCoordinateCanvas(event);
            let coordinates: Array<number> = getRelativeCoordinate(mouseCoordinate[0], mouseCoordinate[1]);
            if(coordinates[0] === 0 && coordinates[1] === 0) {
                return;
            }
            if(!checkGrids(coordinates)) {
                return;
            }
            console.log("canvasClick Nodeに入ったよ！");
            let shapeType: Symbol;
            let sugar: Sugar;
            let difIsomerFlag: boolean = false;
            let difRingFlag: boolean = false;
            let difBackboneFlag: boolean = false;
            if(liaise.undef) {
                if(liaise.undefNodeSelect.name === "") {
                    alert("Please apply undefined sugar name.");
                    return;
                }
                else if (liaise.undefNodeSelect.isomer === "") {
                    alert("Please apply undefined sugar isomer.");
                    return;
                }
                else if (liaise.undefNodeSelect.ring === "") {
                    alert("Please apply undefined sugar ring.");
                    return;
                }
                else if (liaise.undefNodeSelect.backbone === "") {
                    alert("Please apply undefined sugar backbone.");
                    return;
                }
                let name = liaise.undefNodeSelect.name[0].toUpperCase();
                name += liaise.undefNodeSelect.name.substr(1,liaise.undefNodeSelect.name.length).toLowerCase();
                console.log(name);
                liaise.nodeSelect = nodeModeSearch(name);
                switch(liaise.nodeSelect) {
                    case (nodeModeType.NOT_SELECTED): {
                        shapeType = nodeType(liaise.nodeSelect);
                        // sugar = createNodeShape(nodeTableSymbol, event, difIsomerFlag, difRingFlag, difBackboneFlag;
                        break;
                    }
                    default: {
                        if(liaise.undefNodeSelect.isomer !== SNFGSymbolGlycan[name].isomer) {
                            difIsomerFlag = true;
                        }
                        if(liaise.undefNodeSelect.ring !== SNFGSymbolGlycan[name].ring) {
                            difRingFlag = true;
                        }
                        if(liaise.undefNodeSelect.backbone !== SNFGSymbolGlycan[name].carbBone) {
                            difBackboneFlag = true;
                        }
                        shapeType = nodeType(liaise.nodeSelect);
                        if(liaise.nodeSelect === nodeModeType.GLC) {
                            console.log("GLCだよ");
                        }
                        if(shapeType === nodeModeType.HEXOSE) {
                            console.log("HEXOSE");
                        }
                    }
                }

            }
            else {
                shapeType = nodeType(liaise.nodeSelect);
            }
            sugar = createNodeShape(shapeType, event, difIsomerFlag, difRingFlag, difBackboneFlag);
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
                let mouseCoordinate: Array<number> = getMouseCoordinateCanvas(event);
                let coordinates: Array<number> = getRelativeCoordinate(mouseCoordinate[0], mouseCoordinate[1]);
                if(coordinates[0] === 0 && coordinates[1] === 0) {
                    return;
                }
                if(!checkGrids(coordinates)) {
                    return;
                }
                console.log("canvasClick Fragmentに入ったよ！");
                // let shapeType: Symbol = nodeType(liaise.nodeSelect);
                // let sugar: Sugar = createNodeShape(shapeType, event);
                // sugar.setCoordinate(coordinates[0], coordinates[1]);
                // setGlids.push(coordinates);
                let shapeType: Symbol;
                let sugar: Sugar;
                let difIsomerFlag: boolean = false;
                let difRingFlag: boolean = false;
                let difBackboneFlag: boolean = false;
                if(liaise.undef) {
                    if(liaise.undefNodeSelect.name === "") {
                        alert("Please apply undefined sugar name.");
                        return;
                    }
                    else if (liaise.undefNodeSelect.isomer === "") {
                        alert("Please apply undefined sugar isomer.");
                        return;
                    }
                    else if (liaise.undefNodeSelect.ring === "") {
                        alert("Please apply undefined sugar ring.");
                        return;
                    }
                    else if (liaise.undefNodeSelect.backbone === "") {
                        alert("Please apply undefined sugar backbone.");
                        return;
                    }
                    let name = liaise.undefNodeSelect.name[0].toUpperCase();
                    name += liaise.undefNodeSelect.name.substr(1,liaise.undefNodeSelect.name.length).toLowerCase();
                    console.log(name);
                    liaise.nodeSelect = nodeModeSearch(name);
                    switch(liaise.nodeSelect) {
                        case (nodeModeType.NOT_SELECTED): {
                            shapeType = nodeType(liaise.nodeSelect);
                            // sugar = createNodeShape(nodeTableSymbol, event, difIsomerFlag, difRingFlag, difBackboneFlag;
                            break;
                        }
                        default: {
                            if(liaise.undefNodeSelect.isomer !== SNFGSymbolGlycan[name].isomer) {
                                difIsomerFlag = true;
                            }
                            if(liaise.undefNodeSelect.ring !== SNFGSymbolGlycan[name].ring) {
                                difRingFlag = true;
                            }
                            if(liaise.undefNodeSelect.backbone !== SNFGSymbolGlycan[name].carbBone) {
                                difBackboneFlag = true;
                            }
                            shapeType = nodeType(liaise.nodeSelect);
                            if(liaise.nodeSelect === nodeModeType.GLC) {
                                console.log("GLCだよ");
                            }
                            if(shapeType === nodeModeType.HEXOSE) {
                                console.log("HEXOSE");
                            }
                        }
                    }

                }
                else {
                    shapeType = nodeType(liaise.nodeSelect);
                }
                sugar = createNodeShape(shapeType, event, difIsomerFlag, difRingFlag, difBackboneFlag);
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
                let fragmentGlycan: Fragment = new Fragment();
                fragmentGlycan.setRootNode(sugar);
                sugar.setGlycan(fragmentGlycan);
                fragmentGlycan.setParentFragmentBracket(liaise.selectedGlycan[0].getFragmentBracket());
                liaise.selectedGlycan[0].getFragmentBracket().setChildGlycans(fragmentGlycan);
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