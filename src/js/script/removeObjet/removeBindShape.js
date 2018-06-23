//@flow
"use strict";

import { Glycobond } from "../class/Glycobond";
import { liaise } from "../main";

export let removeBind = (bind: Glycobond) => {
    liaise.removeStage(bind);
};