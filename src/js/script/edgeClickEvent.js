//@flow
"use strict";

import { createLinkage } from "./createBind/createLinkage";
import { liaise } from "./main";
import { modeType } from "../react/modeType";
import { searchSelectedLinkage } from "./createBind/searchSelectedEdge";

export function edgeClickEvent(event: Object) {
    switch(liaise.modeType) {
        case modeType.EDGE: {
            let linkage = searchSelectedLinkage();
            console.log(event.currentTarget);
            createLinkage(event.currentTarget, linkage);
            liaise.stageUpdate();
            break;
        }
        default: {
            return;
        }
    }

}