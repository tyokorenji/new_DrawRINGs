//@flow
"use strict";
import { Sugar } from "../class/Sugar";
import { liaise } from "../main";
import { createModificaitonShape } from "./createModificationShape";
import { Modification } from "../class/Modification";
import { Modificationbond } from "../class/Modificationbond";
import { modifiData } from "../data/modificationData";
import { MultipleBond } from "../class/MultipleBond";
import { MultipleBondEdge } from "../class/MultipleBondBind";
import { removeAllModificationBridgeShape } from "../removeObjet/removeAllModificationBridgeShape";
import { addModificationMultipleBond } from "./addModificationMultipleBond";

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
    else if(liaise.multipleBond) {
        if(liaise.selectedModifiactionPositions.length <= 1) {
            alert("Please select two items if you draw multipleBond structure!");
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
    let changeBridge: Array<MultipleBond> = [];
    //昇順ソート
    removeAllModificationBridgeShape(targetSugar);
    liaise.selectedModifiactionPositions.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    //targetSugarから同じ箇所にあるMultipleBondを削除する
    if(targetSugar.hasChildMultipleBind) {
        for( let item: MultipleBond of targetSugar.getChildMultipleBind()) {
            console.log(targetSugar);
            for(let position: number of item.getBridgeBond().getParentSugarPosition()) {
                if(liaise.selectedModifiactionPositions.indexOf(position) !== -1) {
                    targetSugar.childMultipleBind = targetSugar.getChildMultipleBind().filter( function(value) {
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
    if(liaise.multipleBond) {
        console.log("MultipleBOnd選択されたよ");
        let bridge: MultipleBond = new MultipleBond();
        let bridgeBond: MultipleBondEdge = new MultipleBondEdge();
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
    for (let item of targetSugar.getChildMultipleBind()) {
        changeBridge.push(item);
    }
    for (let item of targetSugar.getChildModifications()){
        changeModifications.push(item);
    }
    targetSugar.childModifications = changeModifications;
    targetSugar.childMultipleBind = changeBridge;
    createModificaitonShape(targetSugar);
    addModificationMultipleBond(targetSugar);
    liaise.stageUpdate();
};