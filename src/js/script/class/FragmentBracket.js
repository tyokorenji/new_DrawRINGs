//@flow
"use strict";

import { Bracket } from "./Bracket";
import { Sugar } from "./Sugar";
// import { Glycan } from "./Glycan";
// import { Fragment } from "./Fragment";
// import { recuversiveNonReductionSugar } from "../createSVG/setYLayer";

class FragmentBracket extends Bracket {
    parentSugars: Array<Sugar>;  //フラグメントがつく親単糖
    parentGlycan: Object ; //親となる糖鎖構造
    childGlycans: Array<Object>;  //フラグメントの糖鎖構造
    ParentNonReductionSugars: Array<Sugar>;

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
    hasParentSugars(): boolean {
        if (this.getParentSugars().length === 0) return false;
        else return true;
    }


    getParentGlycan(): Object {
        return this.parentGlycan;
    }

    setParentGlycan(glycan: Object) {
        this.parentGlycan = glycan;
        return;
    }
    isEmptyParentGlycan(): boolean {
        return !Object.keys(this.parentGlycan).length;
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
    getParentGlycanNonReductionSguars(): Array<Sugar> {
        let nonReductionSugars: Array<Sugar> = [];
        return recuversiveNonReductionSugar(this.getParentGlycan().getRootNode(), nonReductionSugars);

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

const recuversiveNonReductionSugar = (sugar: Sugar, nonReductionSugars: Array<Sugar>): Array<Sugar> => {
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()){
            for(let child: Sugar of sugar.getChildSugars()) {
                nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
            }
        }
        else {
            if(sugar.getChildSugars().length === 1) {
                nonReductionSugars.push(sugar);
            }
            else {
                for(let child: Sugar of sugar.getChildSugars()) {
                    if(child === sugar.getChildCyclic().getReductionSugar()) continue;
                    else {
                        nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
                    }
                }
            }
        }
    }
    else {
        nonReductionSugars.push(sugar);
        return nonReductionSugars;
    }
    return nonReductionSugars;
};



export { FragmentBracket };