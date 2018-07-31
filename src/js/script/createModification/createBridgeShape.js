//@flow
"use strict";

import { liaise } from "../main";
import { Bridge } from "../class/Bridge";
import createjs from "createjs-easeljs";
import { basicData } from "../data/graphicsData";
import { getColor } from "../data/getColor";

export let createBridgeShape = (bridge: Bridge): Bridge => {
    let shape: createjs.Shape = new createjs.Text(liaise.selectedModification, basicData.bridgeSize + "px serif", getColor("black"));
    bridge.addChild(shape);
    return bridge;
};