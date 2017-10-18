//@flow
"use strict";

import { Edge } from "./Edge";

class Modificationbond extends Edge {
    name: string;  //修飾の結合の名前
    parentPosition: string;  //親単糖の結合場所
    constructor(){
        super();
        this.name = "undefined";
        this.parentPosition = "undefined";
    }

    getName(): string {
        return this.name;
    }

    setName() {
        this.name = "-" + this.parentPosition;
        return;
    }

    hasParentPosition(): boolean {
        if (this.parentPosition == "undefined") return false;
        else return true;
    }

    getParentPosition(): string {
        return this.parentPosition;
    }

    setParentPosition(parentPosition: string) {
        this.parentPosition = parentPosition;
        return;
    }

}

export { Modificationbond };