//@flow
"use strict";

import { createLinkage } from "./createBind/createLinkage";
import { liaise } from "./main";
import { modeType } from "../react/modeType";
import { searchSelectedLinkage } from "./createBind/searchSelectedEdge";

export function edgeClickEvent(event: Event) {
    switch(liaise.modeType) {
        case modeType.EDGE:
            let linkage = searchSelectedLinkage();
            switch (linkage) {
                case "undefined":
                    return;
                default:
                    createLinkage(event.currentTarget, linkage);
                    liaise.stageUpdate();

            }
            break;



        default:
            return;
    }

}