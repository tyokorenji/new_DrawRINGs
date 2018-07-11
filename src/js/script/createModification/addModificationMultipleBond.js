//@flow
"use strict";

import { liaise } from "../main";
import { Sugar } from "../class/Sugar";

export let addModificationMultipleBond = (sugar: Sugar) => {
    for(let item of sugar.getChildModifications()) {
        liaise.addStage(item);
        if(!item.isChildCommaShapeEmpty()) {
            liaise.addStage(item.getChildCommaShape());
        }
    }
    for(let item of sugar.getChildBridges()) {
        liaise.addStage(item);
        if(!item.isChildCommaShapeEmpty()) {
            liaise.addStage(item.getChildCommaShape());
        }
    }
};