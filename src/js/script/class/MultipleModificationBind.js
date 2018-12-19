//@flow
"use strict";

import { Edge } from "./Edge";

export class MultipleModificationBind extends Edge {
    name: string;  //修飾の結合の名前
    parentSugarPosition: Array<number>;  //親単糖の結合場所

    constructor(){
        super();
        this.parentSugarPosition = [];
    }

    hasParentPosition(): boolean {
        if (this.parentSugarPosition.length === 0) return false;
        else return true;
    }

    getParentSugarPosition(): Array<number> {
        return this.parentSugarPosition;
    }

    setParentSugarPosition(parentPosition: number) {
        this.parentSugarPosition.push(parentPosition);
        return;
    }

}