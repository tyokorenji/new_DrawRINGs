//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createAssigned = (event: Event, symbolSize: number): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect) {
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
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    let carbBone = SNFGSymbolGlycan[nodeName].carbBone;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawPolyStar(0, 0, symbolSize, 5, 0, -90);
    let sugar: Sugar = new Sugar(nodeName);
    sugar.setIsomer(isomer);
    sugar.setRing(ring);
    sugar.setCarbBone(carbBone);
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