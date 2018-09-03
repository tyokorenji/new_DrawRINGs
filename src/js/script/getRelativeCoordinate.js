//@flow
"use strict";

import { basicData } from "./data/graphicsData";
import { Sugar } from "./class/Sugar";
import {removeSetGlids, setGlids} from "./main";
import {Glycobond} from "./class/Glycobond";
import {Glycan} from "./class/Glycan";
import { createFragmentBracket } from "./createFragment/createFragmentBracket";
import {Fragment} from "./class/Fragment";
import {FragmentBracket} from "./class/FragmentBracket";
import createjs from "createjs-easeljs";
import { liaise } from "./main";
import { Bridge } from "./class/Bridge";


export let getRelativeCoordinate = (mouseX: number, mouseY: number): Array<number> => {
    // let rect = event.target.getBoundingClientRect();
    // let mouseX = event.clientX - rect.left;
    // let mouseY = event.clientY - rect.top;
    let normalDistace = basicData.symbolDistance + basicData.symbolSize * 2;
    let distace = basicData.symbolDistance + basicData.symbolSize * 2;
    let flagX = false;
    let flagY = false;
    while(distace < basicData.canvasSize + normalDistace) {
        if(distace - normalDistace < mouseX && distace > mouseX){
            mouseX = (distace - normalDistace) + (normalDistace / 2);
            flagX = true;
        }
        if(distace - normalDistace < mouseY && distace > mouseY){
            mouseY = (distace - normalDistace) + (normalDistace / 2);
            flagY = true;
        }
        distace = distace + normalDistace;
        if(distace > basicData.canvasSize - normalDistace) {
            if(!flagX && !flagY) {
                mouseX = 0;
                mouseY = 0;
            }
        }
    }

    return [mouseX, mouseY];
};

export let getMouseCoordinateCanvas = (event: Object): Array<number> => {
    let rect = event.target.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    return [mouseX, mouseY];
};

export let changeNextGlidCoordinate = (parentSugar: Sugar, childSugar: Sugar): Array<number> => {
    let normalDistace = basicData.symbolDistance + basicData.symbolSize * 2;
    //親糖鎖構造の左側にある
    if (parentSugar.getXCoord() !== childSugar.getXCoord() && parentSugar.getYCoord() === childSugar.getYCoord()) {
        if (parentSugar.getXCoord() - normalDistace === childSugar.getXCoord()) {

            glycanChildSugarChangeCoordinate(childSugar, childSugar, -normalDistace, 0);
            // removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            // return [childSugar.getXCoord() - normalDistace, childSugar.getYCoord()];
        }

    }
    //親糖鎖構造の左上にある
    else if (parentSugar.getXCoord() !== childSugar.getXCoord() && parentSugar.getYCoord() > childSugar.getYCoord()) {
        if(parentSugar.getXCoord() - normalDistace === childSugar.getXCoord() && parentSugar.getYCoord() - normalDistace === childSugar.getYCoord()) {
            glycanChildSugarChangeCoordinate(childSugar, childSugar, -normalDistace, -normalDistace);
            // removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            // return  [childSugar.getXCoord() - normalDistace, childSugar.getYCoord() - normalDistace];
        }

    }
    //親糖鎖構造の左下にある
    else if (parentSugar.getXCoord() !== childSugar.getXCoord() && parentSugar.getYCoord() < childSugar.getYCoord()) {
        if(parentSugar.getXCoord() - normalDistace === childSugar.getXCoord() && parentSugar.getYCoord() + normalDistace === childSugar.getYCoord()) {
            glycanChildSugarChangeCoordinate(childSugar, childSugar, -normalDistace, normalDistace);
            // removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            // return  [childSugar.getXCoord() - normalDistace, childSugar.getYCoord() + normalDistace];
        }

    }
    //親糖鎖構造の上にある
    else if (parentSugar.getXCoord() === childSugar.getXCoord() && parentSugar.getYCoord() > childSugar.getYCoord()) {
        if(parentSugar.getYCoord() - normalDistace === childSugar.getYCoord()) {
            glycanChildSugarChangeCoordinate(childSugar, childSugar, 0, -normalDistace);
            // removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            // return  [childSugar.getXCoord(), childSugar.getYCoord() - normalDistace];
        }

    }
    //親糖鎖構造の下にある
    else if (parentSugar.getXCoord() === childSugar.getXCoord() && parentSugar.getYCoord() < childSugar.getYCoord()) {
        if(parentSugar.getYCoord() + normalDistace === childSugar.getYCoord()) {
            glycanChildSugarChangeCoordinate(childSugar, childSugar, 0, normalDistace);
            // removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            // return  [childSugar.getXCoord(), childSugar.getYCoord() + normalDistace];
        }
    }
    return [childSugar.getXCoord(), childSugar.getYCoord()];
};

/***
 * changeNextGlidCoordinateで変更があった単糖から非還元末端側にある単糖、グリコシド結合の座標変更と再描画
 * @param sugar: 変更対象の単糖
 * @param distanceX: 変更距離
 * @param distanceY: 変更距離
 */
let recursiveChildSugarChangeCoordinate = (childSugar: Sugar, sugar: Sugar, distanceX: number, distanceY: number) => {
    let oldXCoord: number = sugar.getXCoord();  //古いX座標を記憶
    let oldYCoord: number = sugar.getYCoord();  //古いY座標を記憶
    removeSetGlids([oldXCoord, oldYCoord]);
    sugar.setXCoord(oldXCoord + distanceX);  //新しいX座標を設定
    sugar.setYCoord(oldYCoord + distanceY);  //新しいY座標を設定
    setGlids.push([sugar.getXCoord(), sugar.getYCoord()]);
    //bridgeを持っている場合
    if(sugar.hasChildBridge) {
        for(let bridge: Bridge of sugar.getChildBridge()) {
            removeSetGlids([bridge.getXCoord(), bridge.getYCoord()]);
            bridge.setXCoord(bridge.getXCoord() + distanceX);
            bridge.setYCoord(bridge.getYCoord() + distanceY);
            setGlids.push([bridge.getXCoord(), bridge.getYCoord()]);
        }
    }

    //対象単糖(子)の親単糖への結合のlineToを変更
    for(let parentBond: Glycobond of sugar.getParentBond()) {
        if(sugar.getGlycan() instanceof Fragment && sugar.getGlycan().getRootNode() === sugar) {
            parentBond.children[0].graphics._activeInstructions[1].x = sugar.getXCoord();
            parentBond.children[0].graphics._activeInstructions[1].y = sugar.getYCoord();
            parentBond.children[0].graphics._activeInstructions[0].x = sugar.getXCoord() + basicData.symbolSize + basicData.fragmentEdgeDistance;
            parentBond.children[0].graphics._activeInstructions[0].y  = sugar.getYCoord();
        }
        parentBond.children[0].graphics._activeInstructions[1].x = sugar.getXCoord();
        parentBond.children[0].graphics._activeInstructions[1].y = sugar.getYCoord();
        //linkage情報の座標移動、支点となる単糖を見ているとき
        if(childSugar === sugar) {
            //linkageがある時
            if(parentBond.children.length === 3){
                parentBond.children[2].x = parentBond.children[2].x + distanceX;
                parentBond.children[2].y = parentBond.children[2].y + distanceY;
            }

        }
        //支点となる単糖以外を見ているとき
        else {
            //linkageがあるとき
            if(parentBond.children.length === 3){
                for (let index: number = 1; index <= 2; index++) {
                    parentBond.children[index].x = parentBond.children[index].x + distanceX;
                    parentBond.children[index].y = parentBond.children[index].y + distanceY;
                }
            }
        }

    }

    //対象単糖(親)の子単糖への結合のmoveToを変更
    for(let child: Sugar of sugar.getChildSugars()) {
        for (let parentBond: Glycobond of child.getParentBond()) {
            parentBond.children[0].graphics._activeInstructions[0].x = sugar.getXCoord();
            parentBond.children[0].graphics._activeInstructions[0].y = sugar.getYCoord();
        }
        recursiveChildSugarChangeCoordinate(childSugar, child, distanceX, distanceY);
    }
};

/***
 *  changeNextGlidCoordinateで変更があった単糖から子単糖、またFragmentの座標を移動する関数
 * @param childSugar: 変更の支点
 * @param sugar: 変更対象の単糖
 * @param distanceX: 変更距離
 * @param distanceY: 変更距離
 */
let glycanChildSugarChangeCoordinate = (childSugar: Sugar, sugar: Sugar, distanceX: number, distanceY: number) => {
    console.log("childSugar: ", childSugar);
    //対象子単糖とそれ以降の子Nodeの座標変更
    recursiveChildSugarChangeCoordinate(childSugar, sugar, distanceX, distanceY);
    //Fragmentをもつ場合、FragmentBracketとFragmentの座標を変更
    if(!sugar.getGlycan().isFragmentBracketEmpty()) {
        //対象子単糖がFragement構造の一部だった場合
        let bracketCheck: boolean;
        if(sugar.getGlycan() instanceof Fragment) {
            let sameLayerGlycans: Array<Fragment> = [];
            for (let childGlycans: Fragment of sugar.getGlycan().getParentFragmentBracket().getChildGlycans()) {
                sameLayerGlycans.push(childGlycans);
            }
            let shape: createjs.Shape = createFragmentBracket(sameLayerGlycans);
            bracketCheck = checkBracketPosition(shape, sugar.getGlycan().getFragmentBracket().children[0]);
            if(bracketCheck) {
                let fragmentBracket: FragmentBracket = new FragmentBracket();
                fragmentBracket.addChild(shape);
                liaise.removeStage(sugar.getGlycan().getFragmentBracket());
                liaise.addStage(fragmentBracket);
                fragmentBracket.parentGlycan = sugar.getGlycan().getFragmentBracket().getParentGlycan();
                fragmentBracket.childGlycans = sugar.getGlycan().getFragmentBracket().getChildGlycans();
                fragmentBracket.parentSugars = sugar.getGlycan().getFragmentBracket().getParentSugars();
                for(let fragmentGlycan: Fragment of sugar.getGlycan().getParentFragmentBracket().getChildGlycans()) {
                    console.log(fragmentGlycan);
                    fragmentGlycan.setFragmentBracket(fragmentBracket);
                }

            }

        }
        //対象子単糖が大本のGlycanだった場合
        else {
            let shape: FragmentBracket = createFragmentBracket([sugar.getGlycan()]);
            bracketCheck = checkBracketPosition(shape, sugar.getGlycan().getFragmentBracket().children[0]);
            if(bracketCheck) {
                let fragmentBracket: FragmentBracket = new FragmentBracket();
                fragmentBracket.addChild(shape);
                liaise.removeStage(sugar.getGlycan().getFragmentBracket());
                liaise.addStage(fragmentBracket);
                fragmentBracket.parentGlycan = sugar.getGlycan().getFragmentBracket().getParentGlycan();
                fragmentBracket.childGlycans = sugar.getGlycan().getFragmentBracket().getChildGlycans();
                fragmentBracket.parentSugars = sugar.getGlycan().getFragmentBracket().getParentSugars();
                sugar.getGlycan().setFragmentBracket(fragmentBracket);
            }
        }
        if(bracketCheck) {
            fragmentChildSugarChangeCoordinate(childSugar, sugar.getGlycan().getFragmentBracket(), distanceX, distanceY);
        }

    }
};

/***
 *  fragmentBracketを動かすべきかどうかをチェック
 *  @param childSugar: 変更の支点
 * @param shape1: createjs.shape もともと描画されていたfragmentBracketのShape
 * @param shape2: createjs.shape 新しく描画する場合のfragmentBracketのShape
 * @returns {boolean} : true: 描画されるべき, false: 座標を動かす必要ない
 */
let checkBracketPosition = (shape1: createjs.Shape, shape2: createjs.Shape): boolean => {
    if((shape1.graphics._activeInstructions[0].x === shape2.graphics._activeInstructions[0].x &&  shape1.graphics._activeInstructions[0].y === shape2.graphics._activeInstructions[0].y)
    && (shape1.graphics._activeInstructions[2].x === shape2.graphics._activeInstructions[2].x &&  shape1.graphics._activeInstructions[2].y === shape2.graphics._activeInstructions[2].y)
    && (shape1.graphics._activeInstructions[5].x === shape2.graphics._activeInstructions[5].x &&  shape1.graphics._activeInstructions[5].y === shape2.graphics._activeInstructions[5].y)
    && (shape1.graphics._activeInstructions[7].x === shape2.graphics._activeInstructions[7].x &&  shape1.graphics._activeInstructions[7].y === shape2.graphics._activeInstructions[7].y)) {
        return false;
    }
    else {
        return true;
    }
};

/***
 *  fragmentの座標移動
 *  @param childSugar: 変更の支点
 * @param fragmentBracket: FragmentBracket, 対象となるFragmentの親側にあるBracket
 * @param distanceX: 変更距離
 * @param distanceY: 変更距離
 */
let fragmentChildSugarChangeCoordinate = (childSugar: Sugar, fragmentBracket: FragmentBracket, distanceX: number, distanceY: number) => {
    for (let childFragment: Fragment of fragmentBracket.getChildGlycans()) {
        recursiveChildSugarChangeCoordinate(childSugar, childFragment.getRootNode(), distanceX, distanceY);
    }
    if(!fragmentBracket.getChildGlycans()[0].isFragmentBracketEmpty()) {
        let sameLayerGlycans: Array<Fragment> = [];
        for (let childGlycans: Fragment of fragmentBracket.getChildGlycans()) {
            sameLayerGlycans.push(childGlycans);
        }
        let shape: FragmentBracket = createFragmentBracket(sameLayerGlycans);
        console.log(fragmentBracket.getChildGlycans()[0]);
        let bracketCheck: boolean = checkBracketPosition(shape, fragmentBracket.getChildGlycans()[0].getFragmentBracket().children[0]);
        console.log(bracketCheck);
        if(bracketCheck) {
            let newFragmentBracket: FragmentBracket = new FragmentBracket();
            liaise.removeStage(fragmentBracket.getChildGlycans()[0].getFragmentBracket());
            liaise.addStage(newFragmentBracket);
            newFragmentBracket.addChild(shape);
            newFragmentBracket.parentGlycan = fragmentBracket.getChildGlycans()[0].getFragmentBracket().getParentGlycan();
            newFragmentBracket.childGlycans = fragmentBracket.getChildGlycans()[0].getFragmentBracket().getChildGlycans();
            newFragmentBracket.parentSugars = fragmentBracket.getChildGlycans()[0].getFragmentBracket().getParentSugars();
            fragmentBracket.getChildGlycans()[0].setFragmentBracket(newFragmentBracket);
            for(let fragment:Fragment of sameLayerGlycans) {
                fragment.setFragmentBracket(newFragmentBracket);
            }
            console.log("ここ通っている?");
            fragmentChildSugarChangeCoordinate(childSugar, newFragmentBracket, distanceX, distanceY);
        }

    }
};
