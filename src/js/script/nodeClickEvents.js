//flow
"use strict";

import {modeType} from "../react/modeType";
import {liaise} from "./main";

export function nodeClickEvents() {
    //Bind Glycanの機能
    if (liaise.modeType === modeType.EDGE) {
        console.log(event.target);
        event.highLight();
        return;
    }
}