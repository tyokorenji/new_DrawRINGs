//@flow
"use strict";

import { Edge } from "./Edge";

class Modificationbond extends Edge {
    name: string;  //修飾の結合の名前
    parentPosition: number;  //親単糖の結合場所

    constructor(){
        super();
        this.parentPosition = NaN;
    }

    hasParentPosition(): boolean {
        if (isNaN(this.parentPosition)) return false;
        else return true;
    }

    getParentPosition(): number {
        return this.parentPosition;
    }

    setParentPosition(parentPosition: number) {
        this.parentPosition = parentPosition;
        return;
    }

}

export { Modificationbond };