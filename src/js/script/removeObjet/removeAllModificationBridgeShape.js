//@flow
"use strict";

import { liaise } from "../main";
import { Sugar } from "../class/Sugar";
import {Bridge} from "../class/Bridge";

export let removeAllModificationBridgeShape = (sugar: Sugar) => {
    for(let item of sugar.getChildModifications()) {
        liaise.removeStage(item);
        if(!item.isChildCommaShapeEmpty()) {
            liaise.removeStage(item.getChildCommaShape());
        }
    }
    for(let item of sugar.getChildMultipleBind()) {
        liaise.removeStage(item);
        if(!item.isChildCommaShapeEmpty()) {
            liaise.removeStage(item.getChildCommaShape());
        }
    }
    console.log(sugar);
    for(let bridge: Bridge of sugar.getChildBridge()) {
        liaise.removeStage(bridge);
    }
};