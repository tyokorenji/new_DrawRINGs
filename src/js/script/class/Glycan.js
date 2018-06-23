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
    // parentGlycan: Glycan;
    // parentSugars: Array<Sugar>;
    // childGlycans: Array<Glycan>;

    constructor(){
        super();
        this.rootNode = new Sugar("undefined");
        this.amino = "";
        this.fragmentBracket = {};
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


    highLight(sugar: Sugar) {
        sugar.highLight();
        switch (sugar) {
            case this.rootNode: {
                // if(this.rootNode instanceof Fragment) {
                //     this.rootNode.getParentBond().highLight();
                // }
                if(sugar.hasParentSugar()) {
                    console.log(sugar.hasParentSugar());
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
                if(!sugar.isCyclicEmpty()) {
                    if(sugar.getCyclic().getReductionSugar() === child) {
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
                if(sugar.hasParentSugar()) {
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
                if(!sugar.isCyclicEmpty()) {
                    if(sugar.getCyclic().getReductionSugar() === child) {
                        continue;
                    }
                }
                this.offLight(child);
            }
        }
        liaise.stageUpdate();
        return;
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