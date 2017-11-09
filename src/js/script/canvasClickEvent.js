//@flow
"use strict";

import { modeType } from "../react/modeType";
import { nodeModeType } from "../react/nodeModeType";
import { liaise, glycans } from "./main";
import { nodeType } from "../react/nodeModeSearch";
import { createjs } from "createjs-easeljs";
import { createNodeShape } from "./createNodeShape";
import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";



export function canvasClickEvent() {

    console.log("a");
    if (liaise.modeType === modeType.NODE) {
        let shapeType: Symbol = nodeType(liaise.nodeSelect);
        let sugar: Sugar = createNodeShape(shapeType, event);
        if (glycans.length == 0) {
            let glycan: Glycan = new Glycan();
            glycan.setRootNode(sugar);
            glycans.push(glycan);
        }
        return;
    }

    else if (liaise.modeType === modeType.EDGE) {
        return;
    }

    else if (liaise.modeType === modeType.STRUCTURE) {
        return;
    }

    else if (liaise.modeType === modeType.CLEAR) {
        return;
    }

    else if (liaise.modeType === modeType.DRAW_KCF) {
        return;
    }

    else if (liaise.modeType === modeType.KCF_TEXT_OUT) {
        return;
    }

    else if (liaise.modeType === modeType.UNDO) {
        return;
    }

    else if (liaise.modeType === modeType.REDO) {
        return;
    }

    else if (liaise.modeType === modeType.NOT_SELECTED) {
        return;
    }
}