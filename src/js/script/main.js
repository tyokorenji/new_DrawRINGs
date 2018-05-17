//@flow
"use strict";

import { LiaiseUI } from "./class/liaiseUI";
import { Glycan } from "./class/Glycan";
import { Sugar } from "./class/Sugar";


export let liaise: LiaiseUI = new LiaiseUI();  //UIのの状態を納めるクラス変数。Reactとのつなげ役
export let glycans: Array<Glycan> = [];  //canvas上に描画された糖鎖構造を納める配列
export let monosachrrides: Array<Sugar> = []; //canvas上にある単糖を納める配列
// console.log(liaise.hasTextAreaValue());