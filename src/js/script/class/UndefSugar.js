//@flow
"use strict";

import { Sugar } from "./Sugar";
import {getColor} from "../data/getColor";
import {liaise} from "../main";

class UndefSugar extends Sugar  {
    constructor(name: string) {
        super(name);
    }

    setCoordinate(x: number, y: number) {
        this.x = x - this.children[1].getMeasuredWidth() / 2;
        this.y = y - this.children[1].getMeasuredHeight() / 2;
        this.xCoord = x;
        this.yCoord = y;
    }

    //nodeShpaのハイライト
    highLight() {
        console.log(this.children);
        this.children[0].alpha = 0.5;
        this.children[0].graphics._stroke.style = getColor("red");
        this.children[1].alpha = 0.5;
        this.children[1].color = getColor("red");
        liaise.stage.update();
    }

    //nodeShpaのオフライト
    offLight() {
        this.children[0].alpha = 1.0;
        this.children[0].graphics._stroke.style  = getColor("white");
        this.children[1].alpha = 1.0;
        this.children[1].color = getColor("black");
        liaise.stage.update();
    }
}

export { UndefSugar };