//@flow
"use strict";

import { FragmentBracket } from "../class/FragmentBracket";
import { liaise } from "../main";

export let removeFragmentBracketShape = (fragmentBracket: FragmentBracket) => {
    liaise.removeStage(fragmentBracket);
};