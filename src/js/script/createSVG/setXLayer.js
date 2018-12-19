//@flow
"use strict";

import {Sugar} from "../class/Sugar";
import {FragmentBracket} from "../class/FragmentBracket";
import {Fragment} from "../class/Fragment";
import {Glycan} from "../class/Glycan";

export const setXLayer = (glycanArray: Array<Glycan>) => {
    for(let glycan: Glycan of glycanArray) {
        recuversiveSetXLayer(glycan.getRootNode(), 0);
    }
    for(let glycan: Glycan of glycanArray) {
        if(glycan instanceof Fragment) {
            let fragmentBracket: FragmentBracket = glycan.getParentFragmentBracket();
            console.log(fragmentBracket);
            if(fragmentBracket.isEmptyParentGlycan()) {
                let parentSugars: Array<Sugar> = fragmentBracket.getParentSugars();
                let maxX: number = parentSugars[0].getXLayer();
                for(let sugar: Sugar of parentSugars) {
                    if(maxX < sugar.getXLayer()) {
                        maxX = sugar.getXLayer();
                    }
                }
                glycan.culcPlucXLayer(maxX);
            }
            else {
                glycan.culcPlucXLayer(fragmentBracket.getParentGlycan().getMaxXLayer());
            }

        }
    }
};

const recuversiveSetXLayer = (sugar: Sugar, layer: number) => {
    sugar.setXLayer(layer);
    sugar.getGlycan().setMaxXLayer(layer);
    layer += 1;
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()) {
            for(let child: Sugar of sugar.getChildSugars()) {
                recuversiveSetXLayer(child, layer);
            }
        }
        else {
            for(let child: Sugar of sugar.getChildSugars()) {
                if(sugar.getChildCyclic().getReductionSugar() === child) continue;
                else recuversiveSetXLayer(child, layer);
            }
        }
    }
    else {
        return;
    }
};