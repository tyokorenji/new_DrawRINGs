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
import { createBridgeModification } from "./createModification/createBridgeModification";

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
            if(liaise.bridgeBind) {
                if (liaise.nodeClick) {
                    if (event.currentTarget.checkHighLight()) {
                        event.currentTarget.offLight();
                        liaise.changeNodeClick();
                        liaise.removeSelectedNode();
                    }
                    else {
                        if(event.currentTarget.hasParentSugars()) {
                            for(let parentSugar of event.currentTarget.getParentSugars()) {
                                if(parentSugar === liaise.selectedNode) {
                                    createBridgeModification(event.currentTarget);
                                    liaise.selectedNode.offLight();
                                    liaise.changeNodeClick();
                                    liaise.removeSelectedNode();
                                    return;
                                }
                            }
                        }
                        if(event.currentTarget.hasChildSugars()) {
                            for(let parentSugar of liaise.selectedNode.getParentSugars()) {
                                if(parentSugar === event.currentTarget) {
                                    createBridgeModification(event.currentTarget);
                                    liaise.selectedNode.offLight();
                                    liaise.changeNodeClick();
                                    liaise.removeSelectedNode();
                                    return;
                                }
                            }
                            alert("Please select monosacchride which is linked selected sugar.");
                            return;
                        }
                        else {
                            alert("Please select monosacchride which is linked selected sugar.");
                            return;
                        }

                    }
                }
                else {
                    event.currentTarget.highLight();
                    liaise.changeNodeClick();
                    liaise.setSelectedNode(event.currentTarget);
                }
                // if(liaise.selectedModifiactionPositions.length !== 0) {
                //     alert("Please don't select");
                //     return;
                // }
                // else {
                //     createBridgeModification();
                // }
                return;
            }
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