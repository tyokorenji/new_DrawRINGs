//@flow
"use strict";

import { Composition } from "./Composition";

class UndefComposition extends Composition {
    constructor(name: string) {
        super(name);
    }

    setXCoord(x: number) {
        this.x = x - this.children[1].getMeasuredWidth() / 2;
        this.xCoord = x;
    }

    setYCoord(y: number) {
        this.y = y - this.children[1].getMeasuredHeight() / 2;
        this.yCoord = y;
    }
}

export { UndefComposition };
