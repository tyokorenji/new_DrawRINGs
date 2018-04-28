//@flow
"use strict";

import { nodeModeType } from "../../react/nodeModeType";
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

export let createNodeShape = (shapeType: Symbol, event: Event): Function => {
    let symbolSize: number = 15;
    switch (shapeType) {
        case nodeModeType.HEXOSE:
            return createHexose(event);
        case nodeModeType.HEXNAC:
            return createHexNAc(event);
        case nodeModeType.HEXOSAMINE:
            return createHexosamine(event);
        case nodeModeType.HEXURONATE:
            return createHexuronate(event);
        case nodeModeType.DEOXYHEXOSE:
            return createDeoxyHexose(event);
        case nodeModeType.DEOXYHEXNAC:
            return createDeoxyHexNAc(event);
        case nodeModeType.DI_DEOXYHEXOSE:
            return createDi_DeoxyHexose(event);
        case nodeModeType.PENTOSE:
            return createPentose(event);
        case nodeModeType.DEOXYNONULOSONATE:
            return createDeoxynonulosonate(event);
        case nodeModeType.DI_DEOXYNONULOSONATE:
            return createDi_Deoxynonulosonate(event);
        case nodeModeType.UNKNOWN:
            return createUnknown(event, symbolSize);
        case nodeModeType.ASSIGNED:
            return createAssigned(event, symbolSize);
        case nodeModeType.NOT_SELECTED:
            //未定義
            return createUndefSNFG(event);
        default:
            return createError();
    }
};