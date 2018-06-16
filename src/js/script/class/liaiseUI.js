//@flow
"use strict";

import createjs from "createjs-easeljs";
import { nodeModeType } from "../../react/nodeModeType";
import { modeType } from "../../react/modeType";
import { Sugar } from "./Sugar";
import { modifiData } from "../data/modificationData";
import { Node } from "./Node";
import { Glycan } from "./Glycan";

class LiaiseUI {
    textArea: string;
    stage: createjs.Stage;
    nodeSelect: Symbol;
    modeType: Symbol;
    nodeClick: boolean;
    selectedNode: Sugar;
    linkageSelect: Symbol;
    selectedGlycan: Array<Object>;
    selectedModification: string;
    selectedModifiactionPositions: Array<number>;
    bridge: boolean;


    constructor() {
        this.textArea = "initial ";
        this.stage = new createjs.Stage();
        this.nodeSelect = nodeModeType.NOT_SELECTED;
        this.modeType = modeType.NOT_SELECTED;
        this.nodeClick = false;
        this.linkageSelect;
        this.selectedGlycan = [];
        this.selectedModification = modifiData.Undefined.TrivalName;
        this.selectedModifiactionPositions = [];
        this.bridge = false;
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

    removeStage(node: Object) {
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

    isSelectedGlycanEmpty(): boolean {
        if(this.selectedGlycan.length === 0) return true;
        else return false;
    }
    getSelectedGlycan(): Array<Object> {
        return this.selectedGlycan;
    }
    initSelectedGlycan() {
        this.selectedGlycan = [];
    }
    setSelectedGlycan(glycan: Object) {
        this.selectedGlycan.push(glycan);
        return;
    }

    setSelectedModifiactionPositions(data: string) {
        this.selectedModifiactionPositions.push(Number(data));
        return;
    }
    deleateSelectedModifiactionPositions(data: string) {
        for (let i = 0; i < this.selectedModifiactionPositions.length; i++){
            if(Number(data) === this.selectedModifiactionPositions[i]) {
                this.selectedModifiactionPositions.splice(i, 1);
            }
        }
        return;
    }
    initModifiactionCondition() {
        this.selectedModification = modifiData.Undefined.TrivalName;
        this.selectedModifiactionPositions = [];
        this.bridge = false;
    }
    changeBridge(data: boolean) {
        this.bridge = data;
    }
}

export { LiaiseUI };

