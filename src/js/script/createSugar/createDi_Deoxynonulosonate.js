//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

export let createDi_Deoxynonulosonate = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    let nodeName = "undefined";
    switch (liaise.nodeSelect) {
        case nodeModeType.DI_DEOXYNONULOSONATE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "Di-deoxynonulosonate";
            break;
        case nodeModeType.PSE:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Pse";
            break;
        case nodeModeType.LEG:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "Leg";
            break;
        case nodeModeType.ACI:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "Aci";
            break;
        case nodeModeType.E4LEG:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "4eLeg";
            break;
    }
    let isomer = SNFGSymbolGlycan[nodeName].isomer;
    let ring = SNFGSymbolGlycan[nodeName].ring;
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    let scale = 20;
    shape.graphics.moveTo(0, -1 * scale / 2)
        .lineTo(-1 * scale  / 2 * Math.sqrt(3), 0)
        .lineTo(0, scale / 2)
        .lineTo(scale / 2 * Math.sqrt(3), 0)
        .closePath()
        .endFill();
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