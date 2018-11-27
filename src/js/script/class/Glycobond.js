//@flow
"use strict";

import { Edge } from "./Edge";
import { Sugar } from "./Sugar";
import { getColor } from "../data/getColor";

class Glycobond extends Edge {
    childPosition: string;  //子Nodeの結合位置(未定義の場合"undefined")
    childSugar: Sugar;
    childAnomeric: string;
    parentId: number;
    svgLineShape: string;
    svgTextShape: string;


    constructor(){
        super();
        this.childAnomeric = "undefined";
        this.childPosition = "undefined";
        this.parentId = -1;
        this.svgLineShape = "";
        this.svgTextShape = "";
    }

    hasChildPosition(): boolean {
        if (this.childPosition === "undefined") return false;
        else return true;
    }

    getChildPosition(): string {
        return this.childPosition;
    }

    setChildPosition(childPosition: string) {
        this.childPosition = childPosition;
        return;
    }

    hasChildAnomeric(): boolean {
        if (this.childAnomeric === "undefined") return false;
        else return true;
    }

    setChildAnomeric(anomeric: string) {
        this.childAnomeric = anomeric;
        return;
    }

    getChildAnomeric(): string {
        return this.childAnomeric;
    }

    hasChildSugar(): boolean {
        if (this.childSugar === {}) return false;
        else return true;
    }
    setChildSugar(sugar: Sugar) {
        this.childSugar = sugar;
        return;
    }
    getChildSugar(): Sugar {
        return this.childSugar;
    }

    highLight() {
        this.children[0].graphics._stroke.style = getColor("red");
        this.children[0].alpha = 0.5;
    }
    offLight() {
        this.children[0].graphics._stroke.style = getColor("black");
        this.children[0].alpha = 1.0;
    }

    checkYCoordinate(): boolean {
        if(this.children[0].graphics._activeInstructions[0].y ===  this.children[0].graphics._activeInstructions[1].y) return true;
        else return false;
    }

    setParentId(id: number) {
        this.parentId = id;
    }
    getParentId(): number {
        return this.parentId;
    }
    hasParentid(): boolean {
        if(this.parentId === -1) return false;
        else return true;
    }

    setSvgLineShape(svg: string) {
        this.svgLineShape = svg;
    }
    getSvgLineShape(): string{
        return this.svgLineShape;
    }
    setSvgTextShape(svg: string) {
        this.svgTextShape = svg;
    }
    getSvgTextShape(): string{
        return this.svgTextShape;
    }



}

export { Glycobond };