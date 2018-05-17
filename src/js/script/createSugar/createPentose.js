//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createPentose = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect) {
        case nodeModeType.PENTOSE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Pentose";
            break;
        case nodeModeType.ARA:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Ara";
            break;
        case nodeModeType.LYX:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "Lyx";
            break;
        case nodeModeType.XYL:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "Xyl";
            break;
        case nodeModeType.RIB:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "Rib";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawPolyStar(0, 0, symbolSize, 5, 0.6, -90);
    let sugar: Sugar = new Sugar(nodeName);
    sugar.setIsomer(isomer);
    sugar.setRing(ring);
    sugar.createIsomerShape();
    sugar.createRingShape();
    liaise.stage.addChild(sugar);
    sugar.addChild(shape);
    // switch (sugar.isomerShape.text) {
    //     case "undefined":
    //         break;
    //     default:
    //         sugar.addChild(sugar.isomerShape);
    //         break;
    // }
    // switch (sugar.ringShape.text) {
    //     case "undefined":
    //         break;
    //     default:
    //         sugar.addChild(sugar.ringShape);
    //         break;
    // }
    return sugar;

};