//@flow
"use strict";

import { Bracket } from "./Bracket";
import { Sugar } from "./Sugar";
import { Glycan } from "./Glycan";

class FragmentBracket extends Bracket {
    parentSugars: Array<Sugar>;  //フラグメントがつく親単糖
    parentGlycans: Array<Glycan>;  //親となる糖鎖構造
    childGlycans: Array<Glycan>;  //フラグメントの糖鎖構造

    constructor(){
        super();
        this.parentSugars = [];
        this.parentGlycans = [];
        this.childGlycans = [];
    }

    getParentSugars(): Array<Sugar> {
        return this.parentSugars;
    }

    setParentSugars(sugar: Sugar) {
        this.parentSugars.push(sugar);
        return;
    }

    getParentGlycans(): Array<Glycan> {
        return this.parentGlycans;
    }

    setParentGlycans(glycan: Glycan) {
        this.parentGlycans.push(glycan);
        return;
    }

    getChildGlycans(): Array<Glycan> {
        return this.childGlycans;
    }

    setChildGlycans(glycan: Glycan) {
        this.childGlycans.push(glycan);
        return;
    }
}



export { FragmentBracket }