//@flow
import {getRelativeCoordinate} from "../getRelativeCoordinate";

"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createDeoxynonulosonate = (nameSymbol: Symbol, symbolSize: number): Object => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (nameSymbol) {
        case nodeModeType.DEOXYNONULOSONATE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Deoxynonulosonate";
            break;
        case nodeModeType.KDN:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Kdn";
            break;
        case nodeModeType.NEU5AC:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "Neu5Ac";
            break;
        case nodeModeType.NEU5GC:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "Neu5Gc";
            break;
        case nodeModeType.NEU:
            shape.graphics.beginFill(getColor("brown"));
            nodeName = "Neu";
            break;
        case nodeModeType.SIA:
            shape.graphics.beginFill(getColor("red"));
            nodeName = "Sia";
            break;
    }
    // let isomer = SNFGSymbolGlycan[nodeName].isomer;
    // let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawRect(-2 * symbolSize / 2, -2 * symbolSize / 2, 2 * symbolSize, 2 * symbolSize);
    shape.rotation = 45;
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