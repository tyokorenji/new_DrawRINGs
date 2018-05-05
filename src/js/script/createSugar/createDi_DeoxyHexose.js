//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createDi_DeoxyHexose = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect) {
        case nodeModeType.DI_DEOXYHEXOSE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Di-deoxyhexose";
            break;
        case nodeModeType.OLI:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "Oli";
            break;
        case nodeModeType.TYV:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Tyv";
            break;
        case nodeModeType.ABE:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "Abe";
            break;
        case nodeModeType.PAR:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "Par";
            break;
        case nodeModeType.DIG:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "Dig";
            break;
        case nodeModeType.COL:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "Col";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawRect(- symbolSize * 2  / 2, - symbolSize * 2  * 2 / 3 / 2,  symbolSize * 2 ,  symbolSize * 2  * 2 / 3);
    let coordinate: Array<number> = getRelativeCoordinate(event);
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
    sugar.x = coordinate[0];
    sugar.y = coordinate[1];
    sugar.xCoord = coordinate[0];
    sugar.yCoord = coordinate[1];
    liaise.stage.update();
    return sugar;
};
