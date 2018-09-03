//@flow
"use strict";

import {Glycan} from "./class/Glycan";
import {recuversiveRemoveFragment, removeGlycan} from "./removeObjet/removeAll";

export let allRemoveAddGlycan = (glycan: Glycan) => {
    if(!glycan.isFragmentBracketEmpty()) {
        recuversiveRemoveFragment(glycan.getFragmentBracket());
    }
    removeGlycan(glycan);
};

/*
    fragment の座標変更
    stageへのremove
    サイクリックのためし
 */
