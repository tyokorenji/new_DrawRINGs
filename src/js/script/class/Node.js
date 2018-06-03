//@flow
"use strict";

import { VisibleElement } from "./VisibleElement";
// import { Sugar } from "./Sugar";
// import { Modification } from "./Modification";
import { Glycobond } from "./Glycobond";

class Node extends VisibleElement {
    // parentSugars: Array<Sugar>;  //親のリスト。単糖
    childNodes: Array<Node>;  //子供のリスト。単糖と修飾
    // childSugars: Array<Sugar>;  //子供のリスト。単糖
    // childModifications: Array<Modification>;  //子供のリスト。修飾
    parentBonds: Array<Object>;  //親の単糖との結合

    constructor(){
        super();
        this.parentSugars = [];
        this.childNodes = [];
        this.childSugars = [];
        this.childModifications = [];
        this.parentBonds = [];
    }

    hasParentSugar(): boolean{
        if (this.parentSugars.length != 0) return true;
        else return false;
    }

    getParentSugars(): Array<Sugar>{
        return this.parentSugars;
    }

    setParentSugars(sugar: Sugar) {
        this.parentSugars.push(sugar);
        return;
    }

    hasChildNodes(): boolean{
        if (this.parentNodes.length != 0) return true;
        else return false;
    }

    getChildNodes(): Array<Node> {
        return this.childNodes;
    }

    setChildNodes(node: Node) {
        this.childNodes.push(node);
        return;
    }

    hasChildSugars(): boolean{
        if (this.childSugars.length != 0) return true;
        else return false;
    }

    getChildSugars(): Array<Sugar> {
        return this.childSugars;
    }

    setChildSugars(sugar: Sugar) {
        this.childSugars.push(sugar);
        return;
    }

    hasChildModifications(): boolean{
        if (this.childModifications.length != 0) return true;
        else return false;
    }

    getChildModifications(): Array<Modification> {
        return this.childModifications;
    }

    setChildModifications(modification: Modification) {
        this.childModifications.push(modification);
        return;
    }

    getParentBond(): Array<Glycobond> {
        return this.parentBonds;
    }

    setParentBond(edge: Glycobond) {
        this.parentBonds.push(edge);
        return;
    }
    checkDrawingParentBond(parentSugar: Sugar): Object {
        for (let parentBond: Glycobond of this.parentBonds) {
            if(parentBond.getParentSugar() === parentSugar) {
                return parentBond;
            }
            else return {};
        }
        return {};
    }
}

export { Node };