//@flow
"use strict";

import {Glycobond} from "../class/Glycobond";
import {Sugar} from "../class/Sugar";

// export const createCyclicBind = (bind: Glycobond, parentSugar: Sugar, childSugar: Sugar) => {
//     let parentX: number = bind.getParentSugar().getSvgXCoord();
//     let parentY: number = bind.getParentSugar().getSvgYCoord();
//     let childX: number = bind.getChildSugar().getSvgXCoord();
//     let childY: number = bind.getChildSugar().getSvgYCoord();
//     bind.setSvgLineShape("<path d = \"M" + String(parentX) + " 200 90 C 200  90 0 0 90  300 \" stroke=\"black\" fill=\"none\" stroke-width=\"3\"/>");
// };