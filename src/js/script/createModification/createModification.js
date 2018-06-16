//@flow
"use strict";
import { Sugar } from "../class/Sugar";
import { liaise } from "../main";
import { createModificaitonShape } from "./createModificationShape";
import { Modification } from "../class/Modification";
import { Modificationbond } from "../class/Modificationbond";
import { modifiData } from "../data/modificationData";

export let createModification = ( targetSugar: Sugar ) => {
    if(liaise.bridge) {

    }
    else{
        if(liaise.selectedModification === modifiData.Undefined.TrivalName) {
            alert("Please select modification!!");
            return;
        }
        else if(liaise.selectedModifiactionPositions.length === 0) {
            alert("Please select modification position!!");
            return;
        }
        for (let item of liaise.selectedModifiactionPositions) {
            if(item > targetSugar.getCarbBode()) {
                alert("over carb bone!!");
                return;
            }
        }
        let changeModifications: Array<Modification> = [];

        for(let item of targetSugar.getChildModifications()) {
            liaise.removeStage(item);
            if(!item.isChildCommaShapeEmpty()) {
                liaise.removeStage(item.getChildCommaShape());
            }
        }


        for (let item: number of liaise.selectedModifiactionPositions) {
            let modification = new Modification();
            let modificationBind = new Modificationbond();
            let flag: boolean = false;
            for(let item2: Modification of targetSugar.getChildModifications()) {
                switch (item) {
                    //その単糖の同じ位置にすでに修飾がついていた場合
                    case item2.getModificationBond().getParentPosition(): {
                        modification.setName(liaise.selectedModification);
                        modificationBind.setParentPosition(item);
                        modification.setModificationBond(modificationBind);
                        changeModifications.push(modification);
                        targetSugar.childModifications = targetSugar.getChildModifications().filter( function(value) {
                            return value != item2;
                        });
                        flag = true;
                    }
                }
            }
            //単糖の同じ位置に修飾がついていなかった場合

            if(flag) {
                continue;
            }
            else {
                modification.setName(liaise.selectedModification);
                modificationBind.setParentPosition(item);
                modification.setModificationBond(modificationBind);
                changeModifications.push(modification);
            }
        }
        for (let item of targetSugar.getChildModifications()){
            changeModifications.push(item);
        }
        targetSugar.childModifications = changeModifications;
        createModificaitonShape(targetSugar);
        for(let item of targetSugar.getChildModifications()) {
            liaise.addStage(item);
            if(!item.isChildCommaShapeEmpty()) {
                liaise.addStage(item.getChildCommaShape());
            }
        }
        liaise.stageUpdate();

    }
};