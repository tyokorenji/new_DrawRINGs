//@flow
"use strict";

import {VisibleElement} from "./VisibleElement";

export class CompositionText extends VisibleElement {

    nop: number;  //number of peace

    constructor() {
        super();
        this.nop = NaN;
    }

    setNop(nop: number) {
        this.nop = nop;
    }
    getNop(): number {
        return this.nop;
    }
}