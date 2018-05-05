//@flow
"use strict";

import { getColor } from "../data/getColor";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { nodeModeType } from "../../react/nodeModeType";
import { liaise } from "../main";
import { Sugar } from "../class/Sugar";
import createjs from "createjs-easeljs";
import { createError } from "./createError";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";
import { nodeClickEvents } from "../nodeClickEvents";


export let createHexose = (event: Event, symbolSize: number): Sugar => {
    let shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect){
        case nodeModeType.HEXOSE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Hexose";
            break;
        case nodeModeType.GLC:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "Glc";
            break;
        case nodeModeType.MAN:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Man";
            break;
        case nodeModeType.GAL:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "Gal";
            break;
        case nodeModeType.GUL:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "Gul";
            break;
        case nodeModeType.ALT:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "Alt";
            break;
        case nodeModeType.ALL:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "All";
            break;
        case nodeModeType.TAL:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "Tal";
            break;
        case nodeModeType.IDO:
            shape.graphics.beginFill(getColor("brown"));
            nodeName = "Ido";
            break;
        default:
            return createError();
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawCircle(0, 0, symbolSize);
    let coordinate: Array<number> = getRelativeCoordinate(event);
    let sugar: Sugar = new Sugar(nodeName);
    sugar.setIsomer(isomer);
    sugar.setRing(ring);
    // sugar.createIsomerShape();
    // sugar.createRingShape();
    liaise.stage.addChild(sugar);
    sugar.addChild(shape);
    // shape.addEventListener("click", nodeClickEvents, false);
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
    sugar.x = coordinate[0];
    sugar.y = coordinate[1];
    sugar.xCoord = coordinate[0];
    sugar.yCoord = coordinate[1];
    liaise.stage.update();
    return sugar;
};