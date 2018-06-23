//@flow
"use strict";

import { RepeatBracket } from "../class/RepeatBracket";
import { liaise } from "../main";

export let removeRepeat = (repeatBracket: RepeatBracket) => {
    liaise.removeStage(repeatBracket);
};