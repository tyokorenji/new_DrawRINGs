//@flow
"use strict";

import { getColor } from "../data/getColor";
import { basicData } from "../data/graphicsData";
import { Glycobond } from "../class/Glycobond";
import createjs from "createjs-easeljs";
import { Sugar } from "../class/Sugar";

export let drawCyclicEdge = (target1: Sugar, target2: Sugar): Glycobond => {
    let line: createjs.Shape = new createjs.Shape();
    line.graphics.beginStroke(getColor("black"));
    line.graphics.setStrokeStyle(basicData.edgeSize);
    line.graphics.moveTo(target1.xCoord, target1.yCoord);

    if(target1.getLayer() === target2.getLayer()) {
        console.log(target1);
        console.log(target2);
        console.log(target1.getLayer());
        console.log(target2.getLayer());
        line.graphics.quadraticCurveTo((target1.xCoord + target2.xCoord) / 2 - basicData.cyclicEdge, (target1.yCoord + target2.yCoord) / 2, target2.xCoord, target2.yCoord);
    }
    else if (target1.getLayer() < target2.getLayer()){
        if(target1.yCoord >= target2.yCoord) {
            line.graphics.quadraticCurveTo((target1.xCoord + target2.xCoord) / 2, (target1.yCoord + target2.yCoord) / 2 - basicData.cyclicEdge, target2.xCoord, target2.yCoord);
        }
        else {
            line.graphics.quadraticCurveTo((target1.xCoord + target2.xCoord) / 2, (target1.yCoord + target2.yCoord) / 2 + basicData.cyclicEdge, target2.xCoord, target2.yCoord);
        }
    }
    else {
        if(target1.yCoord > target2.yCoord) {
            line.graphics.quadraticCurveTo((target1.xCoord + target2.xCoord) / 2, (target1.yCoord + target2.yCoord) / 2 + basicData.cyclicEdge, target2.xCoord, target2.yCoord);
        }
        else {
            line.graphics.quadraticCurveTo((target1.xCoord + target2.xCoord) / 2, (target1.yCoord + target2.yCoord) / 2 - basicData.cyclicEdge, target2.xCoord, target2.yCoord);
        }
    }
    let edge: Glycobond = new Glycobond();
    edge.addChild(line);

    return edge;
};