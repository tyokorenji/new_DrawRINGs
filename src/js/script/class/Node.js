//@flow
"use strict";

import { VisibleElement } from "./VisibleElement";
import { Sugar } from "./Sugar";
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
        this.parentBonds = [];
    }

    hasParentSugars(): boolean{
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

    hasChildSugars(): boolean{
        if (this.childSugars.length != 0) return true;
        else return false;
    }
    sortChildSugar() {
        let sortedList: Array<Sugar> = [];
        if(this.getChildSugars().length === 1) {
            return;
        }
        let bindList: Array<Glycobond> = [];
        for(let child: Sugar of this.getChildSugars()) {
            for(let bind: Glycobond of child.getParentBond()) {
                if(bind.getParentSugar() === this) {
                    bindList.push(bind);
                }
            }
        }
        for(let bind: Glycobond of bindList) {
            bind.culcMinParentPosition();
        }
        bindList.sort(function(a, b){
            if(Number(a.minParentPosition) > Number(b.minParentPosition)) return -1;
            if(Number(a.minParentPosition) < Number(b.minParentPosition)) return 1;
            return 0;
        });
        console.log("bindList", bindList);
        for(let bind: Glycobond of bindList) {
            for(let child: Sugar of this.getChildSugars()) {
                for(let cbind: Glycobond of child.getParentBond()) {
                    if(cbind === bind) {
                        sortedList.push(child);
                    }
                }
            }
        }
        this.childSugars = sortedList;
    }

    getChildNodes(): Array<Node> {
        return this.childNodes;
    }

    setChildNodes(node: Node) {
        this.childNodes.push(node);
        return;
    }

    // hasChildSugars(): boolean{
    //     if (this.childSugars.length != 0) return true;
    //     else return false;
    // }

    getChildSugars(): Array<Sugar> {
        return this.childSugars;
    }

    setChildSugars(sugar: Sugar) {
        this.childSugars.push(sugar);
        return;
    }

    getParentBond(): Array<Glycobond> {
        return this.parentBonds;
    }

    setParentBond(edge: Glycobond) {
        this.parentBonds.push(edge);
        return;
    }
    hasParentBond(): boolean {
        if(this.parentBonds.length === 0) return false;
        else return true;
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