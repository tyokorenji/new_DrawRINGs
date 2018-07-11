//@flow
"use strict";

import { MultipleBond } from "../class/MultipleBond";
import { liaise } from "../main";

export let removeBridgeShape = (bridge: MultipleBond) => {
    liaise.removeStage(bridge);
};