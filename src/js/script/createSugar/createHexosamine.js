//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createHexosamine = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    switch (liaise.nodeSelect) {
        case nodeModeType.HEXOSAMINE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Hexosamine";
            break;
        case nodeModeType.GLCN:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "GlcN";
            break;
        case nodeModeType.MANN:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "ManN";
            break;
        case nodeModeType.GALN:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "GalN";
            break;
        case nodeModeType.GULN:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "GulN";
            break;
        case nodeModeType.ALTN:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "AltN";
            break;
        case nodeModeType.ALLN:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "AllN";
            break;
        case nodeModeType.TALN:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "TalN";
            break;
        case nodeModeType.IDON:
            shape.graphics.beginFill(getColor("brown"));
            nodeName = "IdoN";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.moveTo(-symbolSize, -symbolSize)
        .lineTo(symbolSize, -symbolSize)
        .lineTo(symbolSize, symbolSize)
        .closePath()
        .endFill()
        .beginFill(getColor("white"))
        .moveTo(-symbolSize, -symbolSize)
        .lineTo(-symbolSize, symbolSize)
        .lineTo(symbolSize, symbolSize)
        .closePath()
        .endFill();
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