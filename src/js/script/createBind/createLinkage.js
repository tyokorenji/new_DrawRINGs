//@flow
"use strict";

import { linkageData } from "../data/linkageData";
import createjs from "createjs-easeljs";
import { getColor } from "../data/getColor";
import { basicData } from "../data/graphicsData";

export function createLinkage(target: Object, linkage: string) {
    console.log(target);
    target.setChildPosition(linkageData[linkage].childPosition);
    target.setParentPositon(linkageData[linkage].parentPosition);
    target.setChildAnomeric(linkageData[linkage].anomeric);
    target.setLinkageType(linkage);
    let middleCoordinate = target.calcMiddleCoordinate();
    let quarterCoordinates = target.calcQuaterCoordinate(middleCoordinate);
    let parentQuarterCoordinate = quarterCoordinates[0];
    let childQuarterCoordinate = quarterCoordinates[1];
    let parentShape = new createjs.Text(target.parentPosition, basicData.linkageSize + "px serif", getColor("black"));
    let childShape = new createjs.Text(target.childAnomeric, basicData.linkageSize + "px serif", getColor("black"));
    parentShape.x = parentQuarterCoordinate[0];
    childShape.x = childQuarterCoordinate[0];
    if (target.whitchParentHighChildLow(parentQuarterCoordinate, childQuarterCoordinate)) {
        parentShape.y = parentQuarterCoordinate[1] - basicData.linkageYPosition;
        childShape.y = childQuarterCoordinate[1] - basicData.linkageYPosition;
    }
    else {
        parentShape.y = parentQuarterCoordinate[1] + basicData.linkageYPosition;
        childShape.y = childQuarterCoordinate[1] + basicData.linkageYPosition;
    }
    target.addChild(parentShape);
    target.addChild(childShape);

}