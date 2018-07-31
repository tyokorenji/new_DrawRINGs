//@flow
"use strict";

import { Node } from "./Node";
import createjs from "createjs-easeljs";
import { MultipleBondEdge } from "./MultipleBondBind";

export class MultipleBond extends Node {
    name: string;
    bridgeBond: Object;
    childCommaShape: Object;

    constructor(){
        super();
        this.name = "";
        this.bridgeBond = {};
        this.childCommaShape = {};
    }

    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setBridgeBond(position: MultipleBondEdge) {
        this.bridgeBond = (position);
    }
    getBridgeBond(): MultipleBondEdge {
        return this.bridgeBond;
    }

    setChildCommaShape(commaShape: createjs.Text) {
        this.childCommaShape = commaShape;
    }
    getChildCommaShape(): createjs.Text {
        return this.childCommaShape;
    }
    isChildCommaShapeEmpty(): boolean {
        return !Object.keys(this.childCommaShape).length;
    }
}