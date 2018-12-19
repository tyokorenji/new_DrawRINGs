//@flow
"use strict";

import createjs from "createjs-easeljs";
import { Sugar } from "./Sugar";
import { FragmentBracket } from "./FragmentBracket";
import {liaise} from "../main";
import {Glycobond} from "./Glycobond";
// import { Fragment } from "./Fragment";

class Glycan extends createjs.Container {
    rootNode: Sugar;  //その糖鎖構造のルート単糖
    amino: string;  //糖鎖が就職するタンパク質の結合アミノ酸部位
    fragmentBracket: Object;
    maxXLayer: number;
    maxYLayer: number;
    minYLayer: number;
    // parentGlycan: Glycan;
    // parentSugars: Array<Sugar>;
    // childGlycans: Array<Glycan>;

    constructor(){
        super();
        this.rootNode = new Sugar("undefined");
        this.amino = "";
        this.fragmentBracket = {};
        this.maxXLayer = 0;
        this.maxYLayer = 0;
        this.minYLayer = 1000;
        // this.parentGlycan = new Glycan();
        // this.parentSugars = [];
        // this.childGlycans = [];
    }

    getRootNode(): Sugar {
        return this.rootNode;
    }

    setRootNode(sugar: Sugar) {
        this.rootNode = sugar;
        return;
    }

    getAmino(): string {
        return this.amino;
    }

    setAmino(amino: string) {
        this.amino = amino;
        return;
    }

    setFragmentBracket(bracket: FragmentBracket) {
        this.fragmentBracket = bracket;
        return;
    }
    getFragmentBracket(): FragmentBracket {
        return this.fragmentBracket;
    }
    isFragmentBracketEmpty(): boolean {
        return !Object.keys(this.fragmentBracket).length;
    }
    setMaxXLayer(layer: number) {
        if(this.maxXLayer < layer) {
            this.maxXLayer = layer;
        }
    }
    getMaxXLayer(): number {
        return this.maxXLayer;
    }
    setMaxYLayer(layer: number) {
        if(this.maxYLayer < layer) {
            this.maxYLayer = layer;
        }
    }
    getMaxYLayer(): number {
        return this.maxXYayer;
    }


    highLight(sugar: Sugar) {
        sugar.highLight();
        switch (sugar) {
            case this.rootNode: {
                // if(this.rootNode instanceof Fragment) {
                //     this.rootNode.getParentBond().highLight();
                // }
                if(sugar.hasParentSugars()) {
                    console.log(sugar.hasParentSugars());
                    let parentBonds = sugar.getParentBond();
                    for (let parentBond: Glycobond of parentBonds) {
                        parentBond.highLight();
                    }
                }
                break;
            }
            default: {
                let parentBonds = sugar.getParentBond();
                for (let parentBond: Glycobond of parentBonds) {
                    parentBond.highLight();
                }
                break;
            }
        }
        if (!sugar.hasChildSugars()){
            liaise.stageUpdate();
            return;
        }
        else {
            for (let child: Sugar of sugar.childSugars) {
                if(!sugar.isChildCyclicEmpty()) {
                    if(sugar.getChildCyclic().getReductionSugar() === child) {
                        continue;
                    }
                }
                this.highLight(child);
            }
        }
        liaise.stageUpdate();
        return;
    }

    offLight(sugar: Sugar) {
        sugar.offLight();
        switch (sugar) {
            case this.rootNode: {
                if(sugar.hasParentSugars()) {
                    let parentBonds = sugar.getParentBond();
                    for (let parentBond: Glycobond of parentBonds) {
                        parentBond.offLight();
                    }
                }
                break;
            }
            default: {
                let parentBonds = sugar.getParentBond();
                for (let parentBond: Glycobond of parentBonds) {
                    parentBond.offLight();
                }
                break;
            }
        }
        if (!sugar.hasChildSugars()){
            liaise.stageUpdate();
            return;
        }
        else {
            for (let child: Sugar of sugar.childSugars) {
                if(!sugar.isChildCyclicEmpty()) {
                    if(sugar.getChildCyclic().getReductionSugar() === child) {
                        continue;
                    }
                }
                this.offLight(child);
            }
        }
        liaise.stageUpdate();
        return;
    }

    checkSugarInGlycan(sugar: Sugar): boolean {
        let result: boolean = false;
        result = this.recuversiveCheckSugarInGlycan(sugar, this.getRootNode());
        return result;
    }
    recuversiveCheckSugarInGlycan(sugar: Sugar, child: Sugar): boolean {
        if (sugar === child) {
            return true;
        }
        else if (!child.isChildCyclicEmpty()) {
            return false;
        }
        else {
            for (let child_child: Sugar of child.getChildSugars()) {
                let result: boolean = this.recuversiveCheckSugarInGlycan(sugar, child_child);
                if (result) {
                    return result;
                }
            }
        }
        return false;
    }

    recversiveCulcMaxMinYLayer(sugar: Sugar) {
        if(sugar.hasChildSugars()) {
            if(sugar.isChildCyclicEmpty()) {
                for(let child: Sugar of sugar.getChildSugars()){
                    this.recversiveCulcMaxMinYLayer(child);
                }
            }
            else {
                for(let child: Sugar of sugar.getChildSugars()) {
                    if(child === sugar.getChildCyclic().getReductionSugar()) {
                        continue;
                    }
                    else{
                        this.recversiveCulcMaxMinYLayer(child);
                    }
                }

            }
        }
        else {
            if(this.maxYLayer < sugar.getYLayer()) this.maxYLayer = sugar.getYLayer();
            if(this.minYLayer > sugar.getYLayer()) this.minYLayer = sugar.getYLayer();
        }
        if(this.maxYLayer < sugar.getYLayer()) this.maxYLayer = sugar.getYLayer();
        if(this.minYLayer > sugar.getYLayer()) this.minYLayer = sugar.getYLayer();
    }



    // isFragmentBracketEmpty(): boolean {
    //     return !Object.keys(this.fragmentBracket).length;
    // }

    // hasParentGlycan(): boolean {
    //     if (this.parentSugars.length != 0) return true;
    //     else return false;
    // }
    //
    // getParentGlycan(): Glycan {
    //     return this.parentGlycan;
    // }
    //
    // setParentGlycan(glycan: Glycan) {
    //     this.parentGlycan = glycan;
    //     return;
    // }
    //
    // getParentSugars(): Array<Sugar> {
    //     return this.parentSugars;
    // }
    //
    // setParentSugars(sugar: Sugar) {
    //     this.parentSugars.push(sugar);
    //     return;
    // }
    //
    // hasChildGlycans(): boolean {
    //     if (this.childGlycans.length != 0) return true;
    //     else return false;
    // }
    //
    // getChildGlycans(): Array<Glycan> {
    //     return this.childGlycans;
    // }
    //
    // setChildGlycans(glycan: Glycan) {
    //     this.childGlycans.push(glycan);
    //     return;
    // }


}

export { Glycan };