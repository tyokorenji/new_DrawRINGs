//@flow
"use strict";

import {Sugar} from "../class/Sugar";
import {Glycan} from "../class/Glycan";
import {FragmentBracket} from "../class/FragmentBracket";
import {Fragment} from "../class/Fragment";
import { recurversiveSortChildSugars } from "./sortChildSugars";
import { setXLayer } from "./setXLayer";
import { setYLayer } from "./setYLayer";
import {basicData} from "../data/graphicsData";
import {culc_max_min_layer} from "../drawGlycan/culcMaxMinLayer";
import {culc_each_sugar_coordinate} from "./culcEachSugarCoordinate";
import {createSVGShape} from "./createSVGShape";
import { createSVGFragmentsBracket } from "./createSVGFragmetnBracket";
import { createCyclicBind } from "./createCyclicBind";
import {Glycobond} from "../class/Glycobond";

export const createSVGMain = (glycanArray: Array<Glycan>) => {
    recurversiveSortChildSugars(glycanArray[0].getRootNode());
    setXLayer(glycanArray);
    let fragmentBrackets: Array<FragmentBracket> = setYLayer(glycanArray);
    let normalDistace: number = basicData.symbolDistance + basicData.symbolSize * 2;
    let maxMinLayer: Array<number> = culc_max_min_layer(glycanArray);
    let viewBox: Array<number> = culcViewBox(maxMinLayer, normalDistace);
    let resultSVGShape: string = "<?xml version = \"1.0\"?><svg viewbox = \""+ String(viewBox[0])+ " " + String(viewBox[1]) + " " + String(viewBox[2]) + " " + String(viewBox[3]) + "\" xmlns=\"http://www.w3.org/2000/svg\">";
    for(let glycan: Glycan of glycanArray) {
        if(glycan instanceof Fragment) {
            console.log("フラグメント??");
            console.log(glycan.getRootNode());
            culc_each_sugar_coordinate(glycan.getRootNode().getParentSugars()[0], maxMinLayer, normalDistace);
        }
        else {
            culc_each_sugar_coordinate(glycan.getRootNode(), maxMinLayer, normalDistace);
        }
        recuversiveCreateSVgShapeImport(glycan.getRootNode());
        resultSVGShape = bindLineSting(glycan.getRootNode(), resultSVGShape);
        resultSVGShape = bindSvgString(glycan.getRootNode(), resultSVGShape);
    }
    for(let bracket: FragmentBracket of fragmentBrackets){
        createSVGFragmentsBracket(bracket);
        resultSVGShape += bracket.getSVGShape();
    }


    // resultSVGShape += "</svg>";
    // console.log(resultSVGShape);
    // downloadData(resultSVGShape);
    console.log(glycanArray);
    console.log("vieBox", viewBox);
    resultSVGShape += "</svg>";
    console.log(resultSVGShape);


};

const culcViewBox = (maxMinLayer: Array<number>, normalDistance: number): Array<number> => {
    let viewBox: Array<number> = [0, 0];  //[x, y, 横の長さ, 縦の長さ]
    viewBox.push((maxMinLayer[0] - maxMinLayer[1] + 1) * normalDistance);
    viewBox.push((maxMinLayer[2] - maxMinLayer[3] + 1) * normalDistance);
    return viewBox;
};

const recuversiveCreateSVgShapeImport = (sugar: Sugar) => {
    createSVGShape(sugar);
    if(sugar.isChildCyclicEmpty()) {
        for(let child: Sugar of sugar.getChildSugars()) {
            recuversiveCreateSVgShapeImport(child);
        }
    }
    else {
        for(let child: Sugar of sugar.getChildSugars()) {
            if(child === sugar.getChildCyclic().getReductionSugar()) {
                for(let parentBind: Glycobond of child.getParentBond()) {
                    if(parentBind.getParentSugar() === sugar) {
                        createCyclicBind(parentBind, sugar, child);
                    }
                }
                continue;
            }
            recuversiveCreateSVgShapeImport(child);
        }
    }

};

const bindLineSting = (sugar: Sugar, resultShape: string): string => {
    if(sugar.hasParentBond()) {
        resultShape += sugar.getParentBond()[0].getSvgLineShape() + sugar.getParentBond()[0].getSvgTextShape();
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        resultShape = bindLineSting(child, resultShape);
    }
    return resultShape;
};
const bindSvgString = (sugar: Sugar, resultShape: string): string => {
    resultShape += sugar.getSvgShape();
    for(let child: Sugar of sugar.getChildSugars()) {
        resultShape = bindSvgString(child, resultShape);
    }
    return resultShape;
};



