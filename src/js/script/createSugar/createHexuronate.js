//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createHexuronate = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    switch (liaise.nodeSelect) {
        case nodeModeType.HEXURONATE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Hexuronate";
            break;
        case nodeModeType.GLCA:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "GlcA";
            break;
        case nodeModeType.MANA:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "ManA";
            break;
        case nodeModeType.GALA:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "GalA";
            break;
        case nodeModeType.GULA:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "GulA";
            break;
        case nodeModeType.ALTA:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "AltA";
            break;
        case nodeModeType.ALLA:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "AllA";
            break;
        case nodeModeType.TALA:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "TalA";
            break;
        case nodeModeType.IDOA:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "IdoA";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.moveTo(-15, -15)
        .lineTo(15, -15)
        .lineTo(15, 15)
        .closePath()
        .endFill();
    switch(liaise.nodeSelect) {
        case nodeModeType.IDOA:
            shape.graphics.beginFill(getColor("brown"));
            break;
        case nodeModeType.ALTA:
            shape.graphics.beginFill(getColor("pink"));
            break;
        default:
            shape.graphics.beginFill(getColor("white"));
            break;
    }
    shape.graphics.moveTo(-15, -15)
        .lineTo(-15, 15)
        .lineTo(15, 15)
        .closePath()
        .endFill();
    shape.rotation = 315;
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