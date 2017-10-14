"use strict";

import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./react/header";
import { InterFace } from "./react/interFace";

ReactDOM.render(
    <Header/>,
    document.getElementById("titleHeder")
);

ReactDOM.render(
    <InterFace/>,
    document.getElementById("interFace")
);

window.addEventListener("resize", handleResize);
handleResize(); // 起動時にもリサイズしておく
function handleResize() {
    let w = $('.wrapper').width();
    let h = $('.wrapper').height();
    $("#canvas").attr("width", w);
    $("#canvas").attr("height", h);
}
// import * as _ from "lodash";
// import * as createjs from "createjs-easeljs";

// {
//     //console.log("hello");
//
//     console.log(_.map([1, 2, 3],(elm) => elm * elm));
//
//     document.body.onload = () => {
//         const stage = new createjs.Stage("canvas");
//         const circle = new createjs.Shape();
//         circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
//         circle.x = 100;
//         circle.y = 100;
//         stage.addChild(circle);
//         stage.update();
//         //console.log("hello, again");
//     };
// }