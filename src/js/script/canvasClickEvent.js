//@flow
"use strict";

import { modeType } from "../react/modeType";
import { liaise, glycans, monosachrrides } from "./main";
import { nodeType } from "../react/nodeModeSearch";
import { createNodeShape } from "./createSugar/createNodeShape";
import { nodeClickEvents } from "./nodeClickEvents";
import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";



export function canvasClickEvent() {
    //DrawGlycanの機能
    if (liaise.modeType === modeType.NODE) {
        let shapeType: Symbol = nodeType(liaise.nodeSelect);
        let sugar: Sugar = createNodeShape(shapeType, event);
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
        console.log(sugar.getGlycan());
        return;
    }
    //Bind Glycanの機能
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