//@flow
"use strict";

import { Sugar } from "./class/Sugar";
import { Glycan } from "./class/Glycan";
import { liaise } from "./main";
import { createFragmentBracket } from "./createFragment/createFragmentBracket";
import createjs from "createjs-easeljs";
import { modeType } from "../react/modeType";
import { FragmentBracket } from "./class/FragmentBracket";
import { Fragment } from "./class/Fragment";

export let glycanClickEvent = (targetSugar: Sugar) => {
    switch (liaise.modeType) {
        case modeType.FRAGMENT: {
            if(targetSugar.getGlycan() instanceof Fragment) {
                let glycan: Fragment = targetSugar.getGlycan();
                let selectedFlag = false;
                for (let selectedGlycan of liaise.getSelectedGlycan()) {
                    if (glycan === selectedGlycan) {
                        selectedFlag = true;
                    }
                }
                if(selectedFlag) {
                    for (let selectedGlycan of liaise.getSelectedGlycan()) {
                        selectedGlycan.offLight(selectedGlycan.getRootNode());
                    }
                    liaise.initSelectedGlycan();
                }
                else {
                    let selectedGlycans = [];
                    for(let selectedGlycan of glycan.getParentFragmentBracket().getChildGlycans()) {
                        console.log(glycan.getFragmentBracket());
                        selectedGlycans.push(selectedGlycan);
                    }
                    let shape: createjs.Shpae = createFragmentBracket(selectedGlycans);
                    let fragmentBrackt = new FragmentBracket();
                    fragmentBrackt.addChild(shape);
                    for(let parentGlycan: Fragment of glycan.getParentFragmentBracket().getChildGlycans()) {
                        parentGlycan.highLight(parentGlycan.getRootNode());
                        liaise.setSelectedGlycan(parentGlycan);
                        parentGlycan.setFragmentBracket(fragmentBrackt);
                        fragmentBrackt.setParentGlycan(parentGlycan);
                    }
                    // glycan.highLight(glycan.getRootNode());
                    // liaise.setSelectedGlycan(glycan);

                    liaise.addStage(fragmentBrackt);
                    liaise.stageUpdate();
                    // glycan.setParentFragmentBracket(fragmentBrackt);


                    // glycan.offLight(glycan.getRootNode());
                }
                break;
            }
            else if(targetSugar.getGlycan() instanceof Glycan) {
                let glycan: Glycan = targetSugar.getGlycan();
                let selectedFlag = false;
                for (let selectedGlycan of liaise.getSelectedGlycan()) {
                    if (glycan === selectedGlycan) {
                        selectedFlag = true;
                    }
                }
                if(selectedFlag) {
                    for (let selectedGlycan of liaise.getSelectedGlycan()) {
                        selectedGlycan.offLight(selectedGlycan.getRootNode());
                    }
                    liaise.initSelectedGlycan();
                    // glycan.offLight(glycan.getRootNode());
                }
                else {
                    glycan.highLight(glycan.getRootNode());
                    liaise.setSelectedGlycan(glycan);
                    let shape: createjs.Shpae = createFragmentBracket([glycan]);
                    let fragmentBrackt = new FragmentBracket();
                    fragmentBrackt.addChild(shape);
                    liaise.addStage(fragmentBrackt);
                    liaise.stageUpdate();
                    glycan.setFragmentBracket(fragmentBrackt);
                    fragmentBrackt.setParentGlycan(glycan);

                    // glycan.offLight(glycan.getRootNode());
                }
                // switch (glycan) {
                //     case liaise.getSelectedGlycan(): {
                //         liaise.initSelectedGlycan();
                //         glycan.offLight(glycan.getRootNode());
                //         break;
                //     }
                //     default: {
                //         glycan.highLight(glycan.getRootNode());
                //         liaise.setSelectedGlycan(glycan);
                //         let shape: createjs.Shpae = createFragmentBracketAfterFragment(glycan);
                //         let fragmentBrackt = new FragmentBracket();
                //         fragmentBrackt.addChild(shape);
                //         liaise.addStage(fragmentBrackt);
                //         liaise.stageUpdate();
                //         glycan.setParentFragmentBracket(fragmentBrackt);
                //         fragmentBrackt.setParentGlycan(glycan);
                //
                //         // glycan.offLight(glycan.getRootNode());
                //         break;
                //     }
                // }
                break;
            }

            else {
                break;
            }
        }
        default: {
            return;
        }
    }


};