//@flow
"use strict";

import { removeAllModificationBridgeShape } from "./removeAllModificationBridgeShape";
import { removeGlycoBindShape } from "./removeGlycoBindShape";
import { removeRepeatShape } from "./removeRepeatShape";
import { removeSugarShape } from "./removeSugarShape";
import { removeFragmentBracketShape } from "./removeFragmentBracketShape";
import { glycans, initGlids, initGlycans } from "../main";
import { Sugar } from "../class/Sugar";
import { Glycobond } from "../class/Glycobond";
import { liaise } from "../main";
import { Glycan } from "../class/Glycan";
import { FragmentBracket } from "../class/FragmentBracket";
import { Fragment } from "../class/Fragment";
import { compositions, initCompositions, initCompositionsGlids } from "../main";
import { Composition } from "../class/Composition";
import { checkSugarHasFragmentBracketinGlycan, getSugarHasFragmentBracket } from "../createFragment/checkGetSugarFragment";


//サイクリック エラー
//フラグメント フラグメント糖鎖構造のルートの結合が消えない
export let removeAll = () => {
    let answer: boolean = confirm("Would you remove all Objects?");
    if(answer) {
        if(glycans.length !== 0) {
            console.log("All Clear 入ったよ!!!");
            for(let glycan: Glycan of glycans) {
                if(!glycan.isFragmentBracketEmpty()) {
                    // recuversiveRemoveFragment(glycan.getFragmentBracket());
                    recuversiveRemoveSugarFragment(glycan.getFragmentBracket());
                }
                else if(checkSugarHasFragmentBracketinGlycan(glycan.getRootNode())) {
                    let sugar_has_fragmentBracket: Array<Sugar> = [];
                    sugar_has_fragmentBracket = getSugarHasFragmentBracket(glycan.getRootNode(), sugar_has_fragmentBracket);
                    for(let sugar: Sugar of sugar_has_fragmentBracket) {
                        recuversiveRemoveSugarFragment(sugar.getFragmentBracket());
                    }
                }
                removeGlycan(glycan);
            }
            initGlycans();
            initGlids();
        }
        else if(compositions.length !== 0) {
            for(let composition: Composition of compositions) {
                liaise.removeStage(composition.getCompositionText());
                liaise.removeStage(composition);
            }
            initCompositions();
            initCompositionsGlids();
            return;
        }

    }
    else {
        return;
    }
};

export let removeGlycan = (glycan: Glycan) => {
    recuversiveRemoveCiyclicRepeatInGlycan(glycan.getRootNode());
    recuversiveRemoveGlycan(glycan.getRootNode(), glycan);
};

let recuversiveRemoveGlycan = (sugar: Sugar, glycan: Glycan) => {
    if(sugar.hasChildModificaiton() || sugar.hasChildMultipleBind() || sugar.hasChildBridge()) {
        removeAllModificationBridgeShape(sugar);
    }
    if(sugar.hasParentBond()) {
        for(let bind: Glycobond of sugar.getParentBond()) {
            removeGlycoBindShape(bind);
        }
    }
    removeSugarShape(sugar);
    for(let child: Sugar of sugar.getChildSugars()) {
        recuversiveRemoveGlycan(child, glycan);
    }

};


// export let recuversiveRemoveFragment = (fragmentBracket: FragmentBracket) => {
//     let fragmentGlycans: Array<Fragment> = fragmentBracket.getChildGlycans();
//     removeFragmentBracketShape(fragmentBracket);
//     if(!fragmentGlycans[0].isFragmentBracketEmpty()) {
//         recuversiveRemoveFragment(fragmentGlycans[0].getFragmentBracket());
//     }
//     for(let item: Fragment of fragmentGlycans) {
//         removeGlycan(item);
//     }
// };

let recuversiveRemoveCiyclicRepeatInGlycan = (sugar: Sugar) => {
    if(!sugar.isChildCyclicEmpty()) {
        let childSugar: Sugar = sugar.getChildCyclic().getReductionSugar();
        for (let item: Glycobond of childSugar.getParentBond()) {
            switch(item.getParentSugar()) {
                case sugar: {
                    removeGlycoBindShape(item);
                    sugar.initChildCyclic();
                    for(let i: number = 0; i < sugar.getChildSugars().length; i++) {
                        switch(sugar.getChildSugars()[i]) {
                            case item.getChildSugar(): {
                                sugar.getChildSugars().splice(i, 1);
                            }
                        }
                    }
                }
            }
        }
    }
    if(!sugar.isRepeatBracketEmpty()) {
        removeRepeatShape(sugar.getRepeatBracket());
        sugar.initRepeatBracket();
    }
    for(let child of sugar.getChildSugars()) {
        recuversiveRemoveCiyclicRepeatInGlycan(child);
    }

};



export let recuversiveRemoveSugarFragment = (fragmentBracket: FragmentBracket) => {
    let fragmentGlycans: Array<Fragment> = fragmentBracket.getChildGlycans();
    removeFragmentBracketShape(fragmentBracket);
    //もしFragmentがFragmentBracketを持っていたら
    if(!fragmentGlycans[0].isFragmentBracketEmpty()) {
        recuversiveRemoveSugarFragment(fragmentGlycans[0].getFragmentBracket());
    }
    //もし非還元末端の単糖がFragmentBracketを持っていたら
    for(let fragment: Fragment of fragmentGlycans) {
        if(checkSugarHasFragmentBracketinGlycan(fragment.getRootNode())) {
            let sugar_has_fragmentBracket: Array<Sugar> = [];
            sugar_has_fragmentBracket = getSugarHasFragmentBracket(fragment.getRootNode(), sugar_has_fragmentBracket);
            for(let sugar: Sugar of sugar_has_fragmentBracket) {
                recuversiveRemoveSugarFragment(sugar.getFragmentBracket());
            }
        }
    }
    for(let item: Fragment of fragmentGlycans) {
        removeGlycan(item);
    }
};