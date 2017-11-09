"use strict";


export let getRelativeCoordinate = (event) => {
    let rect = event.target.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    return [mouseX, mouseY];
};
