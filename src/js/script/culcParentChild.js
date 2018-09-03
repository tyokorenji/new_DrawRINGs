//@flow
"use strict";

import { Sugar } from "./class/Sugar";

export function culcParentChild(sugar1: Sugar, sugar2: Sugar): Array<Sugar> {
    let parentChild: Array<Sugar> = [];
    if (sugar1.getLayer() < sugar2.getLayer()) {
        parentChild = [sugar1, sugar2];
    }
    else {
        parentChild = [sugar2, sugar1];
    }
    // if (sugar1.xCoord < sugar2.xCoord) {
    //     parentChild.push(sugar2);
    //     parentChild.push(sugar1);
    // }
    // else {
    //     parentChild.push(sugar1);
    //     parentChild.push(sugar2);
    // }
    return parentChild;
}