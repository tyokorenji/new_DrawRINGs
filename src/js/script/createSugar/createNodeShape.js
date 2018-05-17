//@flow
"use strict";

import { nodeModeType } from "../../react/nodeModeType";
import { Sugar } from "../class/Sugar";
import { createHexose } from "./createHexose";
import { createError } from "./createError";
import { createHexNAc } from "./createHexNAc";
import { createHexosamine } from "./createHexosamine";
import { createHexuronate } from "./createHexuronate";
import { createDeoxyHexose } from "./createDeoxyHexose";
import { createDeoxyHexNAc } from "./createDeoxyHexNAc";
import { createDi_DeoxyHexose } from "./createDi_DeoxyHexose";
import { createPentose } from "./createPentose";
import { createDeoxynonulosonate } from "./createDeoxynonulosonate";
import { createDi_Deoxynonulosonate } from "./createDi_Deoxynonulosonate";
import { createUnknown } from "./createUnknown";
import { createAssigned } from "./createAssigned";
import { createUndefSNFG } from "./createUndefSNFG";
import { getRelativeCoordinate } from "../getRelativeCoordinate";

export let createNodeShape: Function = (shapeType: Symbol, event: Event): Function => {
    let symbolSize: number = 15;
    let sugar: Sugar;
    switch (shapeType) {
        case nodeModeType.HEXOSE:
            sugar = createHexose(event, symbolSize);
            break;
        case nodeModeType.HEXNAC:
            sugar = createHexNAc(event, symbolSize);
            break;
        case nodeModeType.HEXOSAMINE:
            sugar = createHexosamine(event, symbolSize);
            break;
        case nodeModeType.HEXURONATE:
            sugar =  createHexuronate(event, symbolSize);
            break;
        case nodeModeType.DEOXYHEXOSE:
            sugar =  createDeoxyHexose(event, symbolSize);
            break;
        case nodeModeType.DEOXYHEXNAC:
            sugar =  createDeoxyHexNAc(event, symbolSize);
            break;
        case nodeModeType.DI_DEOXYHEXOSE:
            sugar =  createDi_DeoxyHexose(event, symbolSize);
            break;
        case nodeModeType.PENTOSE:
            sugar =  createPentose(event, symbolSize);
            break;
        case nodeModeType.DEOXYNONULOSONATE:
            sugar =  createDeoxynonulosonate(event, symbolSize);
            break;
        case nodeModeType.DI_DEOXYNONULOSONATE:
            sugar =  createDi_Deoxynonulosonate(event, symbolSize);
            break;
        case nodeModeType.UNKNOWN:
            sugar =  createUnknown(event, symbolSize);
            break;
        case nodeModeType.ASSIGNED:
            sugar =  createAssigned(event, symbolSize);
            break;
        case nodeModeType.NOT_SELECTED:
            //未定義
            sugar =  createUndefSNFG(event);
            break;
        default:
            return createError();
    }
    let coordinate: Array<number> = getRelativeCoordinate(event);
    sugar.setCoordinate(coordinate[0], coordinate[1]);
    return sugar;
};