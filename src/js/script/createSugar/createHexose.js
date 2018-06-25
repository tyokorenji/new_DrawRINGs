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


export let createHexose = (nameSymbol: Symbol, symbolSize: number): Object => {
    let shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (nameSymbol){
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
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawCircle(0, 0, symbolSize);
    return { "shape": shape, "nodeName": nodeName };
};