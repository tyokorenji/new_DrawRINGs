//@flow
"use strict";

import {modeType} from "../react/modeType";
import { liaise } from "./main";
import { createEdge } from "./createBind/createBind";
import { createRepeatBracket } from "./createRepeatBracket/createRepeatBeacket";
import { RepeatBracket } from "./class/RepeatBracket";
import { repeatClickEvent } from "./createRepeatBracket/repeatClickEvent";

export function nodeClickEvents(event: Object) {
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
        case modeType.REPEAT:
            if (liaise.nodeClick) {
                if (event.currentTarget.checkHighLight()) {
                    event.currentTarget.offLight();
                    liaise.changeNodeClick();
                    liaise.removeSelectedNode();
                }
                else {
                    let repeatBracket: RepeatBracket = createRepeatBracket(liaise.selectedNode, event.currentTarget);
                    repeatBracket.addEventListener("click", repeatClickEvent, false);
                    repeatBracket.startSugar.setRepeatBracket(repeatBracket);
                    liaise.addStage(repeatBracket);
                    liaise.stageUpdate();
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