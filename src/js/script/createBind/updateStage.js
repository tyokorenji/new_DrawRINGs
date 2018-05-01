//@flow
"use strict";

import { Sugar } from "../class/Sugar";
import { Edge } from "../class/Edge";
import { liaise } from "../main";

export function stageUpdate(parentSugar: Sugar, childSugar: Sugar, edge: Edge ) {
    liaise.removeStage(parentSugar);
    liaise.removeStage(childSugar);
    liaise.addStage(edge);
    liaise.addStage(parentSugar);
    liaise.addStage(childSugar);
    liaise.stageUpdate();
    return;
};