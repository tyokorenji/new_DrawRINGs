//@flow
"use strict";

import { Sugar } from "../class/Sugar";
import { Glycobond } from "../class/Glycobond";
import createjs from "createjs-easeljs";
import { basicData } from "../data/graphicsData";
import { getColor } from "../data/getColor";

export let createFragmentBind = (sugar: Sugar): Glycobond => {
    let bind: createjs.Shape = new createjs.Shape();
    bind.graphics.beginStroke(getColor("black"));
    bind.graphics.setStrokeStyle(basicData.edgeSize);
    bind.graphics.moveTo(sugar.getXCoord(), sugar.getYCoord())
        .lineTo(sugar.getXCoord() + basicData.symbolSize + basicData.fragmentEdgeDistance, sugar.getYCoord());
    let edge: Glycobond = new Glycobond();
    edge.addChild(bind);
    return edge;
};