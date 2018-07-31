//@flow
"use strict";

import { BridgeEdge } from "../class/BridgeEdge";
import { Bridge } from "../class/Bridge";
import { Sugar } from "../class/Sugar";
import createjs from "createjs-easeljs";
import {basicData} from "../data/graphicsData";
import {getColor} from "../data/getColor";

export let createBridgeEdgeShape = (parentBind: BridgeEdge, childBind: BridgeEdge, parentSugar: Sugar, childSugar: Sugar, bridge: Bridge) => {
    let parentEdge: createjs.Shape = new createjs.Shape();
    let childEdge: createjs.Shape = new createjs.Shape();
    parentEdge.graphics.beginStroke(getColor("black"))
        .setStrokeStyle(basicData.edgeSize)
        .moveTo(parentSugar.getXCoord(), parentSugar.getYCoord())
        .lineTo(bridge.getXCoord(), bridge.getYCoord() + bridge.children[0].getMeasuredHeight() / 2);
    childEdge.graphics.beginStroke(getColor("black"))
        .setStrokeStyle(basicData.edgeSize)
        .moveTo(childSugar.getXCoord(), childSugar.getYCoord())
        .lineTo(bridge.getXCoord(), bridge.getYCoord() + bridge.children[0].getMeasuredHeight() / 2);
    parentBind.addChild(parentEdge);
    childBind.addChild(childEdge);
    // return [parentBind, childBind];
};