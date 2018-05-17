//@flow
"use strict";

import { Sugar } from "../class/Sugar";
import { liaise } from "../main";
import { Glycobond } from "../class/Glycobond";

export function stageUpdate(parentSugar: Sugar, childSugar: Sugar, edge: Glycobond ) {
    liaise.removeStage(parentSugar);
    liaise.removeStage(childSugar);
    liaise.addStage(edge);
    liaise.addStage(parentSugar);
    liaise.addStage(childSugar);
    liaise.stageUpdate();
    return;
};