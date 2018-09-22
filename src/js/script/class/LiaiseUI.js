//@flow
"use strict";

import createjs from "createjs-easeljs";
import { nodeModeType } from "../../react/nodeModeType";
import { modeType } from "../../react/modeType";
import { Sugar } from "./Sugar";
import { modifiData } from "../data/modificationData";
import { compositionSlected } from "../data/compositionSelected";

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
    multipleBond: boolean;
    bridgeBind: boolean;
    compositionSelect: Object;
    undefNode: boolean;
    undefNodeSelect: Object;
    undefLinkage: boolean;
    undefLinkageSelect: Object;
    undefComposition: boolean;
    undefCompositionName: string;
    selectedFragmentNonReductionSugar: Array<Sugar>;


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
        this.multipleBond = false;
        this.bridgeBind = false;
        this.compositionSelect = compositionSlected;
        this.undefNode = false;
        this.undefNodeSelect = {
            name: "",
            isomer: "",
            ring: "",
            backbone: ""
        };
        this.undefLinkage = false;
        this.undefLinkageSelect = {
            anomeric: "",
            parentPosition: "",
            childPotisiotn: ""
        };
        this.undefComposition = false;
        this.undefCompositionName = "";
        this.selectedFragmentNonReductionSugar = [];
    }

    initFragmentBrackCondition() {
        for(let sugar: Sugar of this.getSelectedFragmentNonReductionSugar()) {
            sugar.offLight();
        }
        this.selectedFragmentNonReductionSugar = [];
    }


    initUndefNodeSelect() {
        this.undefNode = false;
        this.undefNodeSelect = {
            name: "",
            isomer: "",
            ring: "",
            backbone: ""
        };
    }

    initUndefLinakgeSelect() {
        this.undefLinkage = false;
        this.undefLinkageSelect = {
            anomeric: "",
            parentPosition: "",
            childPotisiotn: ""
        };
    }
    initUndefComposition() {
        this.undefComposition = false;
        this.undefCompositionName = "";
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
        this.multipleBond = false;
        this.bridgeBind = false;
    }
    changeMultipleBind(data: boolean) {
        this.multipleBond = data;
    }
    changeBridgeBind(data: boolean) {
        this.bridgeBind = data;
    }

    getCompositionSelect(): Object {
        return this.compositionSelect;
    }
    setCompositionSelect(name: string, value: number) {
        this.compositionSelect[name] = value;
    }

    searchComposition(): Array<string> {
        let resultArray: Array<string> = [];
        console.log(this.compositionSelect);
        for(let key in this.compositionSelect) {
            if(this.compositionSelect[key] !== 0) {
                if(key === "Undefined") {
                    console.log(this.undefCompositionName);
                    resultArray.push(this.undefCompositionName);
                }
                else {
                    resultArray.push(key);
                }
            }
            else {
                continue;
            }
        }
        return resultArray;

    }

    setSelectedFragmentNonReductionSugar(sugar: Sugar) {
        this.selectedFragmentNonReductionSugar.push(sugar);
    }

    getSelectedFragmentNonReductionSugar(): Array<Sugar> {
        return this.selectedFragmentNonReductionSugar;
    }

    isSelectedFragmentNonReductionSugarEmpty(): boolean {
        if(this.selectedFragmentNonReductionSugar.length === 0) return true;
        else return false;
    }
    delSelectedFragmentNonReductionSugar(sugar: Sugar) {
        this.selectedFragmentNonReductionSugar.splice(this.selectedFragmentNonReductionSugar.indexOf(sugar), 1);
    }
    initSelectedFragmentNonReductionSugar() {
        this.selectedFragmentNonReductionSugar = [];
    }
}


export { LiaiseUI };
