//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createUnknown = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect) {
        case nodeModeType.UNKNOWN:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Unknown";
            break;
        case nodeModeType.BAC:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "Bac";
            break;
        case nodeModeType.LDMANHEP:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "LDmanHep";
            break;
        case nodeModeType.KDO:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "Kdo";
            break;
        case nodeModeType.DHA:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "Dha";
            break;
        case nodeModeType.DDMANHEP:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "DDmanHep";
            break;
        case nodeModeType.MURNAC:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "MurNAc";
            break;
        case nodeModeType.MURNGC:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "MurNGc";
            break;
        case nodeModeType.MUR:
            shape.graphics.beginFill(getColor("brown"));
            nodeName = "Mur";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.moveTo(-1 * symbolSize, 0)
        .lineTo(-1 * 1 / 2 * symbolSize, -1 * symbolSize)
        .lineTo(1 / 2 * symbolSize, -1 * symbolSize)
        .lineTo(symbolSize, 0)
        .lineTo(1 / 2 * symbolSize, symbolSize)
        .lineTo(-1 * 1 / 2 * symbolSize, symbolSize)
        .closePath()
        .endFill();
    let sugar: Sugar = new Sugar(nodeName);
    sugar.setIsomer(isomer);
    sugar.setRing(ring);
    sugar.setCarbBone(SNFGSymbolGlycan[nodeName].carbBone);
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
