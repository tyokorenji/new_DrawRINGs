//@flow
"use strict";

import { Bracket } from "./Bracket";
import { Sugar } from "./Sugar";
import { Bridge } from "./Bridge";

class RepeatBracket extends Bracket {
    endSugar: Sugar;  //リピートの最終単糖
    startSugar: Sugar;  //リピートの最初の単糖
    repeatNumber: string;

    constructor(){
        super();
    }

    getEndSugar(): Sugar {
        return this.endSugar;
    }

    setEndSugar(sugar: Sugar) {
        this.endSugar = sugar;
        return;
    }

    getStartSugar(): Sugar {
        return this.startSugar;
    }

    setStartSugar(sugar: Sugar) {
        this.startSugar = sugar;
        return;
    }
    setReepatNumber(num: string ) {
        this.repeatNumber = num;
    }
    getRepeatNumber(): string {
        return this.repeatNumber;
    }

}

export { RepeatBracket };