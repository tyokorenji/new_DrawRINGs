//@flow
"use strict";

import { Edge } from "./Edge";
import { Bridge } from "./Bridge";
import { Modification } from "./Modification";
import { Sugar } from "./Sugar";

export class BridgeEdge extends Edge {
    childModification: Object;
    childSugar: Object;
    parentModification: Object;

    constructor(){
        super();
        this.childModification = {};
        this.childSugar = {};
        this.parentModification = {};
    }

    setChildModification(childModification: Modification) {
        this.childModification = childModification;
    }
    getChildModification(): Modification {
        return this.childModification;
    }
    isChildModificationEmpty(): boolean {
        return !Object.keys(this.childModification.length);
    }

    setChildSugar(childSugar: Sugar) {
        this.childSugar = childSugar;
    }
    getChildSugar(): Sugar {
        return this.childSugar;
    }
    isChildSugarEmpty(): boolean {
        return !Object.keys(this.childSugar.length);
    }

    setParentModification(parentModification: Modification) {
        this.parentModification = parentModification;
    }
    getParentModification(): Modification {
        return this.parentModification;
    }
    isParentModificationEmpty(): boolean {
        return !Object.keys(this.parentModification.length);
    }
}