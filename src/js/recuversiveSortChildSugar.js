//@flow
"use strict";

import {Sugar} from "./script/class/Sugar";

export const recuversiveSortChildSugar = (sugar: Sugar) => {
    sugar.sortChildSugar();
    for(let child: Sugar of sugar.getChildSugars()) {
        recuversiveSortChildSugar(child);
    }
};