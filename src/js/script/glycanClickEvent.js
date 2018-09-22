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
import {checkSugarHasFragmentBracketinGlycan} from "./createFragment/checkGetSugarFragment";

//違うGlycanを選択した際の処理

export let glycanClickEvent = (targetSugar: Sugar) => {
    switch (liaise.modeType) {
        case modeType.FRAGMENT: {
            console.log("targetSugar", targetSugar);
            console.log("既に選択されているSguar", liaise.getSelectedFragmentNonReductionSugar());
            let continueFlag = true;  //関数を続行するかどうかのフラグ
            //すでに選択肢あるGlycan、sugarのハイライトと選択状態を削除する
            continueFlag = checkOffLightSugarorGlycan(targetSugar);
            if(!continueFlag) {
                return;
            }
            //選択された単糖の所属するGlycanが持つ非還元末端の単糖がbracketを持っていた場合関数を終了する
            else {
                if(targetSugar.hasChildSugars()) {
                    let flag1: boolean = checkSugarHasFragmentBracketinGlycan(targetSugar.getGlycan().getRootNode());
                    if(flag1) {
                        alert("you selected glycan already has fragment bracket;");
                        return;
                    }
                }
            }


            //非還元末端の単糖をクリックした場合
            if(!targetSugar.hasChildSugars()) {
                //targetSguarを選択状態にする
                targetSugar.highLight();
                liaise.setSelectedFragmentNonReductionSugar(targetSugar);
                //targetSugarが既にbracketを持っていた場合、同じbracketを持っているtargetSugarを選択状態にする
                if(!targetSugar.isFragmentBracketEmpty()) {
                    for(let sugar: Sugar of targetSugar.getFragmentBracket().getParentSugars()){
                        sugar.highLight();
                        liaise.setSelectedFragmentNonReductionSugar(sugar);
                    }
                }
            }
            //選択した単糖が子単糖を持っており、またFragmentだったとき
            else if(targetSugar.getGlycan() instanceof Fragment) {
                console.log("ハイライト関数入ってる?");
                let glycan: Fragment = targetSugar.getGlycan();
                let selectedGlycans = [];
                for (let selectedGlycan of glycan.getParentFragmentBracket().getChildGlycans()) {
                    selectedGlycans.push(selectedGlycan);
                }
                //選択したtargetSugarの所属するFragmentが既にbracketを持っていた場合
                if (targetSugar.getGlycan().isFragmentBracketEmpty()) {
                    let shape: createjs.Shpae = createFragmentBracket(selectedGlycans);
                    let fragmentBrackt = new FragmentBracket();
                    fragmentBrackt.addChild(shape);
                    for (let parentGlycan: Fragment of glycan.getParentFragmentBracket().getChildGlycans()) {
                        parentGlycan.highLight(parentGlycan.getRootNode());
                        liaise.setSelectedGlycan(parentGlycan);
                        parentGlycan.setFragmentBracket(fragmentBrackt);
                        fragmentBrackt.setParentGlycan(parentGlycan);
                    }
                    liaise.addStage(fragmentBrackt);
                    liaise.stageUpdate();
                }
                //選択したtargetSugarの所属するFragmentが既にbracketを持っていなかった場合
                else {
                    for (let parentGlycan: Fragment of glycan.getParentFragmentBracket().getChildGlycans()) {
                        parentGlycan.highLight(parentGlycan.getRootNode());
                        liaise.setSelectedGlycan(parentGlycan);
                    }
                    liaise.stageUpdate();
                }
                return;
            }
            else if(targetSugar.getGlycan() instanceof Glycan) {
                let glycan: Glycan = targetSugar.getGlycan();
                glycan.highLight(glycan.getRootNode());
                liaise.setSelectedGlycan(glycan);
                if (targetSugar.getGlycan().isFragmentBracketEmpty()) {
                    let shape: createjs.Shape = createFragmentBracket([glycan]);
                    let fragmentBrackt = new FragmentBracket();
                    fragmentBrackt.addChild(shape);
                    liaise.addStage(fragmentBrackt);
                    liaise.stageUpdate();
                    glycan.setFragmentBracket(fragmentBrackt);
                    fragmentBrackt.setParentGlycan(glycan);
                }
                return;
            }
            else {
                return;
            }
            break;
        }
        default: {
            return;
        }
    }


};

let recuverisveAlreadyHasBracket = (child: Sugar): boolean => {
    if(!child.isFragmentBracketEmpty())   {
        return true;
    }
    else if(!child.isCyclicEmpty()) {
        return false;
    }
    else {
        for(let child_child: Sugar of child.getChildSugars()) {
            let result: boolean = recuverisveAlreadyHasBracket(child_child);
            if(result) {
                return result;
            }
        }
        return false;
    }
};

let checkOffLightSugarorGlycan = (targetSugar: Sugar): boolean => {
    //選択した単糖が子単糖を持っていない場合
    if(!targetSugar.hasChildSugars()) {
        //すでにglycanが選択されていた場合
        if(!liaise.isSelectedGlycanEmpty()) {
            let flag: boolean = false;  //選択された単糖のglycanと既に選択されているglycanが同じときtrue
            for(let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                //選択された単糖のglycanと既に選択されているglycanが同じときtrue
                if(selectedGlycan === targetSugar.getGlycan()) {
                    flag = true;
                    break;
                }
            }
            //選択された単糖のglycanと既に選択されているglycanが同じとき
            if(flag) {
                alert("you selected sugar belong glycan which have been already had fragment bracket.");
                return false;
            }
            //選択された単糖のglycanと既に選択されているglycanが異なるとき
            else {
                for(let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                    selectedGlycan.offLight(selectedGlycan.getRootNode());
                }
                liaise.initSelectedGlycan();
            }
        }
        //既に非還元末端の単糖が選択されている場合
        else if(!liaise.isSelectedFragmentNonReductionSugarEmpty()) {
            if(targetSugar.getGlycan() instanceof Fragment) {
                console.log("Fragmentに入った");
                let targetParentBracket: FragmentBracket = targetSugar.getGlycan().getParentFragmentBracket();  //ターゲット単糖の親のfragment bracket
                if(liaise.getSelectedFragmentNonReductionSugar()[0].getGlycan() instanceof Fragment) {
                    //既に選択してある単糖がtargetSugarと同じ親ブラケットを持っているかどうか
                    if (targetParentBracket === liaise.getSelectedFragmentNonReductionSugar()[0].getGlycan().getParentFragmentBracket()) {
                        console.log("等しい親ブラケットを持っている");
                        //既に選択れている単糖がbracketを持っている場合
                        if (!liaise.getSelectedFragmentNonReductionSugar()[0].isFragmentBracketEmpty()) {
                            console.log("既に選択されている単糖がbracketを持っている");
                            //targetSugarが既に選択されている単糖に含まれていた場合、選択されている単糖全ての選択を解除し、関数を終了する。
                            let flag: boolean = false;  //targetSugarが既に選択されている単糖に含まれている場合 true
                            //targetSugarが既に選択されている単糖に含まれているかどうか
                            for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                if (targetSugar === selectedSugar) {
                                    flag = true;
                                }
                            }
                            //targetSugarが既に選択されている単糖に含まれていた場合、選択されている単糖全ての選択を解除し、関数を終了する。
                            if (flag) {
                                for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                    selectedSugar.offLight();
                                }
                                liaise.initSelectedFragmentNonReductionSugar();
                                return false;
                            }
                            //targetSugarが既に選択されている単糖に含まれていない場合、選択されている単糖全ての選択を解除し、関数は続行する
                            else {
                                for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                    selectedSugar.offLight();
                                }
                                liaise.initSelectedFragmentNonReductionSugar();
                                return true;
                            }
                        }
                        //既に選択れている単糖がbracketを持っていない場合
                        else {
                            console.log("既に選択されている単糖がブラケットを持っていない");
                            //targetSugarがbracketを既に持っているとき
                            if (!targetSugar.isFragmentBracketEmpty()) {
                                console.log("targetが単糖がブラケットを持っている");
                                //選択されている単糖を全て解除し、関数を続行する
                                for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                    selectedSugar.offLight();
                                }
                                liaise.initSelectedFragmentNonReductionSugar();
                                return true;
                            }
                            //targetSugarがbracketを持っていないとき
                            else {
                                console.log("入ってる?");
                                //targetSugarが既に選択されている場合、選択を解除し、関数を終了する
                                for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                    if (targetSugar === selectedSugar) {
                                        selectedSugar.offLight();
                                        liaise.delSelectedFragmentNonReductionSugar(targetSugar);
                                        return false;
                                    }
                                }
                                //targetSugarがまだ選択されていない場合、関数を続行する
                                return true;
                            }
                        }
                    }
                    //既に選択してある単糖がtargetSugarと異なる親ブラケットを持っている場合、選択してある単糖を全て削除し、関数を続行する
                    else {
                        console.log("異なる親ブラケットを持っている");
                        for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                            selectedSugar.offLight();
                        }
                        liaise.initSelectedFragmentNonReductionSugar();
                        return true;
                    }
                }
                //既に選択されている単糖がGlycanに所属している場合、選択を解除し、関数を続行する
                else if(liaise.getSelectedFragmentNonReductionSugar()[0].getGlycan() instanceof Glycan) {
                    for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                        selectedSugar.offLight();
                    }
                    liaise.initSelectedFragmentNonReductionSugar();
                    return true;
                }
            }
            else if(targetSugar.getGlycan() instanceof Glycan) {
                //targetSugarと既に選択されている単糖が同じglycanかどうか
                if(targetSugar.getGlycan() === liaise.getSelectedFragmentNonReductionSugar()[0].getGlycan()) {
                    //既に選択れている単糖がbracketを持っている場合
                    if (!liaise.getSelectedFragmentNonReductionSugar()[0].isFragmentBracketEmpty()) {
                        //targetSugarが既に選択されている単糖に含まれていた場合、選択されている単糖全ての選択を解除し、関数を終了する。
                        let flag: boolean = false;  //targetSugarが既に選択されている単糖に含まれている場合 true
                        //targetSugarが既に選択されている単糖に含まれているかどうか
                        for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                            if (targetSugar === selectedSugar) {
                                flag = true;
                            }
                        }
                        //targetSugarが既に選択されている単糖に含まれていた場合、選択されている単糖全ての選択を解除し、関数を終了する。
                        if (flag) {
                            for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                selectedSugar.offLight();
                            }
                            liaise.initSelectedFragmentNonReductionSugar();
                            return false;
                        }
                        //targetSugarが既に選択されている単糖に含まれていない場合、選択されている単糖全ての選択を解除し、関数は続行する
                        else {
                            for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                selectedSugar.offLight();
                            }
                            liaise.initSelectedFragmentNonReductionSugar();
                            return true;
                        }
                    }
                    //既に選択れている単糖がbracketを持っていない場合
                    else {
                        //targetSugarがbracketを既に持っているとき
                        if (!targetSugar.isFragmentBracketEmpty()) {
                            //選択されている単糖を全て解除し、関数を続行する
                            for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                selectedSugar.offLight();
                            }
                            liaise.initSelectedFragmentNonReductionSugar();
                            return true;
                        }
                        //targetSugarがbracketを持っていないとき
                        else {
                            //targetSugarが既に選択されている場合、選択を解除し、関数を終了する
                            for (let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                                if (targetSugar === selectedSugar) {
                                    selectedSugar.offLight();
                                    liaise.delSelectedFragmentNonReductionSugar(targetSugar);
                                    return false;
                                }
                            }
                            //targetSugarがまだ選択されていない場合、関数を続行する
                            return true;
                        }
                    }
                }
                //targetSugarと既に選択されている単糖が異なるglycanを持つとき、選択されている単糖を全て解除し、関数を続行する
                else {
                    for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                        selectedSugar.offLight();
                    }
                    liaise.initSelectedFragmentNonReductionSugar();
                    return true;
                }

            }
        }
    }
    //targetSguarが非還元末端ではなく、すでにGlycanが選択されてある場合
    else if(!liaise.isSelectedGlycanEmpty()) {
        //すでに選択されているGlycan(Fragment)と同じGlycan(Fragment)に所属する単糖が選択された場合、オフライトし、関数から抜ける
        //既に選択されているGlycanがFragmentのとき
        if(liaise.getSelectedGlycan()[0] instanceof Fragment ) {
            let flag: boolean = false;  //targetSugarと既に選択してあるGlycanが同じGlycanのときtrue
            for(let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                if(targetSugar.getGlycan() === selectedGlycan) {
                    flag = true;
                }
            }
            //もしtargetSugarと同じGlycanが既に選択されていた場合、選択を解除し、関数を終了する
            if(flag) {
                for(let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                    selectedGlycan.offLight(selectedGlycan.getRootNode());
                }
                liaise.initSelectedGlycan();
                return false;
            }
            //もしtargetSugarと同じGlycanが既に選択されていなかった場合、選択を解除し、関数を続行する
            else {
                for(let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                    selectedGlycan.offLight(selectedGlycan.getRootNode());
                }
                liaise.initSelectedGlycan();
                return true;
            }
        }
        //既に選択されているGlycanがGlycanのとき
        else {
            //targeSugarが所属するglycanがFragmentのとき、既に選択されているGlycanの選択を解除し、関数を続行する。
            if(targetSugar.getGlycan() instanceof Fragment ) {
                liaise.getSelectedGlycan()[0].offLight(liaise.getSelectedGlycan()[0].getRootNode());
                liaise.initSelectedGlycan();
                return true;
            }
            //targeSugarが所属するglycanがGlycanのとき、同じGlycanが既に選択されていた場合、選択を解除し関数を終了する。
            else {
                for(let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                    if(targetSugar.getGlycan() === selectedGlycan) {
                        selectedGlycan.offLight(selectedGlycan.getRootNode());
                        liaise.initSelectedGlycan();
                        return false;
                    }
                }
                //既に選択されているGlycanと異なるGlycanに所属する単糖が選択された場合、オフライトし関数を続行
                for (let selectedGlycan: Glycan of liaise.getSelectedGlycan()) {
                    selectedGlycan.offLight(selectedGlycan.getRootNode());
                }
                liaise.initSelectedGlycan();
                return true;
            }

        }


    }
    //targetSugarが非還元末端ではなく、すでに非還元末端が選択されてある場合
    else if(!liaise.isSelectedFragmentNonReductionSugarEmpty()) {
        //targetSugarがFragmentの一部だった場合
        if(targetSugar.getGlycan() instanceof Fragment){
            let targetParentBracket: FragmentBracket = targetSugar.getGlycan().getParentFragmentBracket();  //ターゲット単糖の親のfragment bracket
            //既に選択してある単糖がtargetSugarと同じ親ブラケットを持っているかどうか
            if(targetParentBracket === liaise.getSelectedFragmentNonReductionSugar()[0].getGlycan().getParentFragmentBracket()) {
                //既に選択されている単糖が既にbracketを持っていた場合
                if(!liaise.getSelectedFragmentNonReductionSugar()[0].isFragmentBracketEmpty()) {
                    alert("you selected glycan already has fragment bracket;");
                    return false;
                }
                //既に選択されている単糖が既にbracketを持っていなかった場合
                else {
                    //既に選択されている単糖を削除し、関数を続行する
                    for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                        selectedSugar.offLight();
                    }
                    liaise.initSelectedFragmentNonReductionSugar();
                }
            }
            //既に選択してある単糖がtargetSugarと異なる親ブラケットを持っている場合
            else {
                //既に選択されている単糖を削除し、関数を続行する
                for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                    selectedSugar.offLight();
                }
                liaise.initSelectedFragmentNonReductionSugar();
            }
        }
        //targetSugarがGlycanの一部だった場合
        else if(targetSugar.getGlycan() instanceof Glycan) {
            //targetSugarの属するGlycanと既に選択されている単糖の属するGlycanが等しかった場合
            if(targetSugar.getGlycan() === liaise.getSelectedFragmentNonReductionSugar()[0].getGlycan()) {
                //既に選択されている単糖がbracketを持っていた場合
                if(!liaise.getSelectedFragmentNonReductionSugar()[0].isFragmentBracketEmpty()) {
                    alert("you selected glycan already has fragment bracket;");
                    return false;
                }
                //既に選択されている単糖がbracketを持っていなかった場合
                else {
                    //既に選択されている単糖を削除し、関数を続行する
                    for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                        selectedSugar.offLight();
                    }
                    liaise.initSelectedFragmentNonReductionSugar();
                }
            }
            //targetSugarの属するGlycanと既に選択されている単糖の属するGlycanが異なる場合
            else {
                //既に選択されている単糖を削除し、関数を続行する
                for(let selectedSugar: Sugar of liaise.getSelectedFragmentNonReductionSugar()) {
                    selectedSugar.offLight();
                }
                liaise.initSelectedFragmentNonReductionSugar();
            }

        }
    }
    //targetSugarが非還元末端でなく、また選択されているglycanも非還元末端もない場合
    else {
        //targetSugarがFragmentだった場合
        if(targetSugar.getGlycan() instanceof Fragment) {
            let flag1: boolean = false;
            let parentFragmentBracket: FragmentBracket = targetSugar.getGlycan().getParentFragmentBracket();
            for(let fragment: Fragment of parentFragmentBracket.getChildGlycans()) {
                if(checkSugarHasFragmentBracketinGlycan(fragment.getRootNode())){
                    flag1 = true;
                    break;
                }
            }
            if(flag1) {
                alert("you selected glycan already has fragment bracket;");
                return false;
            }
            else {
                return true;
            }
        }
        else {
            let flag1: boolean = checkSugarHasFragmentBracketinGlycan(targetSugar.getGlycan().getRootNode());  //targetSugarが所属するGlycanの非還元末端の単糖がbracketを持っていた場合true
            //非還元末端がbracketを持っている場合アラートを表示し、関数を終了する。
            if(flag1)  {
                alert("you selected glycan already has fragment bracket;");
                return false;
            }
            //還元末端がbracketを持っていない、もしくは糖鎖構造事態がbracketを持っていない場合関数を続行
            else {
                console.log("ここは？？");
                return true;
            }
        }


    }
    return true;

};