//@flow
"use stric";

import { Sugar } from "../class/Sugar";
import { nodeModeType } from "../../react/nodeModeType";
import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { getRelativeCoordinate } from "../getRelativeCoordinate";

export let createUndefSNFG = (symbolSize: number): Object => {
    let shape: createjs.Text = new createjs.Text(liaise.undefNodeSelect.name, symbolSize + "px serif", getColor("black"));
    let rect: createjs.Shape = new createjs.Shape();
    rect.graphics.beginStroke(getColor("white"));
    rect.graphics.setStrokeStyle(2);
    rect.graphics.beginFill(getColor("white"))
        .drawRect(0, 0, shape.getMeasuredWidth(), shape.getMeasuredHeight());

    return {shape: shape, rect: rect, nodeName: liaise.undefNodeSelect.name};
};