//@flow
"use strict";

import { Node } from "./Node";
import { Sugar } from "./Sugar";
import { BridgeEdge } from "./BridgeEdge";

export class Bridge extends Node {
    name: string;
    parentSugar: Object;
    edge: Object;

    constructor(){
        super();
        this.name = "";
        this.parentSugar = {};
        this.childSugar = {};
        this.edge = {};
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
    setEdge(edge: BridgeEdge) {
        this.edge = edge;
    }
    getEdge(): BridgeEdge {
        return this.edge;
    }

}