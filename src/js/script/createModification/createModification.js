//@flow
"use strict";
import { Sugar } from "../class/Sugar";
import { liaise } from "../main";
import { createModificaitonShape } from "./createModificationShape";
import { Modification } from "../class/Modification";
import { Modificationbond } from "../class/Modificationbond";
import { modifiData } from "../data/modificationData";
import { Bridge } from "../class/Bridge";
import { Bridgeobond } from "../class/BridgeBond";
import { removeModificationBridge } from "./removeModificationBridge";
import { addModificationBridge } from "./addModificationBridge";

export let createModification = ( targetSugar: Sugar ) => {
    //エラー表示
    if(liaise.selectedModification === modifiData.Undefined.TrivalName) {
        alert("Please select modification!!");
        return;
    }
    else if(liaise.selectedModifiactionPositions.length === 0) {
        alert("Please select modification position!!");
        return;
    }
    else if(liaise.bridge) {
        if(liaise.selectedModifiactionPositions.length <= 1) {
            alert("Please select two items if you draw bridge structure!");
            return;
        }
    }
    else {
        for (let item of liaise.selectedModifiactionPositions) {
            if(item > targetSugar.getCarbBode()) {
                alert("over carb bone!!");
                return;
            }
        }
    }

    let changeModifications: Array<Modification> = [];
    let changeBridge: Array<Bridge> = [];
    //昇順ソート
    removeModificationBridge(targetSugar);
    liaise.selectedModifiactionPositions.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    //targetSugarから同じ箇所にあるBridgeを削除する
    if(targetSugar.hasChildBridges) {
        for( let item: Bridge of targetSugar.getChildBridges()) {
            console.log(targetSugar);
            for(let position: number of item.getBridgeBond().getParentSugarPosition()) {
                if(liaise.selectedModifiactionPositions.indexOf(position) !== -1) {
                    targetSugar.childBridges = targetSugar.getChildBridges().filter( function(value) {
                        return value !== item;
                    });
                }
            }
        }

    }

    for (let item: number of liaise.selectedModifiactionPositions) {
        for(let item2: Modification of targetSugar.getChildModifications()) {
            switch (item) {
                //その単糖の同じ位置にすでに修飾がついていた場合
                case item2.getModificationBond().getParentSugarPosition(): {
                    targetSugar.childModifications = targetSugar.getChildModifications().filter( function(value) {
                        return value !== item2;
                    });
                }
            }
        }
    }
    if(liaise.bridge) {
        console.log("Bridge選択されたよ");
        let bridge: Bridge = new Bridge();
        let bridgeBond: Bridgeobond = new Bridgeobond();
        bridge.setName(liaise.selectedModification);
        for(let item of liaise.selectedModifiactionPositions) {
            bridgeBond.setParentSugarPosition(item);
        }
        bridge.setBridgeBond(bridgeBond);
        changeBridge.push(bridge);
    }
    else {
        for (let item of liaise.selectedModifiactionPositions) {
            let modification = new Modification();
            let modificationBind = new Modificationbond();
            modification.setName(liaise.selectedModification);
            modificationBind.setParentPosition(item);
            modification.setModificationBond(modificationBind);
            changeModifications.push(modification);
        }

    }
    for (let item of targetSugar.getChildBridges()) {
        changeBridge.push(item);
    }
    for (let item of targetSugar.getChildModifications()){
        changeModifications.push(item);
    }
    targetSugar.childModifications = changeModifications;
    targetSugar.childBridges = changeBridge;
    createModificaitonShape(targetSugar);
    addModificationBridge(targetSugar);
    liaise.stageUpdate();
    console.log(targetSugar);
};