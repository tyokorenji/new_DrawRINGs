//@flow
"use strict";

import { createFragmentBracket } from "./createFragmentBracket";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import { Sugar } from "../class/Sugar";
import {FragmentBracket} from "../class/FragmentBracket";

export let createSelectedFragment = () => {
    for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
        if(!selectedSugar.getGlycan().isFragmentBracketEmpty() || !selectedSugar.isFragmentBracketEmpty()) {
            alert("the sugar already has fragment!");
            return;
        }
    }
    let shape: createjs.Shape = createFragmentBracket([]);
    let fragmentBracket: FragmentBracket = new FragmentBracket();
    fragmentBracket.addChild(shape);
    fragmentBracket.changeIsReductionSugar();
    for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
        fragmentBracket.setParentSugars(selectedSugar);
        selectedSugar.setFragmentBracket(fragmentBracket);
    }
    liaise.addStage(fragmentBracket);
    liaise.stageUpdate();

};