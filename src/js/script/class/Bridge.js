//@flow
"use strict";

import { Node } from "./Node";
import { Sugar } from "./Sugar";
import { BridgeEdge } from "./BridgeEdge";

export class Bridge extends Node {
    name: string;
    parentSugar: Object;
    childSugar: Object;
    parentEdge: Object;
    parentBind: Object;
    childBind: Object;

    constructor(){
        super();
        this.name = "";
        this.parentSugar = {};
        this.childSugar = {};
        this.parentEdge = {};
        this.parentBind = {};
        this.childBind = {};
    }

    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }

    setParentSugar(parentSugar: Sugar) {
        this.parentSugar = parentSugar;
    }
    getParentSugar(): Sugar {
        return this.parentSugar;
    }

    setParentEdge(parentEdge: BridgeEdge) {
        this.parentEdge = parentEdge;
    }
    getParentEdge(): BridgeEdge {
        return this.parentEdge;
    }

    setParentBind(parentBind: BridgeEdge) {
        this.parentBind = parentBind;
    }
    getParentBind(): BridgeEdge {
        return this.parentBind;
    }

    setChildBind(childBind: BridgeEdge) {
        this.childBind = childBind;
    }
    getChildBind(): BridgeEdge {
        return this.childBind;
    }

}