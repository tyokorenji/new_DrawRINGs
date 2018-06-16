//@flow
"use strict";

import {modeType} from "../react/modeType";
import { liaise } from "./main";
import { createEdge } from "./createBind/createBind";
import { createRepeatBracket } from "./createRepeatBracket/createRepeatBeacket";
import { RepeatBracket } from "./class/RepeatBracket";
import { repeatClickEvent } from "./createRepeatBracket/repeatClickEvent";
import { glycanClickEvent } from "./glycanClickEvent";
import { createModification } from "./createModification/createModification";

export function nodeClickEvents(event: Object) {
    switch (liaise.modeType) {
        //Bind Glycanの機能
        case modeType.EDGE: {
            if (liaise.nodeClick) {
                if (event.currentTarget.checkHighLight()) {
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
        }
        case modeType.ADD_MODIFICATION: {
            console.log("add_modificaiton入ったよ！");
            createModification(event.currentTarget);
            break;
        }
        case modeType.REPEAT: {
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
        }
        case modeType.FRAGMENT: {
            glycanClickEvent(event.currentTarget);
            break;
        }
        default:
            return;
    }
}