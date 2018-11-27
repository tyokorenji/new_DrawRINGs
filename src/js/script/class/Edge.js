//@flow
"use strict";

import { VisibleElement } from "./VisibleElement";
import { Sugar } from "./Sugar";

class Edge extends VisibleElement{
    linkageType: string;
    parentSugar: Object;
    parentPosition: string;  //親Nodeの結合位置(未定義の場合"undefined")

    constructor(){
        super();
        this.linkageType = "undefined";
        this.parentSugar = {};
        this.parentPosition = "undefined";
    }

    setLinkageType(linkage: string) {
        this.linkageType = linkage;
        return;
    }
    getLinkageType(): string {
        return this.linkageType;
    }

    setParentSugar(sugar: Sugar) {
        this.parentSugar = sugar;
        return;
    }
    getParentSugar(): Sugar {
        return this.parentSugar;
    }
    isEmptyParentSugar(): boolean {
        return !Object.keys(this.parentSugar).length;
    }

    hasParentPosition(): boolean {
        if (this.parentPosition === "undefined") return false;
        else return true;
    }
    getParentPosition(): string {
        return this.parentPosition;
    }
    setParentPositon(parentPosition: string) {
        this.parentPosition = parentPosition;
        return;
    }

    calcMiddleCoordinate(): Array<number> {
        let lineTo: Array<number> = [ this.children[0].graphics._activeInstructions[0].x, this.children[0].graphics._activeInstructions[0].y];
        let moveTo: Array<number> = [ this.children[0].graphics._activeInstructions[1].x, this.children[0].graphics._activeInstructions[1].y];
        return [(lineTo[0] + moveTo[0]) / 2, (lineTo[1] + moveTo[1]) / 2];
    }

    calcQuaterCoordinate(middleCoordinate: Array<number>): Array<Array<number>> {
        let quarterCoordinate1: Array<number> = [];
        let quarterCoordinate2: Array<number> = [];
        quarterCoordinate1.push((middleCoordinate[0] + this.children[0].graphics._activeInstructions[0].x )/ 2);
        quarterCoordinate1.push((middleCoordinate[1] + this.children[0].graphics._activeInstructions[0].y )/ 2);
        quarterCoordinate2.push((middleCoordinate[0] + this.children[0].graphics._activeInstructions[1].x )/ 2);
        quarterCoordinate2.push((middleCoordinate[1] + this.children[0].graphics._activeInstructions[1].y )/ 2);
        if (quarterCoordinate1[0] > quarterCoordinate2[0]) {
            return [quarterCoordinate1, quarterCoordinate2];
        }
        else {
            return [quarterCoordinate2, quarterCoordinate1];
        }
    }

    whitchParentHighChildLow(parent: Array<number>, child: Array<number>): boolean {
        if(parent[1] < child[1] ) return true;
        else { return false; }
    }

}

export { Edge };