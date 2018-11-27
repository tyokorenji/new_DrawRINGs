//@flow
"use strict";

import { liaise } from "../main";
import { Bridge } from "../class/Bridge";
import { BridgeEdge } from "../class/BridgeEdge";
import { Sugar } from "../class/Sugar";
import { culcParentChild } from "../culcParentChild";
import { removeGlycoBindShape } from "../removeObjet/removeGlycoBindShape";
import { Glycobond } from "../class/Glycobond";
import { createBridgeShape } from "./createBridgeShape";
import { changeNextGlidCoordinate } from "../getRelativeCoordinate";
import { setGlids } from "../main";
import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { createBridgeEdgeShape } from "./createBridgeEdgeShape";
import { removeSugarShape } from "../removeObjet/removeSugarShape";

export let createBridgeModification = (targetSugar: Sugar) => {
    console.log("createBridgeModificationに入ったよ！");
    let parentChild: Array<Sugar> = culcParentChild(liaise.selectedNode, targetSugar);  //親子を計算する。[親単糖, 子単糖]
    let parentSugar: Sugar; //親単糖
    let childSugar: Sugar;  //子単糖
    let cyclicFlag: boolean = false;
    //結合していない糖鎖構造の場合
    if(parentChild[0].getGlycan() !== parentChild[1].getGlycan()) {
        alert("Please select binding monosaccharides");
        return;
    }
    //子単糖がサイクリックを形成していなかった場合
    if(parentChild[1].isCyclicEmpty()) {
        parentSugar = parentChild[0];  //親単糖を代入
        childSugar = parentChild[1];  //子単糖を代入
        //隣り合った単糖出なかった場合,Error
        if(parentSugar.getXLayer() + 1 !== childSugar.getXLayer()) {
            alert("Please select adjacent sugar.");
            return;
        }
    }
    //サイクリックの場合
    else {
        //選択した単糖がサイクリックの結合をしている場合
        if(parentChild[1].getCyclic().getReductionSugar() === parentChild[0]) {
            parentSugar = parentChild[1];  //親単糖を代入
            childSugar = parentChild[0];  //子単糖を代入
            cyclicFlag = true;
        }
        //選択した単糖が隣り合った単糖であった場合
        else if(parentChild[0].getXLayer() + 1 === parentChild[1].getXLayer()) {
            parentSugar = parentChild[0];  //親単糖を代入
            childSugar = parentChild[1];  //子単糖を代入
        }
        //隣り合ってもなく、サイクリックを形成していなかった場合,Error
        else {
            alert("Please select adjacent sugar.");
            return;
        }

    }
    let glycobond: Glycobond = new Glycobond();
    for (let parentBond: Glycobond of childSugar.getParentBond()) {
        switch(parentBond.getParentSugar()) {
            case (parentSugar): {
                glycobond = parentBond;
                removeGlycoBindShape(glycobond);
                break;
            }
            default: {
                continue;
            }
        }
    }
    let bridge = new Bridge();
    let bridgeEdge = new BridgeEdge();
    //データ構造のセット
    bridge.setName(liaise.selectedModification);  //bridgeの名前のセット
    bridge.setParentSugar(parentSugar);  //bridgeに親単糖のセット
    bridge.setChildSugars(childSugar);  //bridgeに子単糖をセット
    bridge.setEdge(bridgeEdge);  //bridgeにbridgeEdgeをセット
    parentSugar.setChildBridge(bridge);  //親単糖に子Bridgeとしてセット
    bridgeEdge.setChildSugar(childSugar);
    bridgeEdge.setParentSugar(parentSugar);
    bridgeEdge.setLinkageType(glycobond.getLinkageType());
    bridgeEdge.setChildAnomeric(glycobond.getChildAnomeric());
    bridgeEdge.setChildPosition(glycobond.getChildPosition());
    bridgeEdge.setParentPositon(glycobond.getParentPosition());

    //BeidgeModificationのshapeを作成
    bridge = createBridgeShape(bridge);

    //すでに描画されている単糖のglid移動が必要な場合、移動する
    let nextGlids: Array<number> = [];
    if(!cyclicFlag) {
        // nextGlids = changeNextGlidCoordinate(parentSugar, childSugar);
        // childSugar.setXCoord(nextGlids[0]);
        // childSugar.setYCoord(nextGlids[1]);
        // setGlids.push(nextGlids);
        changeNextGlidCoordinate(parentSugar, childSugar);
    }

    //bridgeのshapeを描画する座標の計算とEdgeの延長
    let bridgeX: number = (parentSugar.getXCoord() + childSugar.getXCoord()) / 2;  //大体のX座標の計算
    let bridgeY: number = (parentSugar.getYCoord() + childSugar.getYCoord()) / 2;  //大体のY座標の計算
    let bridgeCoordinate: Array<number> = [];
    //サイリックでないとき
    if(!cyclicFlag) {
        bridgeCoordinate = getRelativeCoordinate(bridgeX, bridgeY);  //glidに合わせた座標の取得
        bridgeCoordinate[0] = bridgeCoordinate[0] - bridge.children[1].getMeasuredWidth() / 2;
        bridgeCoordinate[1] = bridgeCoordinate[1] - bridge.children[1].getMeasuredHeight() / 2;
        console.log("bridge", bridge);
        setGlids.push(bridgeCoordinate);
        //edgeの座標変更
        // glycobond.children[0].graphics._activeInstructions[0].x = parentSugar.getXCoord();
        // glycobond.children[0].graphics._activeInstructions[0].y = parentSugar.getYCoord();
        // glycobond.children[0].graphics._activeInstructions[1].x = childSugar.getXCoord();
        // glycobond.children[0].graphics._activeInstructions[1].y = childSugar.getYCoord();
    }
    //サイクリックのとき
    else {
        bridgeCoordinate.push(glycobond.children[0].graphics._activeInstructions[1].cpx);  //カーブの支点となったx座標
        bridgeCoordinate.push(glycobond.children[0].graphics._activeInstructions[1].cpy);  //カーブの支点となったy座標
    }
    bridge.setXCoord(bridgeCoordinate[0]);  //bridgeのx座標の設定
    bridge.setYCoord(bridgeCoordinate[1]);  //bridgeのy座標の設定

    //stageからのremove
    removeSugarShape(parentSugar);
    removeSugarShape(childSugar);

    //stageへのadd
    liaise.addStage(glycobond);
    liaise.addStage(bridge);
    liaise.addStage(parentSugar);
    liaise.addStage(childSugar);

    liaise.stageUpdate();


    // let bridge = new Bridge();
    // let parentBridgeEdge = new BridgeEdge();
    // let childBridgeEdge = new BridgeEdge();
    // bridge.setName(liaise.selectedModification);
    // bridge.setParentBind(parentBridgeEdge);
    // bridge.setChildBind(childBridgeEdge);
    // for(let bind: Glycobond of childSugar.getParentBond()) {
    //     if(bind.getParentSugar() === parentSugar) {
    //         removeGlycoBindShape(bind);
    //     }
    // }
    // childSugar.setParentBond(childBridgeEdge);
    // parentSugar.setChildBridge(bridge);
    // bridge = createBridgeShape(bridge);
    // let childCoordinate: Array<number> = changeNextGlidCoordinate(parentSugar, childSugar);
    // let changeFlag: boolean = false;
    // if(childCoordinate.length !== 0) {
    //     changeFlag = true;
    // }
    // if(changeFlag) {
    //     bridge.setXCoord(childSugar.getXCoord() - bridge.children[0].getMeasuredWidth() / 2);
    //     bridge.setYCoord(childSugar.getYCoord() - bridge.children[0].getMeasuredHeight() / 2);
    //     setGlids.push([childSugar.getXCoord(), childSugar.getYCoord()]);
    //     childSugar.setCoordinate(childCoordinate[0], childCoordinate[1]);
    // }
    // else {
    //     let middleX: number = (parentSugar.getXCoord() + childSugar.getXCoord()) / 2;
    //     let middleY: number = (parentSugar.getYCoord() + childSugar.getYCoord()) / 2;
    //     let coordinate: Array<number> = getRelativeCoordinate(middleX, middleY);
    //     bridge.setXCoord(coordinate[0] - bridge.children[0].getMeasuredWidth() / 2);
    //     bridge.setYCoord(coordinate[1] - bridge.children[0].getMeasuredHeight() / 2);
    //     setGlids.push([coordinate[0], coordinate[1]]);
    // }
    // // let bind: Array<BridgeEdge>  = createBridgeEdgeShape(parentBridgeEdge, childBridgeEdge, parentSugar, childSugar, bridge);
    // createBridgeEdgeShape(parentBridgeEdge, childBridgeEdge, parentSugar, childSugar, bridge);
    // removeSugarShape(parentSugar);
    // removeSugarShape(childSugar);
    // liaise.addStage(parentBridgeEdge);
    // liaise.addStage(childBridgeEdge);
    // liaise.addStage(parentSugar);
    // liaise.addStage(childSugar);
    // liaise.addStage(bridge);



    console.log(liaise.selectedModification);
};