//@flow
"use strict";

import { liaise } from "../main";
import { drawEdge } from "./drawEdge";
import { stageUpdate } from "./updateStage";
import { culcParentChild } from "../culcParentChild";
import { Sugar } from "../class/Sugar";
import { Edge } from "../class/Edge";

export function createEdge(target: Sugar) {
    console.log(liaise.selectedNode);
    console.log(target);
    let edge: Edge = drawEdge(liaise.selectedNode.xCoord, liaise.selectedNode.yCoord, target.xCoord, target.yCoord);
    let parentChild: Array<Sugar> = culcParentChild(liaise.selectedNode, target);
    let parentSugar = parentChild[0];
    let childSugar = parentChild[1];
    childSugar.setParentSugars(parentSugar);
    childSugar.setParentBond(edge);
    parentSugar.setChildSugars(childSugar);
    parentSugar.setChildNodes(childSugar);
    stageUpdate(parentSugar, childSugar, edge);
    return;
};