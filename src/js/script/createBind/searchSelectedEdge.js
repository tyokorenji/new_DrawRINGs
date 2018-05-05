//@flor
"use strict";

import { liaise } from "../main";
import { linkageModeType } from "../../react/linkageModeType";

export let searchSelectedLinkage = (): string => {
    switch(liaise.linkageSelect) {
        case linkageModeType.A1_2:
            return "a1-2";
        case linkageModeType.A1_3:
            return "a1-3";
        case linkageModeType.A1_4:
            return "a1-4";
        case linkageModeType.A1_5:
            return "a1-5";
        case linkageModeType.A1_6:
            return "a1-6";
        case linkageModeType.A1_7:
            return "a1-7";
        case linkageModeType.A1_8:
            return "a1-8";
        case linkageModeType.B1_2:
            return "b1-2";
        case linkageModeType.B1_3:
            return "b1-3";
        case linkageModeType.B1_4:
            return "b1-4";
        case linkageModeType.B1_5:
            return "b1-5";
        case linkageModeType.B1_6:
            return "b1-6";
        case linkageModeType.B1_7:
            return "b1-7";
        case linkageModeType.B1_8:
            return "b1-8";
        case linkageModeType.A2_1:
            return "a2-1";
        case linkageModeType.A2_3:
            return "a2-3";
        case linkageModeType.A2_4:
            return "a2-4";
        case linkageModeType.A2_5:
            return "a2-5";
        case linkageModeType.A2_6:
            return "a2-6";
        case linkageModeType.A2_7:
            return "a2-7";
        case linkageModeType.A2_8:
            return "a2-8";
        default:
            return "undefined";
    }
}