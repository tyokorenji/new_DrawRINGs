//@flow
"use strict";

import { LiaiseUI } from "./class/liaiseUI";
import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";
import { Composition } from "./class/Composition";
import { CompositionText } from "./class/compositionText";
import { basicData } from "./data/graphicsData";


export let liaise: LiaiseUI = new LiaiseUI();  //UIのの状態を納めるクラス変数。Reactとのつなげ役
export let glycans: Array<Glycan> = [];  //canvas上に描画された糖鎖構造を納める配列
export let setGlids: Array<Array<number>> = [];
export let compositions: Array<Composition> = [];
export let compositionsGlids: Array<Array<number>> = [];

export let checkGrids = (coordinates: Array<number>): boolean => {
    for (let grid of setGlids) {
        if(grid[0] === coordinates[0] && grid[1] === coordinates[1]) {
            return false;
        }
    }
    return true;
};

export let nextCompostionsGrids = (compositionText: CompositionText): Array<number> => {
    let textWidth: number = compositionText.children[0].getMeasuredWidth();
    let basicX: number = basicData.symbolDistance + textWidth + basicData.compositionTextToSymbol + 2 * basicData.symbolSize + basicData.symbolDistance;
    let basicY: number = basicData.symbolDistance + 2 * basicData.symbolSize + basicData.symbolDistance;
    if(compositionsGlids.length === 0) {
        compositionsGlids.push([basicX, basicY]);
        return [basicX, basicY];
    }
    else if(compositionsGlids.length % 2 === 0 ) {
        let upperCoody: Array<number> = compositionsGlids[compositionsGlids.length - 2];
        compositionsGlids.push([upperCoody[0], upperCoody[1] + basicY]);
        return [upperCoody[0], upperCoody[1] + basicY];
    }
    else {
        let upperCoody: Array<number> = compositionsGlids[compositionsGlids.length - 1];
        compositionsGlids.push([upperCoody[0] + basicX, upperCoody[1]]);
        return [upperCoody[0] + basicX, upperCoody[1]]
    }
};



export let initGlycans = () => {
    glycans = [];
};
export let initGlids = () => {
    setGlids = [];
};
export let removeSetGlids = (coordinate: Array<number>) => {
    for (let index = 0; index < setGlids.length; index++) {
        switch(setGlids[index]) {
            case coordinate: {
                setGlids.splice(index, 1);
            }
        }
    }
};
export let initCompositions = () => {
    compositions = [];
};
export let initCompositionsGlids = () => {
    compositionsGlids = [];
};
// console.log(liaise.hasTextAreaValue());