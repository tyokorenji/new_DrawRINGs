//@flow
"use strict";

import { Sugar } from "../class/Sugar";
import { Glycan } from "../class/Glycan";

export let selectParentNode = (sugar1: Sugar, sugar2: Sugar): Array<Sugar> => {
    console.log("sugar1", sugar1.getXCoord());
    console.log("sugar2", sugar2.getXCoord());
    if(sugar1.getXCoord() < sugar2.getXCoord()) {
        return [sugar2, sugar1];
    }
    else if(sugar1.getXCoord() > sugar2.getXCoord()) {
        return [sugar1, sugar2];
    }
    else if(sugar1.getGlycan().getRootNode() !== sugar1 && sugar2.getGlycan().getRootNode() === sugar2) {
        return [sugar1, sugar2];
    }
    else if(sugar1.getGlycan().getRootNode() === sugar1 && sugar2.getGlycan().getRootNode() !== sugar2) {
        return [sugar2, sugar1];
    }
    else {
        let result: boolean = window.confirm(sugar1.getName() + " is parent node?? (if you select \"no\", parent node will be )" + sugar2.getName());
        if (result) {
            return [sugar1, sugar2];
        }
        else {
            return [sugar2, sugar1];
        }
    }
};