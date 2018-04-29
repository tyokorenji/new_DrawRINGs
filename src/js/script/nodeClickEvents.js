//flow
"use strict";

import {modeType} from "../react/modeType";
import { liaise } from "./main";
import { createEdge } from "./createBind/createBind";

export function nodeClickEvents(event) {
    switch (liaise.modeType) {
        //Bind Glycanの機能
        case modeType.EDGE:
            if (liaise.nodeClick) {
                if (event.currentTarget.checkHighLight()) {
                    console.log("Glc二回目");
                    event.currentTarget.offLight();
                    liaise.changeNodeClick();
                    liaise.removeSelectedNode();
                }
                else {
                    createEdge(event.currentTarget);
                    liaise.selectedNode.offLight();
                    liaise.changeNodeClick();
                    liaise.removeSelectedNode();
                }
            }
            else {
                event.currentTarget.highLight();
                liaise.changeNodeClick();
                liaise.setSelectedNode(event.currentTarget);
            }
            break;
        default:
            return;
    }
}