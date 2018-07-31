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
    let parentChild: Array<Sugar> = culcParentChild(liaise.selectedNode, targetSugar);
    let parentSugar: Sugar = parentChild[0];
    let childSugar: Sugar = parentChild[1];

    let bridge = new Bridge();
    let parentBridgeEdge = new BridgeEdge();
    let childBridgeEdge = new BridgeEdge();
    bridge.setName(liaise.selectedModification);
    bridge.setParentBind(parentBridgeEdge);
    bridge.setChildBind(childBridgeEdge);
    for(let bind: Glycobond of childSugar.getParentBond()) {
        if(bind.getParentSugar() === parentSugar) {
            removeGlycoBindShape(bind);
        }
    }
    childSugar.setParentBond(childBridgeEdge);
    parentSugar.setChildBridge(bridge);
    bridge = createBridgeShape(bridge);
    let childCoordinate: Array<number> = changeNextGlidCoordinate(parentSugar, childSugar);
    let changeFlag: boolean = false;
    if(childCoordinate.length !== 0) {
        changeFlag = true;
    }
    if(changeFlag) {
        bridge.setXCoord(childSugar.getXCoord() - bridge.children[0].getMeasuredWidth() / 2);
        bridge.setYCoord(childSugar.getYCoord() - bridge.children[0].getMeasuredHeight() / 2);
        setGlids.push([childSugar.getXCoord(), childSugar.getYCoord()]);
        childSugar.setCoordinate(childCoordinate[0], childCoordinate[1]);
    }
    else {
        let middleX: number = (parentSugar.getXCoord() + childSugar.getXCoord()) / 2;
        let middleY: number = (parentSugar.getYCoord() + childSugar.getYCoord()) / 2;
        let coordinate: Array<number> = getRelativeCoordinate(middleX, middleY);
        bridge.setXCoord(coordinate[0] - bridge.children[0].getMeasuredWidth() / 2);
        bridge.setYCoord(coordinate[1] - bridge.children[0].getMeasuredHeight() / 2);
        setGlids.push([coordinate[0], coordinate[1]]);
    }
    // let bind: Array<BridgeEdge>  = createBridgeEdgeShape(parentBridgeEdge, childBridgeEdge, parentSugar, childSugar, bridge);
    createBridgeEdgeShape(parentBridgeEdge, childBridgeEdge, parentSugar, childSugar, bridge);
    removeSugarShape(parentSugar);
    removeSugarShape(childSugar);
    liaise.addStage(parentBridgeEdge);
    liaise.addStage(childBridgeEdge);
    liaise.addStage(parentSugar);
    liaise.addStage(childSugar);
    liaise.addStage(bridge);



    console.log(liaise.selectedModification);
};