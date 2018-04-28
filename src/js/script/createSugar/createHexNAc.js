//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createHexNAc = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect) {
        case nodeModeType.HEXNAC:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "HexNAc";
            break;
        case nodeModeType.GLCNAC:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "GlcNAc";
            break;
        case nodeModeType.MANNAC:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "ManNAc";
            break;
        case nodeModeType.GALNAC:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "GalNAc";
            break;
        case nodeModeType.GULNAC:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "GulNAc";
            break;
        case nodeModeType.ALTNAC:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "AltNAc";
            break;
        case nodeModeType.ALLNAC:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "AllNAc";
            break;
        case nodeModeType.TALNAC:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "TalNAc";
            break;
        case nodeModeType.IDONAC:
            shape.graphics.beginFill(getColor("brown"));
            nodeName = "IdoNAc";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawRect(-2*  symbolSize / 2, -2 * symbolSize / 2, 2 * symbolSize, 2 * symbolSize);
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
