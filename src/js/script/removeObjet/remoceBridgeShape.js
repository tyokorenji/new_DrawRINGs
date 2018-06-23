//@flow
"use strict";

import { Bridge } from "../class/Bridge";
import { liaise } from "../main";

export let removeBridgeShape = (bridge: Bridge) => {
    liaise.removeStage(bridge);
};