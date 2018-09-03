//@flow
"use strict";

import { MultipleBond } from "../class/MultipleBond";
import { liaise } from "../main";

export let removeMultipleBond = (multipleBond: MultipleBond) => {
    liaise.removeStage(multipleBond);
};