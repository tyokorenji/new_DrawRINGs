//@flow
"use strict";

import { Sugar } from "./Sugar";
import { Glycan } from "./Glycan";

class Cyclic extends Glycan {
    reductionSugar: Sugar;
    nonReductionSugar: Sugar;

    constructor(){
        super();

    }

    setReductionSugar(sugar: Sugar) {
        this.reductionSugar = sugar;
        return;
    }
    getReductionSugar(): Sugar {
        return this.reductionSugar;
    }

    setNonReductionSugar(sugar: Sugar) {
        this.nonReductionSugar = sugar;
        return;
    }
    getNonReductionSugar(): Sugar {
        return this.nonReductionSugar;
    }
}

export { Cyclic };