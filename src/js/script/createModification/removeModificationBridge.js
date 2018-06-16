//@flow
"use strict";

import { liaise } from "../main";
import { Sugar } from "../class/Sugar";

export let removeModificationBridge = (sugar: Sugar) => {
    for(let item of sugar.getChildModifications()) {
        liaise.removeStage(item);
        if(!item.isChildCommaShapeEmpty()) {
            liaise.removeStage(item.getChildCommaShape());
        }
    }
    for(let item of sugar.getChildBridges()) {
        liaise.removeStage(item);
        if(!item.isChildCommaShapeEmpty()) {
            liaise.removeStage(item.getChildCommaShape());
        }
    }
};