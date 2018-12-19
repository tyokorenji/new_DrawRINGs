//@flow
"use strict";

import {Glycan} from "../class/Glycan";
import {Sugar} from "../class/Sugar";
import {Fragment} from "../class/Fragment";
import {FragmentBracket} from "../class/FragmentBracket";

class vSugar extends Sugar {
    constructor(props) {
        super(props);

    }

}

export const setYLayer = (glycanArray: Array<Glycan>): Array<FragmentBracket> => {
    let fragmentBrackets: Array<FragmentBracket> = [];
    let mainGlycan: Glycan = new Glycan();
    for(let glycan: Glycan of glycanArray){
        if(glycan instanceof Fragment) continue;
        else {
            fragmentBrackets = serchFragmentBracket(glycan, fragmentBrackets);
            mainGlycan = glycan;
        }
    }
    console.log(fragmentBrackets);
    for(let bracket: FragmentBracket of fragmentBrackets) {
        let vNode: vSugar = new vSugar("");
        let fragments: Array<Fragment> = bracket.getChildGlycans();
        for(let fragment: Fragment of fragments) {
            vNode.setChildSugars(fragment.getRootNode());
            console.log(fragment);
            fragment.getRootNode().setParentSugars(vNode);
        }
        setEndFragmentYLayer(vNode, 0);
    }
    console.log(mainGlycan);
    setEndFragmentYLayer(mainGlycan.getRootNode(), 0);
    fragmentBrackets.reverse();
    for(let bracket: FragmentBracket of fragmentBrackets) {
        if(bracket.isEmptyParentGlycan()){
            let parentSugars: Array<Sugar> = bracket.getParentSugars();
            let minY: number = 100;
            let maxY: number = 0;
            for(let parentSugar: Sugar of parentSugars) {
                if(minY > parentSugar.getYLayer()) minY = parentSugar.getYLayer();
                if(maxY < parentSugar.getYLayer()) maxY = parentSugar.getYLayer();
            }
            let vNode: vSugar = bracket.getChildGlycans()[0].getRootNode().getParentSugars()[0];
            let middleLayer: number = Math.floor((maxY + minY) / 2);
            bracket.getChildGlycans()[0].culcPlucYLayer(vNode.getYLayer() - middleLayer + 1);

        }
        else {
            let parentGlycan: Glycan = bracket.getParentGlycan();
            parentGlycan.recversiveCulcMaxMinYLayer(parentGlycan.getRootNode());
            let vNode: vSugar = bracket.getChildGlycans()[0].getRootNode().getParentSugars()[0];
            let middleLayer: number = Math.floor((parentGlycan.maxXLayer + parentGlycan.minYLayer) / 2);
            bracket.getChildGlycans()[0].culcPlucYLayer(vNode.getYLayer() - middleLayer + 1);
        }
    }
    console.log("fragmentBrackte", fragmentBrackets);
    return fragmentBrackets.reverse();
};



const serchFragmentBracket = (glycan: Glycan, fragmentBrackets: Array<FragmentBracket>): Array<FragmentBracket> => {
    if(glycan.isFragmentBracketEmpty()) {
        let nonReductionSugars: Array<Sugar> = [];
        nonReductionSugars = recuversiveNonReductionSugar(glycan.getRootNode(), nonReductionSugars);
        let counter: number = 0;
        for(let reductionSugar: Sugar of nonReductionSugars) {
            if(reductionSugar.isFragmentBracketEmpty()) {
                counter += 1;
            }
            else{
                counter += 1;
                for(let fragment: Fragment of reductionSugar.getFragmentBracket().getChildGlycans()) {
                    fragmentBrackets = serchFragmentBracket(fragment, fragmentBrackets);
                }
                let same_FLAG: boolean =false;
                for(let fragmentBracket: FragmentBracket of fragmentBrackets) {
                    if(fragmentBracket === glycan.getFragmentBracket()) {
                        same_FLAG = true;
                    }
                }
                if(!same_FLAG) {
                    fragmentBrackets.push(glycan.getFragmentBracket());
                }
            }
        }
        if(counter === nonReductionSugars.length) {
            return fragmentBrackets;
        }
    }
    else {
        for(let fragmentBracket: FragmentBracket of fragmentBrackets) {
            if(fragmentBracket === glycan.getFragmentBracket()) {
                return  fragmentBrackets;
            }
        }
        for(let fragment: Fragment of glycan.getFragmentBracket().getChildGlycans()) {
            fragmentBrackets = serchFragmentBracket(fragment, fragmentBrackets);
        }
        let same_FLAG: boolean = false;
        for(let fragmentBracket: FragmentBracket of fragmentBrackets) {
            if(fragmentBracket === glycan.getFragmentBracket()) {
                same_FLAG = true;
            }
        }
        if(!same_FLAG) {
            fragmentBrackets.push(glycan.getFragmentBracket());
        }
        return fragmentBrackets;

    }
    return fragmentBrackets;
};

const recuversiveNonReductionSugar = (sugar: Sugar, nonReductionSugars: Array<Sugar>): Array<Sugar> => {
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()){
            for(let child: Sugar of sugar.getChildSugars()) {
                nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
            }
        }
        else {
            if(sugar.getChildSugars().length === 1) {
                nonReductionSugars.push(sugar);
            }
            else {
                for(let child: Sugar of sugar.getChildSugars()) {
                    if(child === sugar.getChildCyclic().getReductionSugar()) continue;
                    else {
                        nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
                    }
                }
            }
        }
    }
    else {
        nonReductionSugars.push(sugar);
        return nonReductionSugars;
    }
    return nonReductionSugars;
};



//普通の糖鎖構造のYLayerのソート
const setEndFragmentYLayer = (sugar: Sugar, most_layer: number): number => {
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()) {
            switch(sugar.getChildSugars().length % 2) {
                case 0: {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        setEndFragmentYLayer(child, most_layer);
                        if(child === sugar.getChildSugars()[Math.floor(sugar.getChildSugars().length / 2) - 1]){
                            most_layer += 2;
                        }
                        else {
                            most_layer += 1;
                        }
                    }
                    sugar.setYLayer(sugar.getChildSugars()[sugar.getChildSugars().length / 2].getYLayer() - 1);
                    break;
                }
                case 1: {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        setEndFragmentYLayer(child, most_layer);
                        most_layer += 1;
                    }
                    sugar.setYLayer(sugar.getChildSugars()[Math.floor(sugar.getChildSugars().length / 2)].getYLayer());
                    break;
                }
            }
        }
        else {
            let cyclicSugar: Sugar = sugar.getChildCyclic().getReductionSugar();
            let counter = 0;
            let maxY = 0;
            let minY = 100;
            switch((sugar.getChildSugars().length - 1) % 2) {
                case 0: {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        if(child === cyclicSugar) continue;
                        if(maxY < most_layer) maxY = most_layer;
                        if(minY > most_layer) minY = most_layer;
                        setEndFragmentYLayer(child, most_layer);
                        counter += 1;
                        if(counter === (sugar.getChildSugars().length - 1) / 2){
                            most_layer += 2;
                        }
                        else {
                            most_layer += 1;
                        }
                    }
                    sugar.setYLayer((maxY + minY) / 2);
                    break;
                }
                case 1: {
                    let maxY = 0;
                    let minY = 100;
                    for(let child: Sugar of sugar.getChildSugars()) {
                        if(child === cyclicSugar) continue;
                        if(maxY < most_layer) maxY = most_layer;
                        if(minY > most_layer) minY = most_layer;
                        setEndFragmentYLayer(child, most_layer);
                        most_layer += 1;
                    }
                    sugar.setYLayer((maxY + minY) / 2);
                    break;
                }
            }
            return most_layer;
        }
    }
    else {
        sugar.setYLayer(most_layer);
        return most_layer;
    }
    return most_layer;
};











// export const setYLayer = (glycanArray: Array<Glycan>) => {
//     for(let glycan: Glycan of glycanArray) {
//         console.log("入った??");
//         glycan.setMaxYLayer(recuversive_set_YLayer(glycan.getRootNode(), 0));
//     }
//
//     for(let glycan: Glycan of glycanArray) {
//         if(glycan instanceof Fragment) continue;
//         else {
//             glycan.recversiveCulcMaxMinYLayer(glycan.getRootNode());
//             let glycanMiddleLayer: number = Math.floor((glycan.maxYLayer + glycan.minYLayer) / 2);
//             //親が非還元末端
//             if(glycan.isFragmentBracketEmpty()) {
//                 let fragmentBrackets: Array<FragmentBracket> = [];
//                 fragmentBrackets = recuversiveSearchFragmetnBracket(glycan.getRootNode(), fragmentBrackets);
//                 for(let bra: FragmentBracket of fragmentBrackets) {
//                     fragmetnBracketSetYLayer(bra);
//       _?>          }
//   _/;l///
//             }
//             //糖鎖構造が親構造
//             else{
//                 let fragmentBracket: FragmentBracket = glycan.getFragmentBracket();
//                 let fragments: Array<Fragment> = fragmentBracket.getChildGlycans();
//                 setYLayerPlus(fragments, glycanMiddleLayer);
//
//             }
//         }
//     }
// };
//
// const setYLayerPlus = (fragments: Array<Fragment>, glycanMiddleLayer) => {
//     switch(fragments.length % 2){
//         case 0: {
//             let lineLayer: number = glycanMiddleLayer;
//             for(let index: number = fragments.length / 2 - 1; index >= 0; index--) {
//                 let fragment: Fragment = fragments[index];
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 fragment.culcPlucYLayer(lineLayer -1 - fragment.maxYLayer);
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 lineLayer = fragment.minYLayer;
//             }
//             lineLayer = glycanMiddleLayer;
//             for(let index: number = fragments.length / 2; index < fragments.length; index++) {
//                 let fragment: Fragment = fragments[index];
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 fragment.culcPlucYLayer(lineLayer + 1 - fragment.minYLayer);
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 lineLayer = fragment.maxYLayer;
//             }
//             break;
//         }
//         case 1: {
//             let center: number = Math.floor(fragments.length / 2);
//             fragments[center].recversiveCulcMaxMinYLayer(fragments[center].getRootNode());
//             let centerMiddleLayer: number = Math.floor((fragments[center].maxYLayer + fragments[center].minYLayer) / 2);
//             fragments[center].culcPlucYLayer(glycanMiddleLayer - centerMiddleLayer);
//             fragments[center].recversiveCulcMaxMinYLayer(fragments[center].getRootNode());
//
//             let lineLayer: number = fragments[center].minYLayer;
//             for(let index: number = center - 1; index >= 0; index--) {
//                 let fragment: Fragment = fragments[index];
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 fragment.culcPlucYLayer(lineLayer -1 - fragment.maxYLayer);
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 lineLayer = fragment.minYLayer;
//             }
//             lineLayer = fragments[center].maxYLayer;
//             for(let index: number = fragments.length / 2; index < fragments.length; index++) {
//                 let fragment: Fragment = fragments[index];
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 fragment.culcPlucYLayer(lineLayer + 1 - fragment.minYLayer);
//                 fragment.recversiveCulcMaxMinYLayer(fragment.getRootNode());
//                 lineLayer = fragment.maxYLayer;
//             }
//         }
//     }
// };
//
// const fragmetnBracketSetYLayer = (bra: FragmentBracket) => {
//     let fragments: Array<Fragment> = bra.getChildGlycans();
//     let parentSugars: Array<Sugar> = bra.getParentSugars();
//     let maxY: number = 0;
//     let minY: number = 10000000000;
//     for(let parentSugar: Sugar of parentSugars) {
//         if(maxY < parentSugar.getYLayer()) maxY = parentSugar.getYLayer();
//         if(minY > parentSugar.getYLayer()) minY = parentSugar.getYLayer();
//     }
//     let glycanMiddleLayer = Math.floor((maxY + minY) / 2);
//     setYLayerPlus(fragments, glycanMiddleLayer);
//
// };
//
// const recuversiveSearchFragmetnBracket = (sugar: Sugar, fragmentBrackets: Array<FragmentBracket>): Array<FragmentBracket> => {
//     if(sugar.hasChildSugars()) {
//         if(sugar.isChildCyclicEmpty()) {
//             for(let child: Sugar of sugar.getChildSugars()) {
//                 fragmentBrackets = recuversiveSearchFragmetnBracket(child, fragmentBrackets);
//             }
//         }
//         else {
//             for(let child: Sugar of sugar.getChildSugars()) {
//                 if(child === sugar.getChildCyclic().getReductionSugar()) {
//                     continue;
//                 }
//                 else {
//                     fragmentBrackets = recuversiveSearchFragmetnBracket(child, fragmentBrackets);
//                 }
//             }
//
//         }
//     }
//     else {
//         if(sugar.isFragmentBracketEmpty()) {
//             return fragmentBrackets;
//         }
//         else {
//             fragmentBrackets.push(sugar.getFragmentBracket());
//             return fragmentBrackets;
//         }
//     }
//     return fragmentBrackets;
// };
//
// /**
//  *
//  * @param target: 今焦点をおいている単糖
//  * @param most_under_layer: 現在セットされている最低のLayer
//  * @returns {number}
//  */
// const recuversive_set_YLayer = (target: Sugar, most_under_layer: number): number => {
//     //targetが再クリックを持っているか持っていない
//     if(target.isChildCyclicEmpty()) {
//         switch(target.getChildSugars().length % 2) {
//             //targetの子供が偶数
//             case 0: {
//                 for(let child: Sugar of target.getChildSugars()) {
//                     recuversive_set_YLayer(child, most_under_layer);
//                     //targetの子供の半分より下の子のはじめをLayerを+2にしたい
//                     if(child === target.childSugars[Math.floor(target.getChildSugars().length / 2 - 1)]) {
//                         most_under_layer += 2;
//                     }
//                     //targetの子供の半分より下の子のLayer以外は+1
//                     else {
//                         most_under_layer += 1;
//                     }
//                 }
//                 break;
//             }
//             //targetの子供が奇数
//             case 1: {
//                 for(let child: Sugar of target.getChildSugars()) {
//                     recuversive_set_YLayer(child, most_under_layer);
//                     most_under_layer += 1;
//                 }
//                 break;
//             }
//         }
//     }
//     //targetがサイクリックを持っている
//     else {
//         //targetの子供がサイクリック先のみじゃないとき
//         if(target.getChildSugars().length > 1) {
//             let childSugars: Array<Sugar> = [];
//             for (let child: Sugar of target.getChildSugars()) {
//                 //childがサイクリックのとき
//                 if (child === target.getChildCyclic().getReductionSugar()) {
//                     continue;
//                 }
//                 //childがサイクリックじゃないとき
//                 else {
//                     childSugars.push(child);
//                 }
//             }
//             switch(childSugars.length % 2) {
//                 //targetの子供が偶数
//                 case 0: {
//                     for(let child: Sugar of childSugars) {
//                         recuversive_set_YLayer(child, most_under_layer);
//                         //targetの子供の半分より下の子のはじめをLayerを+2にしたい
//                         if(child === childSugars[Math.floor(childSugars.length / 2 - 1)]) {
//                             most_under_layer += 2;
//                         }
//                         //targetの子供の半分より下の子のLayer以外は+1
//                         else {
//                             most_under_layer += 1;
//                         }
//                     }
//                     break;
//                 }
//                 //targetの子供が奇数
//                 case 1: {
//                     for(let child: Sugar of childSugars) {
//                         recuversive_set_YLayer(child, most_under_layer);
//                         most_under_layer += 1;
//                     }
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(most_under_layer);
//     //targetが子供を持っている
//     if(target.hasChildSugars()) {
//         //targetの子供がサイクリックを含まない
//         if(target.isChildCyclicEmpty()) {
//             switch(target.getChildSugars().length % 2) {
//                 case 0: {
//                     let child_max_layer = -10000;
//                     let child_min_layer = 1;
//                     for(let child: Sugar of target.getChildSugars()) {
//                         if(child_max_layer < child.getYLayer()) child_max_layer = child.getYLayer();
//                         else if(child_min_layer > child.getYLayer()) child_min_layer = child.getYLayer();
//                     }
//                     target.setYLayer(Math.floor((-1) * (((-1) * child_max_layer + (-1) * child_min_layer) / 2)));  //小数点は切り捨て
//                     return most_under_layer;
//                 }
//                 case 1: {
//                     target.setYLayer(target.childSugars[Math.floor(target.getChildSugars().length /2)].getYLayer());
//                     return most_under_layer;
//                 }
//                 default: break;
//             }
//         }
//         //targetの子供がサイクリックを含む
//         else {
//             let cyclicSugar: Sugar;
//             for(let child: Sugar of target.getChildSugars()) {
//                 if (child === target.getChildCyclic().getReductionSugar()) {
//                     cyclicSugar = child;
//                 }
//             }
//             switch((target.getChildSugars().length - 1) % 2) {
//                 case 0: {
//                     let child_max_layer = -10000;
//                     let child_min_layer = 1;
//                     for(let child: Sugar of target.getChildSugars()) {
//                         if(child === cyclicSugar) continue;
//                         if(child_max_layer < child.getYLayer()) child_max_layer = child.getYLayer();
//                         else if(child_min_layer > child.getYLayer()) child_min_layer = child.getYLayer();
//                     }
//                     target.setYLayer(Math.floor(((child_max_layer + child_min_layer) / 2)));  //小数点は切り捨て
//                     return most_under_layer;
//                 }
//                 case 1: {
//                     let midleSugar: Sugar = target.childSugars[Math.floor(target.getChildSugars().length /2)];
//                     if(midleSugar === cyclicSugar) {
//                         midleSugar = target.childSugars[Math.floor((target.getChildSugars().length - 1) /2)];
//                     }
//                     target.setYLayer(midleSugar.getYLayer());
//                     return most_under_layer;
//                 }
//                 default: break;
//             }
//
//         }
//     }
//     //targetが子供を持っていない。非還元末端
//     else {
//         setNotHasChildSugar(target, most_under_layer);
//         return most_under_layer;
//     }
//     return most_under_layer;
// };
//
// const setNotHasChildSugar = (target: Sugar, most_under_layer: number): number => {
//     console.log("parent", parent);
//     console.log("target", target);
//     console.log("こっちは");
//     target.setYLayer(most_under_layer);
// };