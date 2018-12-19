//@flow
"use strict";

import { Glycan } from "./Glycan";
import { FragmentBracket } from "./FragmentBracket";
import {Sugar} from "./Sugar";
import {Glycobond} from "./Glycobond";
import {liaise} from "../main";

export class Fragment extends Glycan {
    parentFragmentBracket: FragmentBracket;

    constructor() {
        super();
        this.parentFragmentBracket;
    }

    setParentFragmentBracket(fragmentBracket: FragmentBracket) {
        this.parentFragmentBracket = fragmentBracket;
        return;
    }

    getParentFragmentBracket(): FragmentBracket {
        return this.parentFragmentBracket;
    }

    highLight(sugar: Sugar) {
        sugar.highLight();
        let parentBonds = sugar.getParentBond();
        for (let parentBond: Glycobond of parentBonds) {
            parentBond.highLight();
        }
        if (!sugar.hasChildSugars()){
            liaise.stageUpdate();
            return;
        }
        else {
            for (let child: Sugar of sugar.childSugars) {
                if(!sugar.isChildCyclicEmpty()) {
                    if(sugar.getChildCyclic().getReductionSugar() === child) {
                        continue;
                    }
                }
                this.highLight(child);
            }
        }
        liaise.stageUpdate();
        return;
    }

    offLight(sugar: Sugar) {
        sugar.offLight();
        for (let parentBond: Glycobond of sugar.getParentBond()) {
            parentBond.offLight();
        }
        if (!sugar.hasChildSugars()){
            liaise.stageUpdate();
            return;
        }
        else {
            for (let child: Sugar of sugar.childSugars) {
                if(!sugar.isChildCyclicEmpty()) {
                    if(sugar.getChildCyclic().getReductionSugar() === child) {
                        continue;
                    }
                }
                this.offLight(child);
            }
        }
        liaise.stageUpdate();
        return;
    }
    culcPlucXLayer(plus: number) {
        recuversiveSetXLayer(this.getRootNode(), plus + 1);
    }
    culcPlucYLayer(plus: number) {
        recuversiveSetYLayer(this.getRootNode(), plus);
    }
}

const recuversiveSetXLayer = (sugar: Sugar, plusX: number) => {
    sugar.setXLayer(sugar.getXLayer() + plusX);
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()) {
            for(let child: Sugar of sugar.getChildSugars()) {
                recuversiveSetXLayer(child, plusX);
            }
        }
        else {
            for(let child: Sugar of sugar.getChildSugars()) {
                if(sugar.getChildCyclic().getReductionSugar() === child) continue;
                else recuversiveSetXLayer(child, plusX);
            }
        }
    }
    else {
        return;
    }
};
const recuversiveSetYLayer = (sugar: Sugar, plusY: number) => {
    sugar.setYLayer(sugar.getYLayer() + plusY);
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()) {
            for(let child: Sugar of sugar.getChildSugars()) {
                recuversiveSetYLayer(child, plusY);
            }
        }
        else {
            for(let child: Sugar of sugar.getChildSugars()) {
                if(sugar.getChildCyclic().getReductionSugar() === child) continue;
                else recuversiveSetYLayer(child, plusY);
            }
        }
    }
    else {
        return;
    }
};