//@flow
"use strict";

import { Bracket } from "./Bracket";
import { Sugar } from "./Sugar";
// import { Glycan } from "./Glycan";
// import { Fragment } from "./Fragment";

class FragmentBracket extends Bracket {
    parentSugars: Array<Sugar>;  //フラグメントがつく親単糖
    parentGlycan: Object ; //親となる糖鎖構造
    childGlycans: Array<Object>;  //フラグメントの糖鎖構造
    isResuctionSugar: boolean;

    constructor(){
        super();
        this.parentSugars = [];
        this.parentGlycan = {};
        this.childGlycans = [];
        this.isResuctionSugar = false;
    }

    getParentSugars(): Array<Sugar> {
        return this.parentSugars;
    }

    setParentSugars(sugar: Sugar) {
        this.parentSugars.push(sugar);
        return;
    }

    getParentGlycan(): Object {
        return this.parentGlycan;
    }

    setParentGlycan(glycan: Object) {
        this.parentGlycan = glycan;
        return;
    }

    getChildGlycans(): Array<Object> {
        return this.childGlycans;
    }

    setChildGlycans(glycan: Object) {
        this.childGlycans.push(glycan);
        return;
    }

    hasChildGlycans(): boolean {
        if(this.childGlycans.length === 0) return false;
        else return true;
    }
    spliceChildGlycans(glycan: Object) {
        for(let i = 0; i < this.childGlycans.length; i++) {
            if(glycan === this.childGlycans[i]) {
                this.childGlycans.splice(i, 1);
            }
        }
        return;
    }

    changeIsReductionSugar() {
        if(this.isResuctionSugar) {
            this.isResuctionSugar = false;
        }
        else {
            this.isResuctionSugar = true;
        }
    }

}



export { FragmentBracket }