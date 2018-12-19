//@flow
"use strict";

import { ParserFragmentEdge } from "./ParserFragmentEdge";
import {Sugar} from "../Sugar";
import {Glycan} from "../Glycan";
import {FragmentBracket} from "../FragmentBracket";
import {Fragment} from "../Fragment";

export class ParserFragments{
    Acceptor: Array<string>;
    Donor: string;
    Edge: ParserFragmentEdge;
    ParentIsGlycan: boolean;

    constructor(){
        this.Acceptor = [];
        this.Donor = "";
        this.Edge = new ParserFragmentEdge();
        this.ParentIsGlycan = true;
    }

    setAcceptor(ac: string) {
        this.Acceptor.push(ac);
    }
    getAcceptor(): Array<string> {
        return this.Acceptor;
    }
    setDonor(donor: string) {
        this.Donor = donor;
    }
    getDonor(): string {
        return this.Donor;
    }
    setEdge(edge: ParserFragmentEdge) {
        this.Edge = edge;
    }
    getEdge(): ParserFragmentEdge {
        return this.Edge;
    }
    getParentIsGlycan(): boolean {
        return this.ParentIsGlycan;
    }

    checkParent(nonReductionObj: Object, monosaccharideObj: Object) {
        for(let nonReduArray in nonReductionObj) {
            let flag2: boolean = true;
            for(let sugar of nonReduArray) {
                let flag: boolean = false;
                for(let sugarId: string of this.Acceptor){
                    if(sugar === monosaccharideObj[sugarId]) {
                        flag = true;
                        break;
                    }
                    else continue;
                }
                if(flag) {
                    continue;
                }
                else {
                    flag2 = false;
                    break;
                }
            }
            if(flag2) {
                this.ParentIsGlycan = true;
                break;
            }
            else {
                continue;
            }
        }
    }
}

const recuversiveCheckGlycan = (sugar: Sugar, parentArray: Array<Sugar>): Array<Sugar> => {
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()) {
            for(let child: Sugar of sugar.getChildSugars()) {
                parentArray = recuversiveCheckGlycan(child, parentArray);
            }
        }
        else {
            for(let child: Sugar of sugar.getChildSugars()) {
                if(sugar.getChildCyclic().getReductionSugar() === child) continue;
                else parentArray = recuversiveCheckGlycan(child, parentArray);
            }
        }
    }
    else {
        parentArray.push(sugar);
        return parentArray;
    }
    return parentArray;

};
