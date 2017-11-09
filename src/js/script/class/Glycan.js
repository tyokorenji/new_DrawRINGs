//@flow
"use strict";

import createjs from "createjs-easeljs";
import { Sugar } from "./Sugar";

class Glycan extends createjs.Container {
    rootNode: Sugar;  //その糖鎖構造のルート単糖
    amino: string;  //糖鎖が就職するタンパク質の結合アミノ酸部位
    // parentGlycan: Glycan;
    // parentSugars: Array<Sugar>;
    // childGlycans: Array<Glycan>;

    constructor(){
        super();
        this.rootNode = new Sugar("undefined");
        this.amino = "";
        // this.parentGlycan = new Glycan();
        // this.parentSugars = [];
        // this.childGlycans = [];
    }

    getRootNode(): Sugar {
        return this.rootNode;
    }

    setRootNode(sugar: Sugar) {
        this.rootNode = sugar;
        return;
    }

    getAmino(): string {
        return this.amino;
    }

    setAmino(amino: string) {
        this.amino = amino;
        return;
    }

    // hasParentGlycan(): boolean {
    //     if (this.parentSugars.length != 0) return true;
    //     else return false;
    // }
    //
    // getParentGlycan(): Glycan {
    //     return this.parentGlycan;
    // }
    //
    // setParentGlycan(glycan: Glycan) {
    //     this.parentGlycan = glycan;
    //     return;
    // }
    //
    // getParentSugars(): Array<Sugar> {
    //     return this.parentSugars;
    // }
    //
    // setParentSugars(sugar: Sugar) {
    //     this.parentSugars.push(sugar);
    //     return;
    // }
    //
    // hasChildGlycans(): boolean {
    //     if (this.childGlycans.length != 0) return true;
    //     else return false;
    // }
    //
    // getChildGlycans(): Array<Glycan> {
    //     return this.childGlycans;
    // }
    //
    // setChildGlycans(glycan: Glycan) {
    //     this.childGlycans.push(glycan);
    //     return;
    // }


}

export { Glycan };