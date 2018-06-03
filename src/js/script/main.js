//@flow
"use strict";

import { LiaiseUI } from "./class/liaiseUI";
import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";


export let liaise: LiaiseUI = new LiaiseUI();  //UIのの状態を納めるクラス変数。Reactとのつなげ役
export let glycans: Array<Glycan> = [];  //canvas上に描画された糖鎖構造を納める配列
export let monosachrrides: Array<Sugar> = []; //canvas上にある単糖を納める配列
export let setGlids: Array<Array<number>> = [];

export let checkGrids = (coordinates: Array<number>): boolean => {
    for (let grid of setGlids) {
        if(grid[0] === coordinates[0] && grid[1] === coordinates[1]) {
            return false;
        }
    }
    return true;
};
// console.log(liaise.hasTextAreaValue());