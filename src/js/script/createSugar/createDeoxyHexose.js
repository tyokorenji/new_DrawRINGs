//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createDeoxyHexose = (nameSymbol: Symbol, symbolSize: number): Object => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    switch (nameSymbol) {
        case nodeModeType.DEOXYHEXOSE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Deoxyhexose";
            break;
        case nodeModeType.QUI:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "Qui";
            break;
        case nodeModeType.RHA:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Rha";
            break;
        case nodeModeType.D6GUL:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "6dGul";
            break;
        case nodeModeType.D6ALT:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "6dAlt";
            break;
        case nodeModeType.D6TAL:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "6dTal";
            break;
        case nodeModeType.FUC:
            shape.graphics.beginFill(getColor("red"));
            nodeName = "Fuc";
            break;
    }
    // let isomer = SNFGSymbolGlycan[nodeName].isomer;
    // let ring = SNFGSymbolGlycan[nodeName].ring;
    // let length = 30;
    shape.graphics.moveTo(2 * symbolSize / Math.sqrt(3), 0)
        .lineTo(-2 * symbolSize / (2 * Math.sqrt(3)), 2 * symbolSize / 2)
        .lineTo(-2 * symbolSize / (2 * Math.sqrt(3)), -2 * symbolSize / 2)
        .closePath()
        .endFill();
    shape.rotation = 270;
    // let sugar: Sugar = new Sugar(nodeName);
    // sugar.setIsomer(isomer);
    // sugar.setRing(ring);
    // sugar.setCarbBone(SNFGSymbolGlycan[nodeName].carbBone);
    // sugar.createIsomerShape();
    // sugar.createRingShape();
    // liaise.stage.addChild(sugar);
    // sugar.addChild(shape);
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
    return { "shape": shape, "nodeName": nodeName };
};