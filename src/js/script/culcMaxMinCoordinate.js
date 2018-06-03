//@flow
"use strict";

import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";

export let culcMaxMinCoordinate = (glycans: Array<Object>): Array<number> => {
    let maxX: number = glycans[0].getRootNode().getXCoord();
    let minX: number = glycans[0].getRootNode().getXCoord();
    let maxY: number = glycans[0].getRootNode().getYCoord();
    let minY: number = glycans[0].getRootNode().getYCoord();
    let array= [maxX, minX, maxY, minY];
    for(let glycan of glycans) {
        array = recursiveCulcuration(array, glycan.getRootNode());
    }
    return array; //[maxX. minX, maxY, minY]

};

let recursiveCulcuration = (array: Array<number>, sugar: Sugar): Array<number> => {
    if(array[0] < sugar.getXCoord()) {
        array[0] = sugar.getXCoord();
    }
    else if (array[1] > sugar.getXCoord()) {
        array[1] = sugar.getXCoord();
    }
    if(array[2] < sugar.getYCoord()) {
        array[2] = sugar.getYCoord();
    }
    else if (array[3] > sugar.getYCoord()) {
        array[3] = sugar.getYCoord();
    }
    if (!sugar.hasChildSugars()){
        return array;
    }
    else {
        for (let child: Sugar of sugar.childSugars) {
            if(!sugar.isCyclicEmpty()) {
                if(sugar.getCyclic().getReductionSugar() === child) {
                    continue;
                }
            }
            array = recursiveCulcuration(array, child);
        }
    }
    return array;
};