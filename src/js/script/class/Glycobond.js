//@flow
"use strict";

import { Edge } from "./Edge";

class Glycobond extends Edge {
    name: string;  //結合の名前("a1-2"など)
    parentPosition: string;  //親Nodeの結合位置(未定義の場合"undefined")
    childPosition: string;  //子Nodeの結合位置(未定義の場合"undefined")

    constructor(){
        super();
        this.name = "undefined";
        this.parentPosition = "undefined";
        this.childPosition = "undefined";
    }

    getName(): string {
        return this.name;
    }

    setName(anomeric: string) {
        this.name = anomeric + this.childPosition; + "-" + this.paretntPosition;
    }

    hasParentPosition(): boolean {
        if (this.parentPosition == "undefined") return false;
        else return true;
    }

    getParentPosition(): string {
        return this.parentPosition;
    }

    setParentPosition(parentPosition: string) {
        this.parentPoisition = parentPosition;
        return;
    }

    hasChilsPosition(): boolean {
        if (this.childtPosition == "undefined") return false;
        else return true;
    }

    getChildPosition(): string {
        return this.childPosition;
    }

    setChildPosition(childPosition: string) {
        this.chilsPosition = childPosition;
        return;
    }
}

export { Glycobond };