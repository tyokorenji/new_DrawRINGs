//@flow
"use strict";

import createjs from "createjs-easeljs";
import { Sugar } from "../class/Sugar";
import { Modification } from "../class/Modification";
import { basicData } from "../data/graphicsData";
import { getColor } from "../data/getColor";

export let createModificaitonShape = (sugar: Sugar) => {
    let upperMody: Array<Modification> = [];
    let bottomMody: Array<Modification> = [];
    for(let item: Modification of sugar.getChildModifications()) {
        if(sugar.getCarbBode() / 2 < item.getModificationBond().getParentPosition()) {
            upperMody.push(item);
        }
        else {
            bottomMody.push(item);
        }
    }
    //上の修飾の処理
    if(upperMody.length > 1) {
        //上の修飾を小さい順にソート
        let length: number = upperMody.length;
        let length2: number = length;
        for (let i: number = 0; i < length; i++) {
            let min: number = 100;
            let index: number = 100;
            for (let j: number = 0; j < length2; j++) {
                if (min > upperMody[j].getModificationBond().getParentPosition()) {
                    min = upperMody[j].getModificationBond().getParentPosition();
                    index = j;
                }
            }
            upperMody.push(upperMody[index]);
            upperMody.splice(index, 1);
            length2 = length2 - 1;
        }
    }
    if(upperMody.length !== 0) {
        //修飾の数が偶数
        let upperY = sugar.getYCoord() - basicData.symbolSize - basicData.commaUpperDistance;
        if(upperMody.length % 2 === 0 ) {
            let left: number = upperMody.length / 2 - 1;
            let right: number = left + 1;
            let commaShape: Array<createjs.Text> = [];
            for(let i = 0; i < upperMody.length - 1; i++) {
                let comma: createjs.Text = new createjs.Text(",", basicData.modificationSize+ "px serif", getColor("black"));
                commaShape.push(comma);
            }
            upperMody[left].setChildCommaShape(commaShape[commaShape.length - 1]);
            commaShape.pop();
            upperMody[left].getChildCommaShape().x = sugar.getXCoord();
            upperMody[left].getChildCommaShape().y = upperY;
            for(let i = left; i >= 0; i--) {
                let shape: createjs.Text = new createjs.Text(String(upperMody[i].getModificationBond().getParentPosition()) + upperMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                upperMody[i].addChild(shape);
                upperMody[i].x = upperMody[i].getChildCommaShape().x - (upperMody[i].children[0].getMeasuredWidth()) - (upperMody[i].getChildCommaShape().getMeasuredWidth() / 2);
                upperMody[i].y = upperY;
                upperMody[i].setXCoord(upperMody[i].x);
                upperMody[i].setYCoord(upperMody[i].y);
                if(i !== 0) {
                    upperMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    upperMody[i - 1].getChildCommaShape().x = upperMody[i].getXCoord() - upperMody[i].children[0].getMeasuredWidth() / 2 - upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    upperMody[i - 1].getChildCommaShape().y = upperY;
                }
            }

            for(let i = right; i < upperMody.length; i++) {
                let shape: createjs.Text = new createjs.Text(String(upperMody[i].getModificationBond().getParentPosition()) + upperMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                upperMody[i].addChild(shape);
                upperMody[i].x = upperMody[i - 1].getChildCommaShape().x + (upperMody[i].children[0].getMeasuredWidth() / 4) + (upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2);
                upperMody[i].y = upperY;
                upperMody[i].setXCoord(upperMody[i].x);
                upperMody[i].setYCoord(upperMody[i].y);
                if(i !== upperMody.length - 1) {
                    upperMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    upperMody[i - 1].getChildCommaShape().x = upperMody[i].getXCoord() + upperMody[i].children[0].getMeasuredWidth() / 2 + upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    upperMody[i - 1].getChildCommaShape().y = upperY;
                }
            }
        }
        //修飾が奇数のとき
        else {
            let middle: number = 0;
            if(upperMody.length !==1) {
                middle = upperMody.length / 2 - 0.5;
            }
            let commaShape: Array<createjs.Text> = [];
            for(let i = 0; i < upperMody.length - 1; i++) {
                let comma: createjs.Text = new createjs.Text(",", basicData.modificationSize+ "px serif", getColor("black"));
                commaShape.push(comma);
            }
            let shape: createjs.Text = new createjs.Text(String(upperMody[middle].getModificationBond().getParentPosition()) + upperMody[middle].getName(), basicData.modificationSize+ "px serif", getColor("black"));
            upperMody[middle].addChild(shape);
            upperMody[middle].x = sugar.getXCoord() - basicData.commaUpperDistance;
            upperMody[middle].y = upperY;
            upperMody[middle].setXCoord(upperMody[middle].x);
            upperMody[middle].setYCoord(upperMody[middle].y);
            if(upperMody.length !== 1) {
                upperMody[middle].setChildCommaShape(commaShape[commaShape.length - 1]);
                commaShape.pop();
                upperMody[middle].getChildCommaShape().x = upperMody[middle].getXCoord() + upperMody[middle].children[0].getMeasuredWidth();
                upperMody[middle].getChildCommaShape().y = upperY;
                upperMody[middle - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                commaShape.pop();
                upperMody[middle - 1].getChildCommaShape().x = upperMody[middle].getXCoord() - upperMody[middle].children[0].getMeasuredWidth()  / 2;
                upperMody[middle - 1].getChildCommaShape().y = upperY;
            }

            for(let i = middle - 1; i >= 0; i--) {
                let shape: createjs.Text = new createjs.Text(String(upperMody[i].getModificationBond().getParentPosition()) + upperMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                upperMody[i].addChild(shape);
                upperMody[i].x = upperMody[i].getChildCommaShape().x - upperMody[i].children[0].getMeasuredWidth() / 1.25  - upperMody[i].getChildCommaShape().getMeasuredWidth() / 2;
                upperMody[i].y = upperY;
                upperMody[i].setXCoord(upperMody[i].x);
                upperMody[i].setYCoord(upperMody[i].y);
                if(i !== 0) {
                    upperMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    upperMody[i - 1].getChildCommaShape().x = upperMody[i].getXCoord() - upperMody[i].children[0].getMeasuredWidth() / 2 - upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    upperMody[i - 1].getChildCommaShape().y = upperY;
                }
            }

            for(let i = middle + 1; i < upperMody.length; i++) {
                let shape: createjs.Text = new createjs.Text(String(upperMody[i].getModificationBond().getParentPosition()) + upperMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                upperMody[i].addChild(shape);
                upperMody[i].x = upperMody[i - 1].getChildCommaShape().x + (upperMody[i].children[0].getMeasuredWidth() / 4) + (upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2);
                // upperMody[i].x = upperMody[i - 1].getChildCommaShape().x + upperMody[i].children[0].getMeasuredWidth() / 2 + upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                upperMody[i].y = upperY;
                upperMody[i].setXCoord(upperMody[i].x);
                upperMody[i].setYCoord(upperMody[i].y);
                if(i !== upperMody.length - 1) {
                    upperMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    upperMody[i - 1].getChildCommaShape().x = upperMody[i].getXCoord() + upperMody[i].children[0].getMeasuredWidth() / 2 + upperMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    upperMody[i - 1].getChildCommaShape().y = upperY;
                }
            }

        }

    }
    //下の修飾を小さい順にソート
    if(bottomMody.length > 1) {
        //上の修飾を小さい順にソート
        let length: number = bottomMody.length;
        let length2: number = length;
        for (let i: number = 0; i < length; i++) {
            let min: number = 100;
            let index: number = 100;
            for (let j: number = 0; j < length2; j++) {
                if (min > bottomMody[j].getModificationBond().getParentPosition()) {
                    min = bottomMody[j].getModificationBond().getParentPosition();
                    index = j;
                }
            }
            bottomMody.push(bottomMody[index]);
            bottomMody.splice(index, 1);
            length2 = length2 - 1;
        }
    }

    if(bottomMody.length !== 0) {
        //修飾の数が偶数
        let upperY = sugar.getYCoord() + basicData.symbolSize + basicData.commaBottomDistance;
        if(bottomMody.length % 2 === 0 ) {
            let left: number = bottomMody.length / 2 - 1;
            let right: number = left + 1;
            let commaShape: Array<createjs.Text> = [];
            for(let i = 0; i < bottomMody.length - 1; i++) {
                let comma: createjs.Text = new createjs.Text(",", basicData.modificationSize+ "px serif", getColor("black"));
                commaShape.push(comma);
            }
            bottomMody[left].setChildCommaShape(commaShape[commaShape.length - 1]);
            commaShape.pop();
            bottomMody[left].getChildCommaShape().x = sugar.getXCoord();
            bottomMody[left].getChildCommaShape().y = upperY;
            for(let i = left; i >= 0; i--) {
                let shape: createjs.Text = new createjs.Text(String(bottomMody[i].getModificationBond().getParentPosition()) + bottomMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                bottomMody[i].addChild(shape);
                bottomMody[i].x = bottomMody[i].getChildCommaShape().x - (bottomMody[i].children[0].getMeasuredWidth()) - (bottomMody[i].getChildCommaShape().getMeasuredWidth() / 2);
                bottomMody[i].y = upperY;
                bottomMody[i].setXCoord(bottomMody[i].x);
                bottomMody[i].setYCoord(bottomMody[i].y);
                if(i !== 0) {
                    bottomMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    bottomMody[i - 1].getChildCommaShape().x = bottomMody[i].getXCoord() - bottomMody[i].children[0].getMeasuredWidth() / 2 - bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    bottomMody[i - 1].getChildCommaShape().y = upperY;
                }
            }

            for(let i = right; i < bottomMody.length; i++) {
                let shape: createjs.Text = new createjs.Text(String(bottomMody[i].getModificationBond().getParentPosition()) + bottomMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                bottomMody[i].addChild(shape);
                bottomMody[i].x = bottomMody[i - 1].getChildCommaShape().x + (bottomMody[i].children[0].getMeasuredWidth() / 4) + (bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2);
                bottomMody[i].y = upperY;
                bottomMody[i].setXCoord(bottomMody[i].x);
                bottomMody[i].setYCoord(bottomMody[i].y);
                if(i !== bottomMody.length - 1) {
                    bottomMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    bottomMody[i - 1].getChildCommaShape().x = bottomMody[i].getXCoord() + bottomMody[i].children[0].getMeasuredWidth() / 2 + bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    bottomMody[i - 1].getChildCommaShape().y = upperY;
                }
            }
        }
        //修飾が奇数のとき
        else {
            let middle: number = 0;
            if(bottomMody.length !==1) {
                middle = bottomMody.length / 2 - 0.5;
            }
            let commaShape: Array<createjs.Text> = [];
            for(let i = 0; i < bottomMody.length - 1; i++) {
                let comma: createjs.Text = new createjs.Text(",", basicData.modificationSize+ "px serif", getColor("black"));
                commaShape.push(comma);
            }
            let shape: createjs.Text = new createjs.Text(String(bottomMody[middle].getModificationBond().getParentPosition()) + bottomMody[middle].getName(), basicData.modificationSize+ "px serif", getColor("black"));
            bottomMody[middle].addChild(shape);
            bottomMody[middle].x = sugar.getXCoord() - basicData.commaUpperDistance;
            bottomMody[middle].y = upperY;
            bottomMody[middle].setXCoord(bottomMody[middle].x);
            bottomMody[middle].setYCoord(bottomMody[middle].y);
            if(bottomMody.length !== 1) {
                bottomMody[middle].setChildCommaShape(commaShape[commaShape.length - 1]);
                commaShape.pop();
                bottomMody[middle].getChildCommaShape().x = bottomMody[middle].getXCoord() + bottomMody[middle].children[0].getMeasuredWidth();
                bottomMody[middle].getChildCommaShape().y = upperY;
                bottomMody[middle - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                commaShape.pop();
                bottomMody[middle - 1].getChildCommaShape().x = bottomMody[middle].getXCoord() - bottomMody[middle].children[0].getMeasuredWidth()  / 2;
                bottomMody[middle - 1].getChildCommaShape().y = upperY;
            }

            for(let i = middle - 1; i >= 0; i--) {
                let shape: createjs.Text = new createjs.Text(String(bottomMody[i].getModificationBond().getParentPosition()) + bottomMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                bottomMody[i].addChild(shape);
                bottomMody[i].x = bottomMody[i].getChildCommaShape().x - bottomMody[i].children[0].getMeasuredWidth() / 1.25  - bottomMody[i].getChildCommaShape().getMeasuredWidth() / 2;
                bottomMody[i].y = upperY;
                bottomMody[i].setXCoord(bottomMody[i].x);
                bottomMody[i].setYCoord(bottomMody[i].y);
                if(i !== 0) {
                    bottomMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    bottomMody[i - 1].getChildCommaShape().x = bottomMody[i].getXCoord() - bottomMody[i].children[0].getMeasuredWidth() / 2 - bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    bottomMody[i - 1].getChildCommaShape().y = upperY;
                }
            }

            for(let i = middle + 1; i < bottomMody.length; i++) {
                let shape: createjs.Text = new createjs.Text(String(bottomMody[i].getModificationBond().getParentPosition()) + bottomMody[i].getName(), basicData.modificationSize+ "px serif", getColor("black"));
                bottomMody[i].addChild(shape);
                bottomMody[i].x = bottomMody[i - 1].getChildCommaShape().x + (bottomMody[i].children[0].getMeasuredWidth() / 4) + (bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2);
                // bottomMody[i].x = bottomMody[i - 1].getChildCommaShape().x + bottomMody[i].children[0].getMeasuredWidth() / 2 + bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                bottomMody[i].y = upperY;
                bottomMody[i].setXCoord(bottomMody[i].x);
                bottomMody[i].setYCoord(bottomMody[i].y);
                if(i !== bottomMody.length - 1) {
                    bottomMody[i - 1].setChildCommaShape(commaShape[commaShape.length - 1]);
                    commaShape.pop();
                    bottomMody[i - 1].getChildCommaShape().x = bottomMody[i].getXCoord() + bottomMody[i].children[0].getMeasuredWidth() / 2 + bottomMody[i - 1].getChildCommaShape().getMeasuredWidth() / 2;
                    bottomMody[i - 1].getChildCommaShape().y = upperY;
                }
            }

        }

    }

    // for(let item of liaise.selectedModifiactionPositions) {
    //     let shape: createjs.Text = new createjs.Text(String(item) + liaise.selectedModification, basicData.modificationSize+ "px serif", getColor("black"));
    //     let modification = new Modification();
    //     modification.addChild(shape);
    //     if(item <= 3) {
    //         let anotherModification: Array<Object> = sugar.getChildModifications();
    //         let parentMody: Array<Object> = [];
    //         for(let another of anotherModification) {
    //             if(another.getParentPosition <= 3) {
    //                 parentMody.push(another);
    //             }
    //         }
    //         switch(parentMody.length) {
    //             case 0: {
    //                 modification.x = sugar.getXCoord();
    //                 modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                 break;
    //             }
    //             case 1: {
    //                 if(parentMody[0].getParentPosition < item) {
    //                     parentMody[0].x = sugar.getXCoord() - basicData.symbolSize;
    //                     parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                     modification.x = sugar.getXCoord() + basicData.symbolSize;
    //                     modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                     parentMody[0].setXCoord(parentMody[0].x);
    //                     parentMody[0].setYCoord(parentMody[0].y);
    //                 }
    //                 else {
    //                     modification.x = sugar.getXCoord() - basicData.symbolSize;
    //                     modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                     parentMody[0].x = sugar.getXCoord() + basicData.symbolSize;
    //                     parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                     parentMody[0].setXCoord(parentMody[0].x);
    //                     parentMody[0].setYCoord(parentMody[0].y);
    //                 }
    //                 break;
    //
    //             }
    //             case 2: {
    //                 if (parentMody[0].getParentPosition < item && parentMody[0].getParentPosition < parentMody[1].getParentPosition) {
    //                     if (parentMody[1].getParentPosition < item) {
    //                         parentMody[0].x = sugar.getXCoord() - basicData.symbolSize;
    //                         parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[1].x = sugar.getXCoord();
    //                         parentMody[1].y = sugar.getYCoord() + basicData.symbolSize;
    //                         modification.x = sugar.getXCoord() + basicData.symbolSize;
    //                         modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].setXCoord(parentMody[0].x);
    //                         parentMody[0].setYCoord(parentMody[0].y);
    //                         parentMody[1].setXCoord(parentMody[1].x);
    //                         parentMody[1].setYCoord(parentMody[1].y);
    //                     }
    //                     else {
    //                         parentMody[0].x = sugar.getXCoord() - basicData.symbolSize;
    //                         parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[1].x = sugar.getXCoord() + basicData.symbolSize;
    //                         parentMody[1].y = sugar.getYCoord() + basicData.symbolSize;
    //                         modification.x = sugar.getXCoord();
    //                         modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].setXCoord(parentMody[0].x);
    //                         parentMody[0].setYCoord(parentMody[0].y);
    //                         parentMody[1].setXCoord(parentMody[1].x);
    //                         parentMody[1].setYCoord(parentMody[1].y);
    //                     }
    //                 }
    //                 else if(parentMody[1].getParentPosition < item && parentMody[1].getParentPosition < parentMody[0].getParentPosition) {
    //                     if (parentMody[0].getParentPosition < item) {
    //                         parentMody[1].x = sugar.getXCoord() - basicData.symbolSize;
    //                         parentMody[1].y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].x = sugar.getXCoord();
    //                         parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                         modification.x = sugar.getXCoord() + basicData.symbolSize;
    //                         modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].setXCoord(parentMody[0].x);
    //                         parentMody[0].setYCoord(parentMody[0].y);
    //                         parentMody[1].setXCoord(parentMody[1].x);
    //                         parentMody[1].setYCoord(parentMody[1].y);
    //                     }
    //                     else {
    //                         parentMody[1].x = sugar.getXCoord() - basicData.symbolSize;
    //                         parentMody[1].y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].x = sugar.getXCoord() + basicData.symbolSize;
    //                         parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                         modification.x = sugar.getXCoord();
    //                         modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].setXCoord(parentMody[0].x);
    //                         parentMody[0].setYCoord(parentMody[0].y);
    //                         parentMody[1].setXCoord(parentMody[1].x);
    //                         parentMody[1].setYCoord(parentMody[1].y);
    //                     }
    //
    //                 }
    //                 else {
    //                     if (parentMody[0].getParentPosition < parentMody[1].getParentPosition) {
    //                         parentMody[0].x = sugar.getXCoord();
    //                         parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[1].x = sugar.getXCoord() + basicData.symbolSize;
    //                         parentMody[1].y = sugar.getYCoord() + basicData.symbolSize;
    //                         modification.x = sugar.getXCoord() - basicData.symbolSize;
    //                         modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].setXCoord(parentMody[0].x);
    //                         parentMody[0].setYCoord(parentMody[0].y);
    //                         parentMody[1].setXCoord(parentMody[1].x);
    //                         parentMody[1].setYCoord(parentMody[1].y);
    //                     }
    //                     else {
    //                         parentMody[0].x = sugar.getXCoord() + basicData.symbolSize;
    //                         parentMody[0].y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[1].x = sugar.getXCoord();
    //                         parentMody[1].y = sugar.getYCoord() + basicData.symbolSize;
    //                         modification.x = sugar.getXCoord() - basicData.symbolSize;
    //                         modification.y = sugar.getYCoord() + basicData.symbolSize;
    //                         parentMody[0].setXCoord(parentMody[0].x);
    //                         parentMody[0].setYCoord(parentMody[0].y);
    //                         parentMody[1].setXCoord(parentMody[1].x);
    //                         parentMody[1].setYCoord(parentMody[1].y);
    //                     }
    //
    //                 }
    //                 break;
    //             }
    //
    //             default: {
    //                 alert("かぶってるよ！");
    //             }
    //
    //         }
    //         modification.setXCoord(modification.x);
    //         modification.setYCoord(modification.y);
    //         liaise.addStage(modification);
    //     }
    //     modification.setName(liaise.selectedModification);
    //     modification.setParentPosition(item);
    //     sugar.setChildModifications(modification);
    // }

};