//@flow
"use strict";

import { modeType } from "../react/modeType";
import { nodeModeType } from "../react/nodeModeType";
import { nodeType } from "../react/nodeModeSearch";
import { createjs } from "createjs-easeljs";
import { liaise } from "./main";

export function drawNode() {
    if (nodeType(liaise.nodeSelect) == nodeModeType.HEXOSE) {
        createHexose();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.HEXNAC) {
        createHexNAc();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.HEXOSAMINE) {
        createHexosamine();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.HEXURONATE) {
        createHexuronate();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.DEOXYHEXOSE) {
        createDeoxyHexose();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.DEOXYHEXNAC) {
        createDeoxyHexNAc();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.DI_DEOXYHEXOSE) {
        createDiDeoxyHexose();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.PENTOSE) {
        createPentose();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.DEOXYNONULOSONATE) {
        createDeoxyNounulosonate();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.DI_DEOXYNONULOSONATE) {
        createDiDexoyNonulosonate();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.UNKNOWN) {
        createUnknown();
    }
    else if (nodeType(liaise.nodeSelect) == nodeModeType.ASSIGNED) {
        createAssigned();
    }
    else {

    }
}

function createHexose() {
    let shape = new createjs.Shape();
    if (liaise.nodeSelect === nodeModeType.HEXOSE) shape.graphics.beginFill("")
    shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
    shape.graphics.drawCircle(0, 0, 100); //半径100pxの円を描画
    stage.addChild(shape); // 表示リストに追加
}
function createHexNAc() {

}
function createHexosamine() {

}
function createHexuronate() {

}
function createDeoxyHexose() {

}
function createDeoxyHexNAc() {

}
function createDiDeoxyHexose() {

}
function createPentose() {

}
function createDeoxyNounulosonate() {

}
function createDiDexoyNonulosonate() {

}
function createUnknown() {

}
function createAssigned() {

}

