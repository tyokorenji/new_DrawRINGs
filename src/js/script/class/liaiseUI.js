//@flow
"use strict";

import createjs from "createjs-easeljs";
import { nodeModeType } from "../../react/nodeModeType";
import { modeType } from "../../react/modeType";
import { Sugar } from "./Sugar";
import { Node } from "./Node";

class LiaiseUI {
    textArea: string;
    stage: createjs.Stage;
    nodeSelect: Symbol;
    modeType: Symbol;
    nodeClick: boolean;
    selectedNode: Sugar;
    linkageSelect: Symbol;


    constructor() {
        this.textArea = "initial ";
        this.stage = new createjs.Stage();
        this.nodeSelect = nodeModeType.NOT_SELECTED;
        this.modeType = modeType.NOT_SELECTED;
        this.nodeClick = false;
        this.linkageSelect;
    }

    hasTextAreaValue() {
        if (this.textArea != "") {
            return true;
        }
        else {
            return false;
        }
    }

    changeNodeClick() {
        if (this.nodeClick) this.nodeClick = false;
        else this.nodeClick = true;
        return;
    }

    setSelectedNode(sugar: Sugar) {
        this.selectedNode = sugar;
        return;
    }

    removeSelectedNode() {
        this.selectedNode = new Sugar("undefined");
        return;
    }

    removeStage(node: Node) {
        this.stage.removeChild(node);
        return;
    }

    addStage(node: Object) {
        this.stage.addChild(node);
        return;
    }

    stageUpdate() {
        this.stage.update();
    }
}

export { LiaiseUI };

