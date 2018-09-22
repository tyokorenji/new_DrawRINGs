//@flow
"use strict";

import { liaise } from "../main";
import { drawEdge } from "./drawEdge";
import { stageUpdate } from "./updateStage";
import { culcParentChild } from "../culcParentChild";
import { Sugar } from "../class/Sugar";
import { edgeClickEvent } from "../edgeClickEvent";
import { glycans } from "../main";
import { Glycobond } from "../class/Glycobond";
import { createCyclic } from "../createCyclic/createCyclic";
import { drawCyclicEdge } from "../createCyclic/drawCyclicEdge";
import { Fragment } from "../class/Fragment";
import { Glycan } from "../class/Glycan";
import { selectParentNode } from "./selectParentNode";
import {Cyclic} from "../class/Cyclic";
import {FragmentBracket} from "../class/FragmentBracket";
import {removeGlycoBindShape} from "../removeObjet/removeGlycoBindShape";

/**
 *
 * @param target: Sugar, ２つ目に選択された単糖
 * liaise.sekectedNode: Sugar, 最初に選択された単糖
 * 選択された２つの単糖間の結合を描画(サイクリックの場合、サイクリックを描画)
 * 親子関係の計算
 * 子単糖のGlycanを親単糖にする。（子単糖の子単糖も全て）
 *
 */
export function createEdge(target: Sugar) {
    if(target.getGlycan() instanceof Fragment && liaise.selectedNode.getGlycan() instanceof Fragment) {
        if(target.getGlycan().getParentFragmentBracket() !== liaise.selectedNode.getGlycan().getParentFragmentBracket()) {
            alert("you selected two monosacchrides are different fragment. ");
            return;
        }
    }
    let parentChild: Array<Sugar> = selectParentNode(liaise.selectedNode, target);  //選択された２つのNodeの親子関係を計算。parentChild[0]に親、parentChild[1]に子
    //すでに描画されている場合削除
    if(parentChild[1].isCyclicEmpty()) {
        //サイクリックでない場合
        for (let parentBond: Glycobond of parentChild[1].getParentBond()) {
            switch (parentBond.getParentSugar()) {
                case parentChild[0]: {
                    liaise.removeStage(parentBond);
                    parentChild[1].getParentBond().splice(parentChild[1].getParentBond().indexOf(parentBond), 1);  //子単糖から結合を削除
                    parentChild[1].getParentSugars().splice(parentChild[1].getParentSugars().indexOf(parentChild[0]), 1);  //子単糖から親単糖を削除
                    parentChild[0].getChildSugars().splice(parentChild[0].getChildSugars().indexOf(parentChild[1]), 1);  //親単糖から子単糖を削除
                    parentChild[1].setGlycan(new Glycan());  //仮のGlycanクラスを設定。
                    break;
                }
                default: {
                    if(parentChild[1].getGlycan() instanceof Fragment) {
                        switch(parentChild[1].getGlycan().getRootNode()) {
                            case parentChild[1]: {
                                switch(parentChild[1].getParentBond().length) {
                                    case 1: {
                                        removeGlycoBindShape(parentChild[1].getParentBond()[0]);
                                        parentChild[1].parentBonds = [];
                                        break;
                                    }
                                    default: {
                                        for(let parentBond: Glycobond of parentChild[1].getParentBond()) {
                                            if(!parentBond.hasParentSugar()) {
                                                removeGlycoBindShape(parentChild[1].getParentBond()[parentChild[1].getParentBond().indexOf(parentBond)]);
                                                parentChild[1].getParentBond().splice(parentChild[1].getParentBond().indexOf(parentBond), 1);
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }
                    else {
                        continue;
                    }
                }
            }
        }
    }
    //サイクリックの場合
    else {
        for (let parentBond: Glycobond of parentChild[0].getParentBond()) {
            switch (parentBond.getParentSugar()) {
                case parentChild[1]: {
                    liaise.removeStage(parentBond);
                    parentChild[0].getParentBond().splice(parentChild[0].getParentBond().indexOf(parentBond), 1);  //子単糖から結合を削除
                    parentChild[0].getParentSugars().splice(parentChild[0].getParentSugars().indexOf(parentChild[0]), 1);  //子単糖から親単糖を削除
                    parentChild[1].getChildSugars().splice(parentChild[1].getChildSugars().indexOf(parentChild[0]), 1);  //親単糖から子単糖を削除
                    // parentChild[1].setGlycan(new Glycan());  //仮のGlycanクラスを設定。
                    break;
                }
                default: {
                    continue;
                }
            }
        }
    }
    //サイクリックかどうかを計算
    let bind: Glycobond;
    switch(parentChild[0].getGlycan()) {
        //サイクリックかどうかを見ている
        case (parentChild[1].getGlycan()): {
            //サイクリック
            bind = createCyclic(parentChild[0], parentChild[1]);
            console.log("サイクリック", bind);
            break;
        }
        //グリコシド結合
        default: {
            bind = createGlycobond(parentChild[0], parentChild[1]);
            console.log("グリコシド結合", bind);
            break;
        }
    }
    bind.addEventListener("click", edgeClickEvent, false);

    stageUpdate(parentChild[0], parentChild[1], bind);

    // let parentChild: Array<Sugar> = culcParentChild(liaise.selectedNode, target);
    // let pastBond: Object;
    // switch (liaise.selectedNode.getGlycan()) {
    //     case target.getGlycan(): {
    //         for(let parentBond: Glycobond of parentChild[1].getParentBond()) {
    //             if(parentBond.getChildSugar() === parentChild[1] && parentBond.getParentSugar() === parentChild[0]) {
    //                 return;
    //             }
    //         }
    //         if (parentChild[1].isCyclicEmpty()) {
    //             pastBond = {};
    //             break;
    //         }
    //         else {
    //             return;
    //         }
    //     }
    //     default: {
    //         if(parentChild[0].getGlycan() instanceof Fragment && parentChild[1].getGlycan() instanceof Fragment) {
    //             pastBond = parentChild[1].getParentBond()[0];
    //         }
    //         else {
    //             pastBond = {};
    //         }
    //         break;
    //     }
    // }
    // if(Object.keys(pastBond).length) {
    //     liaise.removeStage(pastBond);
    //     liaise.stageUpdate();
    // }
    // let edge: Glycobond;
    // switch (liaise.selectedNode.getGlycan()) {
    //     case target.getGlycan():
    //         edge = drawCyclicEdge(liaise.selectedNode, target);
    //         createCyclic(edge, liaise.selectedNode, target);
    //         break;
    //     default: {
    //         edge = drawEdge(liaise.selectedNode.xCoord, liaise.selectedNode.yCoord, target.xCoord, target.yCoord);
    //
    //         let parentSugar: Sugar = parentChild[0];
    //         let childSugar: Sugar = parentChild[1];
    //         childSugar.setParentSugars(parentSugar);
    //         childSugar.setParentBond(edge);
    //         if(childSugar.getGlycan() instanceof Fragment) {
    //             childSugar.getGlycan().getParentFragmentBracket().spliceChildGlycans(childSugar.getGlycan());
    //         }
    //         else if(childSugar.getGlycan() instanceof Glycan) {
    //             for (let i = 0; i < glycans.length; i++) {
    //                 switch (childSugar.getGlycan()) {
    //                     case glycans[i]: {
    //                         glycans.splice(i, 1);
    //                         childSugar.setGlycan(parentSugar.getGlycan());
    //                         childSugar.setLayer(parentSugar.getLayer() + 1);
    //                         break;
    //                     }
    //                     default:
    //                         break;
    //                 }
    //             }
    //         }
    //
    //         parentSugar.setChildSugars(childSugar);
    //         parentSugar.setChildNodes(childSugar);
    //         for (let child: Sugar of parentSugar.getChildSugars()) {
    //             if(!parentSugar.isCyclicEmpty()) {
    //                 if(child === parentSugar.getCyclic().getReductionSugar()){
    //                     continue;
    //                 }
    //             }
    //             parentSugar.setChildGlycan(child);
    //         }
    //         edge.setParentSugar(parentSugar);
    //         edge.setChildSugar(childSugar);
    //     }
    // }
    // stageUpdate(liaise.selectedNode, target, edge);
    // edge.addEventListener("click", edgeClickEvent, false);
    return;
}



/**
 * グリコシド結合の描画とデータ構造設定
 */
let createGlycobond = (parentSugar: Sugar, childSugar: Sugar): Glycobond => {
    let glycoBond: Glycobond = drawEdge(parentSugar.getXCoord(), parentSugar.getYCoord(), childSugar.getXCoord(), childSugar.getYCoord());  //Node間の結合を描画
    parentSugar.setChildSugars(childSugar); //親Nodeに子Nodeを設定
    childSugar.setParentSugars(parentSugar);  //子Nodeに親Nodeを設定
    childSugar.setParentBond(glycoBond);  // 子Nodeに親Nodeへの結合を設定
    glycoBond.setChildSugar(childSugar);
    glycoBond.setParentSugar(parentSugar);
    setGlycanDeta(childSugar, parentSugar.getGlycan());
    setLayer(parentSugar.getGlycan().getRootNode(), 1);
    return glycoBond;
};

//子単糖以降非還元末端までのglycanデータを親単糖のglycanに変更
let setGlycanDeta = (childSugar: Sugar, glycan: Glycan) => {
    console.log("set glycan data");
    for (let array_in_glycans: Glycan of glycans) {
        if(array_in_glycans === childSugar.getGlycan()) {
            glycans.splice(glycans.indexOf(array_in_glycans), 1);
        }
    }
    if(childSugar.getGlycan() instanceof Fragment) {
        console.log("childSugar.getGlycan", childSugar.getGlycan());
        let fragmentBracket: FragmentBracket = childSugar.getGlycan().getParentFragmentBracket();
        console.log(fragmentBracket);
        for(let childFragment: Fragment of fragmentBracket.getChildGlycans()) {
            if(childSugar.getGlycan() === childFragment) {
                fragmentBracket.getChildGlycans().splice(fragmentBracket.getChildGlycans().indexOf(childFragment), 1);
            }
        }
    }
    childSugar.setGlycan(glycan);

    //chilsSugarがサイクリックでないとき
    if(childSugar.isCyclicEmpty()) {
        for (let child: Sugar of childSugar.getChildSugars()) {
            setGlycanDeta(child, glycan);
        }
    }
    //childSugarがサイクリックを持っているとき
    else {
        let cyclicSugar: Sugar = childSugar.getCyclic().getReductionSugar();
        for (let child: Sugar of childSugar.getChildSugars()) {
            switch (child) {
                case (cyclicSugar): {
                    continue;
                }
                default: {
                    setGlycanDeta(child, glycan);
                }
            }
        }
    }

};

//ルート単糖から全てのlayerを計算し代入
let setLayer = (sugar: Sugar, layer: number) => {
    sugar.setLayer(layer);
    if(sugar.isCyclicEmpty()) {
        for (let child: Sugar of sugar.getChildSugars()) {
            setLayer(child, layer + 1);
        }
    }
    //childSugarがサイクリックを持っているとき
    else {
        let cyclicSugar: Sugar = sugar.getCyclic().getReductionSugar();
        for (let child: Sugar of sugar.getChildSugars()) {
            switch (child) {
                case (cyclicSugar): {
                    continue;
                }
                default: {
                    setLayer(child, layer + 1);
                }
            }
        }
    }
    
};
