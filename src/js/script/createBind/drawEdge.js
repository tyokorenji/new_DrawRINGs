//@flow
"use strict";

import createjs from "createjs-easeljs";
import { getColor} from "../data/getColor";
import { basicData } from "../data/graphicsData";
import { Edge } from "../class/Edge";

export function drawEdge(x1: number, y1: number, x2: number, y2: number): Edge {
    let line: createjs.Shape = new createjs.Shape();
    line.graphics.beginStroke(getColor("black"));
    line.graphics.setStrokeStyle(basicData.edgeSize);
    line.graphics.moveTo(x1, y1)
        .lineTo(x2, y2);
    let edge: Edge = new Edge();
    edge.addChild(line);

    return edge;
}