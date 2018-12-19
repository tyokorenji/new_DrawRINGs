//@flow
"use strict";

import { MultipleModification } from "../class/MultipleModification";
import { liaise } from "../main";

export let removeMultipleBond = (multipleBond: MultipleModification) => {
    liaise.removeStage(multipleBond);
};