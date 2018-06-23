//@flow
"use strict";

import { Glycobond } from "../class/Glycobond";
import { liaise } from "../main";

export let removeBindShape = (bind: Glycobond) => {
    liaise.removeStage(bind);
};