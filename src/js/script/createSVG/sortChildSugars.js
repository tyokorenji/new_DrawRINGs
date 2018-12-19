//@flow
"use strict";

import {Sugar} from "../class/Sugar";
import {FragmentBracket} from "../class/FragmentBracket";
import {Fragment} from "../class/Fragment";

//全ての単糖のchildSugarsのソート,
//parentPositionの大きい順にソート
export const recurversiveSortChildSugars = (sugar: Sugar) => {
    if(sugar.getGlycan().isFragmentBracketEmpty()) {
        if(sugar.hasChildSugars()) {
            if(sugar.isFragmentBracketEmpty()) {
                if(sugar.isChildCyclicEmpty()) {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        recurversiveSortChildSugars(child);
                    }
                    sugar.sortChildSugar();
                }
                else{
                    for(let child: Sugar of sugar.getChildSugars()) {
                        if(sugar.getChildCyclic().getReductionSugar() === child) continue;
                        else recurversiveSortChildSugars(child);
                    }
                    sugar.sortChildSugar();
                }
            }
            else {
                let fragmentBracket: FragmentBracket = sugar.getFragmentBracket();
                for(let fragment: Fragment of fragmentBracket.getChildGlycans()) {
                    recurversiveSortChildSugars(fragment.getRootNode());
                }
            }
        }
        else {
            if(sugar.isFragmentBracketEmpty()) {
                return;
            }
            else {
                let fragmentBracket: FragmentBracket = sugar.getFragmentBracket();
                for(let fragment: Fragment of fragmentBracket.getChildGlycans()) {
                    recurversiveSortChildSugars(fragment.getRootNode());
                }
            }
        }
    }
    else {
        let fragmentBracket: FragmentBracket = sugar.getGlycan().getFragmentBracket();
        for(let fragment: Fragment of fragmentBracket.getChildGlycans()) {
            recurversiveSortChildSugars(fragment.getRootNode());
        }
    }
};
