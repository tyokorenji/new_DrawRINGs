//@flow
"use strict";

import { Sugar } from "../class/Sugar";
import { liaise } from "../main";

export let removeSugarShape = (sugar: Sugar) => {
    liaise.removeStage(sugar);
};