"use strict";

import * as _ from "lodash";
import * as createjs from "createjs-easeljs";

{
    //console.log("hello");

    console.log(_.map([1, 2, 3],(elm) => elm * elm));

    document.body.onload = () => {
        const stage = new createjs.Stage("canvas");
        const circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        stage.update();
        //console.log("hello, again");
    };
}