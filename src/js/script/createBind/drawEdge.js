//@flow
"use strict";

import createjs from "createjs-easeljs";
import { getColor} from "../data/getColor";
import { basicData } from "../data/graphicsData";
import { Glycobond } from "../class/Glycobond";

export function drawEdge(x1: number, y1: number, x2: number, y2: number): Glycobond {
    let line: createjs.Shape = new createjs.Shape();
    line.graphics.beginStroke(getColor("black"));
    line.graphics.setStrokeStyle(basicData.edgeSize);
    line.graphics.moveTo(x1, y1)
        .lineTo(x2, y2);
    let edge: Glycobond = new Glycobond();
    edge.addChild(line);

    return edge;
}