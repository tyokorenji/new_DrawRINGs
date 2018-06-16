//@flow
"use strict";

import { Node } from "./Node";

export class Bridge extends Node {
    name: string;
    parentPosition: Array<number>;
    constructor(){
        super();
        this.name = "";
        this.parentPosition = [];
    }

    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setParentPosition(position: number) {
        this.modificationBond.push(position);
    }
    getParentPosition(): Array<number> {
        return this.modificationBond;
    }
}