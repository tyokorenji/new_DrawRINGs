//@flow
"use strict";

import { Bracket } from "./Bracket";
import { Sugar } from "./Sugar";

class RepeatBracket extends Bracket {
    endSugar: Sugar;  //リピートの最終単糖
    startSugar: Sugar;  //リピートの最初の単糖

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

}

export { RepeatBracket };