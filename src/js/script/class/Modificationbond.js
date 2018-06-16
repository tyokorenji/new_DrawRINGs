//@flow
"use strict";

import { Edge } from "./Edge";

class Modificationbond extends Edge {
    name: string;  //修飾の結合の名前
    parentSugarPosition: number;  //親単糖の結合場所

    constructor(){
        super();
        this.parentSugarPosition = NaN;
    }

    hasParentPosition(): boolean {
        if (isNaN(this.parentSugarPosition)) return false;
        else return true;
    }

    getParentSugarPosition(): number {
        return this.parentSugarPosition;
    }

    setParentPosition(parentPosition: number) {
        this.parentSugarPosition = parentPosition;
        return;
    }

}

export { Modificationbond };