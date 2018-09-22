//@flow
"use strict";

import { Glycan } from "../class/Glycan";
import { culcMaxMinCoordinate } from "../culcMaxMinCoordinate";
import createjs from "createjs-easeljs";
import { basicData } from "../data/graphicsData";
import { getColor } from "../data/getColor";
import { liaise } from "../main";

export let createFragmentBracket = (glycans: Array<Object>): createjs.Shape => {
    let maxMin: Array<number>;  // [maxX. minX, maxY, minY]
    if(liaise.getSelectedFragmentNonReductionSugar().length === 0) {
        maxMin = culcMaxMinCoordinate(glycans);  // [maxX. minX, maxY, minY]
    }
    else {
        maxMin = culcMaxMinCoordinate([]);  // [maxX. minX, maxY, minY]
    }
    let shape: createjs.Shape = new createjs.Shape();
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(basicData.fragmentBracketStrokeSize);
    shape.graphics.moveTo(maxMin[1], maxMin[3] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan)
        .quadraticCurveTo(maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, maxMin[3] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, maxMin[3])
        .lineTo(maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, (maxMin[2] + maxMin[3]) / 2 - basicData.fragmentBracketToParentGlycan)
        .quadraticCurveTo(maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, (maxMin[2] + maxMin[3]) / 2, maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan * 2, (maxMin[2] + maxMin[3]) / 2)
        .quadraticCurveTo(maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, (maxMin[2] + maxMin[3]) / 2, maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, (maxMin[2] + maxMin[3]) / 2 + basicData.fragmentBracketToParentGlycan)
        .lineTo(maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, maxMin[2])
        .quadraticCurveTo(maxMin[1] - basicData.symbolSize - basicData.fragmentBracketToParentGlycan, maxMin[2] + basicData.symbolSize + basicData.fragmentBracketToParentGlycan, maxMin[1], maxMin[2] + basicData.symbolSize + basicData.fragmentBracketToParentGlycan)
        .lineTo(maxMin[1], maxMin[2] + basicData.symbolSize + basicData.fragmentBracketToParentGlycan);


    return shape;
};