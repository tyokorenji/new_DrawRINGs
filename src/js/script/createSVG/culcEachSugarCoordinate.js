//@flow
"use strict";

import {Sugar} from "../class/Sugar";
import { Glycan } from "../class/Glycan";
import {getRelativeCoordinate} from "../getRelativeCoordinate";
import {basicData} from "../data/graphicsData";

export const culc_each_sugar_coordinate = (sugar: Sugar, maxMinLayer: Array<number>, normalDistance: number) => {
    let XLayer: number = sugar.getXLayer();
    let YLayer: number = sugar.getYLayer();
    let svgCoord: Array<number> = getRelativeCoordinate(((maxMinLayer[0] - XLayer) * normalDistance) + basicData.symbolSize, ((maxMinLayer[2] - YLayer) * normalDistance) + basicData.symbolSize);
    sugar.setSvgXCoord(svgCoord[0]);
    sugar.setSvgYCoord(svgCoord[1]);
    for(let child: Sugar of sugar.getChildSugars()) {
        culc_each_sugar_coordinate(child, maxMinLayer, normalDistance);
    }
};