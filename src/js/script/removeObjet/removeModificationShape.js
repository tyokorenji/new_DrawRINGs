//@flow
"use strict";

import { Modification } from "../class/Modification";
import { liaise } from "../main";

export let removeModificationShape = (modification: Modification) => {
  liaise.removeStage(modification);
};