//@flow
"use strict";

import { liaise } from "../main";
import { Bridge } from "../class/Bridge";
import createjs from "createjs-easeljs";
import { basicData } from "../data/graphicsData";
import { getColor } from "../data/getColor";

export let createBridgeShape = (bridge: Bridge): Bridge => {
    let shape: createjs.Text = new createjs.Text(liaise.selectedModification, basicData.bridgeSize + "px serif", getColor("black"));
    let rect: createjs.Shape = new createjs.Shape();
    rect.graphics.beginFill(getColor("white"))
        .drawRect(0, 0, shape.getMeasuredWidth(), shape.getMeasuredHeight());
    bridge.addChild(rect);
    bridge.addChild(shape);
    return bridge;
};