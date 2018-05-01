//@flow
"use strict";

import { VisibleElement } from "./VisibleElement";
import { Sugar } from "./Sugar";

class Edge extends VisibleElement{
    linkageType: string;
    parentSugar: Sugar;
    childSugar: Sugar;
    childAnomeric: string;

    constructor(){
        super();
        this.linkageType = "undefined";
        this.parentSugar;
        this.childSugar;
        this.childAnomeric = "undefined";
    }

    setLinkageType(linkage: string) {
        this.linkageType = linkage;
        return;
    }
    setParentSugar(sugar: Sugar) {
        this.parentSugar = sugar;
        return;
    }

    setChildSugar(sugar: Sugar) {
        this.childSugar = sugar;
        return;
    }

    setChildAnomeric(anomeric: string) {
        this.childAnomeric = anomeric;
        return;
    }
}

export { Edge };