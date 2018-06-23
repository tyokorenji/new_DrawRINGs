//@flow
"use strict";

import { Glycobond } from "../class/Glycobond";
import { Sugar } from "../class/Sugar";
import { culcParentChild } from "../culcParentChild";
import { Cyclic } from "../class/Cyclic";
import {glycans} from "../main";

export let createCyclic = (edge: Glycobond, sugar1: Sugar, sugar2: Sugar) => {
    let parentChild: Array<Sugar> = culcParentChild(sugar1, sugar2);
    let parentSugar: Sugar = parentChild[1];
    let childSugar: Sugar = parentChild[0];

    let cyclic: Cyclic = new Cyclic();
    cyclic.setReductionSugar(childSugar);
    cyclic.setNonReductionSugar(parentSugar);
    childSugar.setParentSugars(parentSugar);
    childSugar.setParentBond(edge);
    // for (let i = 0; i < glycans.length; i++) {
    //     switch (parentSugar.getGlycan()) {
    //         case glycans[i]: {
    //             glycans.splice(i, 1);
    //             childSugar.setGlycan(parentSugar.getGlycan());
    //             break;
    //         }
    //         default:
    //             break;
    //     }
    // }
    parentSugar.setChildSugars(childSugar);
    parentSugar.setChildNodes(childSugar);
    parentSugar.setCyclic(cyclic);
    edge.setParentSugar(parentSugar);
    edge.setChildSugar(childSugar);
};