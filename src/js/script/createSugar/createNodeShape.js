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
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";
import {liaise} from "../main";

export let createNodeShape: Function = (shapeType: Symbol, event: Event): Function => {
    let symbolSize: number = 15;
    let sugar: Sugar;
    switch (shapeType) {
        case nodeModeType.HEXOSE: {
            let sugarObject: Object = createHexose(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.HEXNAC:{
            let sugarObject: Object = createHexNAc(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }

        case nodeModeType.HEXOSAMINE: {
            let sugarObject: Object = createHexosamine(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.HEXURONATE: {
            let sugarObject: Object = createHexuronate(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.DEOXYHEXOSE: {
            let sugarObject: Object = createDeoxyHexose(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.DEOXYHEXNAC: {
            let sugarObject: Object = createDeoxyHexNAc(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.DI_DEOXYHEXOSE: {
            let sugarObject: Object = createDi_DeoxyHexose(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.PENTOSE: {
            let sugarObject: Object = createPentose(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.DEOXYNONULOSONATE: {
            let sugarObject: Object = createDeoxynonulosonate(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.DI_DEOXYNONULOSONATE: {
            let sugarObject: Object = createDi_Deoxynonulosonate(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.UNKNOWN: {
            let sugarObject: Object = createUnknown(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.ASSIGNED: {
            let sugarObject: Object = createAssigned(liaise.nodeSelect, symbolSize);
            sugar = new Sugar(sugarObject.nodeName);
            sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            liaise.stage.addChild(sugar);
            sugar.addChild(sugarObject.shape);
            break;
        }
        case nodeModeType.NOT_SELECTED: {
            //未定義
            let sugarObject: Object = createUndefSNFG(event);
            sugar = new Sugar(sugarObject.nodeName);
            break;
        }
        default: {
            return createError();
        }
    }
    // let coordinate: Array<number> = getRelativeCoordinate(event);
    // sugar.setCoordinate(coordinate[0], coordinate[1]);
    return sugar;
};