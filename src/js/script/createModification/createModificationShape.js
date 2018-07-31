//@flow
"use strict";

import createjs from "createjs-easeljs";
import { Sugar } from "../class/Sugar";
import { Modification } from "../class/Modification";
import { basicData } from "../data/graphicsData";
import { getColor } from "../data/getColor";
import { MultipleBond } from "../class/MultipleBond";
import { MultipleBondEdge } from "../class/MultipleBondBind";
import {liaise} from "../main";

export let createModificaitonShape = (sugar: Sugar) => {
    let upperMody: Array<Object> = [];
    let bottomMody: Array<Object> = [];
    //Bridgeのソート
    if(sugar.hasChildMultipleBind()) {
        for (let item: MultipleBond of sugar.getChildMultipleBind()) {
            item.getBridgeBond().parentSugarPosition.sort(function(a,b){
                if( a < b ) return -1;
                if( a > b ) return 1;
                return 0;
            });
        }
    }


    //Modificationの上か下か判別
    if(sugar.hasChildModificaiton()) {
        for (let item: Modification of sugar.getChildModifications()) {
            if (sugar.getCarbBode() / 2 < item.getModificationBond().getParentSugarPosition()) {
                upperMody.push(item);
            }
            else {
                bottomMody.push(item);
            }
        }
    }

    //Bridgeを上か下か判別
    if(sugar.hasChildMultipleBind()) {
        for (let item: MultipleBond of sugar.getChildMultipleBind()) {
            if (sugar.getCarbBode() / 2 < item.getBridgeBond().getParentSugarPosition()[0]) {
                upperMody.push(item);
            }
            else {
                bottomMody.push(item);
            }
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
                if(upperMody[j] instanceof Modification) {
                    if (min > upperMody[j].getModificationBond().getParentSugarPosition()) {
                        min = upperMody[j].getModificationBond().getParentSugarPosition();
                        index = j;
                    }
                }
                else {
                    if (min > upperMody[j].getBridgeBond().getParentSugarPosition()[0]) {
                        min = upperMody[j].getBridgeBond().getParentSugarPosition()[0];
                        index = j;
                    }
                }

            }
            upperMody.push(upperMody[index]);
            upperMody.splice(index, 1);
            length2 = length2 - 1;
        }
    }

    if(upperMody.length !== 0) {
        //修飾のY座標
        let upperY = sugar.getYCoord() - basicData.symbolSize - basicData.commaUpperDistance;
        //修飾の数が偶数のとき
        if(upperMody.length % 2 === 0 ) {
            let left: number = upperMody.length / 2 - 1;  //真ん中から左側のはじめの位置
            let right: number = left + 1;  //真ん中から右側のはじめの位置
            let commaShape: Array<createjs.Text> = [];  //修飾同士の間にあるカンマのリスト
            //カンマを必要数作成する(長さ - 1個)
            for(let i = 0; i < upperMody.length - 1; i++) {
                let comma: createjs.Text = new createjs.Text(",", basicData.modificationSize+ "px serif", getColor("black"));
                commaShape.push(comma);
            }
            upperMody[left].setChildCommaShape(commaShape[commaShape.length - 1]);
            commaShape.pop();
            upperMody[left].getChildCommaShape().x = sugar.getXCoord();
            upperMody[left].getChildCommaShape().y = upperY;
            for(let i = left; i >= 0; i--) {
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(upperMody[i] instanceof Modification) {
                    shape.text = String(upperMody[i].getModificationBond().getParentSugarPosition()) + upperMody[i].getName();
                }
                else {
                    for(let item of upperMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== upperMody[i].getBridgeBond().getParentSugarPosition()[upperMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + upperMody[i].getName();
                        }
                    }

                }
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
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(upperMody[i] instanceof Modification) {
                    shape.text = String(upperMody[i].getModificationBond().getParentSugarPosition()) + upperMody[i].getName();
                }
                else {
                    for(let item of upperMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== upperMody[i].getBridgeBond().getParentSugarPosition()[upperMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + upperMody[i].getName();
                        }
                    }

                }
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
            let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
            if(upperMody[middle] instanceof Modification) {
                shape.text = String(upperMody[middle].getModificationBond().getParentSugarPosition()) + upperMody[middle].getName();
            }
            else {
                for(let item of upperMody[middle].getBridgeBond().getParentSugarPosition()) {
                    if(item !== upperMody[middle].getBridgeBond().getParentSugarPosition()[upperMody[middle].getBridgeBond().getParentSugarPosition().length - 1]) {
                        shape.text += String(item) + ",";
                    }
                    else {
                        shape.text += String(item) + upperMody[middle].getName();
                    }
                }

            }
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
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(upperMody[i] instanceof Modification) {
                    shape.text = String(upperMody[i].getModificationBond().getParentSugarPosition()) + upperMody[i].getName();
                }
                else {
                    for(let item of upperMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== upperMody[i].getBridgeBond().getParentSugarPosition()[upperMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + upperMody[i].getName();
                        }
                    }

                }
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
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(upperMody[i] instanceof Modification) {
                    shape.text = String(upperMody[i].getModificationBond().getParentSugarPosition()) + upperMody[i].getName();
                }
                else {
                    for(let item of upperMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== upperMody[i].getBridgeBond().getParentSugarPosition()[upperMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + upperMody[i].getName();
                        }
                    }

                }
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
                if(bottomMody[j] instanceof Modification) {
                    if (min > bottomMody[j].getModificationBond().getParentSugarPosition()) {
                        min = bottomMody[j].getModificationBond().getParentSugarPosition();
                        index = j;
                    }
                }
                else {
                    if (min > bottomMody[j].getBridgeBond().getParentSugarPosition()[0]) {
                        min = bottomMody[j].getBridgeBond().getParentSugarPosition()[0];
                        index = j;
                    }
                }

            }
            bottomMody.push(bottomMody[index]);
            bottomMody.splice(index, 1);
            length2 = length2 - 1;
        }
    }

    if(bottomMody.length !== 0) {
        //修飾のY座標
        let upperY = sugar.getYCoord() + basicData.symbolSize + basicData.commaUpperDistance;
        //修飾の数が偶数のとき
        if(bottomMody.length % 2 === 0 ) {
            let left: number = bottomMody.length / 2 - 1;  //真ん中から左側のはじめの位置
            let right: number = left + 1;  //真ん中から右側のはじめの位置
            let commaShape: Array<createjs.Text> = [];  //修飾同士の間にあるカンマのリスト
            //カンマを必要数作成する(長さ - 1個)
            for(let i = 0; i < bottomMody.length - 1; i++) {
                let comma: createjs.Text = new createjs.Text(",", basicData.modificationSize+ "px serif", getColor("black"));
                commaShape.push(comma);
            }
            bottomMody[left].setChildCommaShape(commaShape[commaShape.length - 1]);
            commaShape.pop();
            bottomMody[left].getChildCommaShape().x = sugar.getXCoord();
            bottomMody[left].getChildCommaShape().y = upperY;
            for(let i = left; i >= 0; i--) {
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(bottomMody[i] instanceof Modification) {
                    shape.text = String(bottomMody[i].getModificationBond().getParentSugarPosition()) + bottomMody[i].getName();
                }
                else {
                    for(let item of bottomMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== bottomMody[i].getBridgeBond().getParentSugarPosition()[bottomMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + bottomMody[i].getName();
                        }
                    }

                }
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
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(bottomMody[i] instanceof Modification) {
                    shape.text = String(bottomMody[i].getModificationBond().getParentSugarPosition()) + bottomMody[i].getName();
                }
                else {
                    for(let item of bottomMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== bottomMody[i].getBridgeBond().getParentSugarPosition()[bottomMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + bottomMody[i].getName();
                        }
                    }

                }
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
            let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
            if(bottomMody[middle] instanceof Modification) {
                shape.text = String(bottomMody[middle].getModificationBond().getParentSugarPosition()) + bottomMody[middle].getName();
            }
            else {
                for(let item of bottomMody[middle].getBridgeBond().getParentSugarPosition()) {
                    if(item !== bottomMody[middle].getBridgeBond().getParentSugarPosition()[bottomMody[middle].getBridgeBond().getParentSugarPosition().length - 1]) {
                        shape.text += String(item) + ",";
                    }
                    else {
                        shape.text += String(item) + bottomMody[middle].getName();
                    }
                }

            }
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
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(bottomMody[i] instanceof Modification) {
                    shape.text = String(bottomMody[i].getModificationBond().getParentSugarPosition()) + bottomMody[i].getName();
                }
                else {
                    for(let item of bottomMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== bottomMody[i].getBridgeBond().getParentSugarPosition()[bottomMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + bottomMody[i].getName();
                        }
                    }

                }
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
                let shape: createjs.Text = new createjs.Text("", basicData.modificationSize+ "px serif", getColor("black"));
                if(bottomMody[i] instanceof Modification) {
                    shape.text = String(bottomMody[i].getModificationBond().getParentSugarPosition()) + bottomMody[i].getName();
                }
                else {
                    for(let item of bottomMody[i].getBridgeBond().getParentSugarPosition()) {
                        if(item !== bottomMody[i].getBridgeBond().getParentSugarPosition()[bottomMody[i].getBridgeBond().getParentSugarPosition().length - 1]) {
                            shape.text += String(item) + ",";
                        }
                        else {
                            shape.text += String(item) + bottomMody[i].getName();
                        }
                    }

                }
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
};