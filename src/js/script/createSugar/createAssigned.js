//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createAssigned = (nameSymbol: Symbol, symbolSize: number): Object => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (nameSymbol) {
        case nodeModeType.ASSIGNED:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Assigned";
            break;
        case nodeModeType.API:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "Api";
            break;
        case nodeModeType.FRU:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Fru";
            break;
        case nodeModeType.TAG:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "Tag";
            break;
        case nodeModeType.SOR:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "Sor";
            break;
        case nodeModeType.PSI:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "Psi";
            break;
    }
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawPolyStar(0, 0, symbolSize, 5, 0, -90);
    return { "shape": shape, "nodeName": nodeName };

};