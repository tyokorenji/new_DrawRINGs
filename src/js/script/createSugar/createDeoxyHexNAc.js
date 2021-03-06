//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createDeoxyHexNAc = (nameSymbol: Symbol, symbolSize: number): Object => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);

    switch (nameSymbol) {
        case nodeModeType.DEOXYHEXNAC:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "DeoxyhexNAc";
            break;
        case nodeModeType.QUINAC:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "QuiNAc";
            break;
        case nodeModeType.RHANAC:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "RhaNAc";
            break;
        case nodeModeType.D6ALTNAC:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "6dAltNAc";
            break;
        case nodeModeType.D6TALNAC:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "6dTalNAc";
            break;
        case nodeModeType.FUCNAC:
            shape.graphics.beginFill(getColor("red"));
            nodeName = "FucNAc";
            break;
    }
    // let isomer = SNFGSymbolGlycan[nodeName].isomer;
    // let ring = SNFGSymbolGlycan[nodeName].ring;
    // // let 2 * symbolSize = 30;
    shape.graphics.moveTo(2 * symbolSize / Math.sqrt(3), 0)  // (x, y) = ( a/√3, 0 )
        .lineTo(-2 * symbolSize / (2 * Math.sqrt(3)), 2 * symbolSize / 2)  // (x, y) = ( -a/(2 * √3), a/2 )
        .lineTo(-2 * symbolSize / (2 * Math.sqrt(3)), 0)
        .closePath()
        .endFill()
        .beginFill(getColor("white"))
        .moveTo(2 * symbolSize / Math.sqrt(3), 0)
        .lineTo(-2 * symbolSize / (2 * Math.sqrt(3)), -2 * symbolSize / 2)  // (x, y) = ( -a/(2 * √3), -a/2 )
        .lineTo(-2 * symbolSize / (2 * Math.sqrt(3)), 0)
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
    // // switch (sugar.isomerShape.text) {
    // //     case "undefined":
    // //         break;
    // //     default:
    // //         sugar.addChild(sugar.isomerShape);
    // //         break;
    // // }
    // // switch (sugar.ringShape.text) {
    // //     case "undefined":
    // //         break;
    // //     default:
    // //         sugar.addChild(sugar.ringShape);
    // //         break;
    // // }
    return { "shape": shape, "nodeName": nodeName };
};