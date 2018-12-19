//@flow
"use strict";

import { SNFGSymbolGlycan } from "../../data/SNFGGlycanTable";
import {Sugar} from "../Sugar";
import {UndefSugar} from "../UndefSugar";
import { greekNumber } from "../../data/greekNumber";
import {Modification} from "../Modification";
import {Modificationbond} from "../Modificationbond";
import {JSONKeys} from "../../data/JSONKeys";
import {MultipleModification} from "../MultipleModification";
import {MultipleModificationBind} from "../MultipleModificationBind";
import { modifiData } from "../../data/modificationData";

export class ParserMonosaccharide {
    Modifications: Array<Object>;
    TrivialName: Array<string>;
    Substituents: Array<Object>;
    Configuration: Array<string>;
    SuperClass: string;
    RingSize: string;
    AnomState: string;
    AnomPosition: string;
    Notation: string;

    constructor() {
        this.Modifications = [];
        this.TrivialName = [];
        this.Substituents = [];
        this.Configuration = [];
        this.SuperClass = "";
        this.RingSize = "";
        this.AnomState = "";
        this.AnomPosition = "";
        this.Notation = "";
    }

    setModifications(modification: Object) {
        this.Modifications.push(modification);
    }
    getModifications(): Array<Object> {
        return this.Modifications;
    }
    setTrivialName(trivialName: string) {
        this.TrivialName.push(trivialName);
    }
    getTrivialName(): Array<string> {
        return this.TrivialName;
    }
    setSubstituents(substituents: Object) {
        this.Substituents.push(substituents);
    }
    getSubstituents(): Array<Object> {
        return this.Substituents;
    }
    setConfiguration(config: string) {
        this.Configuration.push(config);
    }
    getConfigutation(): Array<string> {
        return this.Configuration;
    }
    setSuperClass(sClass: string) {
        this.SuperClass = sClass;
    }
    getSuperClass(): string {
        return this.SuperClass;
    }
    setRingSize(size: string) {
        this.RingSize = size;
    }
    getRingSize(): string {
        return this.RingSize;
    }
    setAnomState(anom: string) {
        this.AnomState = anom;
    }
    getAnomState(): string {
        return this.AnomState;
    }setAnomPosition(anom: string) {
        this.AnomPosition = anom;
    }
    getAnomPosition(): string {
        return this.AnomPosition;
    }setNotation(notation: string) {
        this.Notation = notation;
    }
    getNotation(): string {
        return this.Notation;
    }

    checkSNFGNoatation(): Sugar {
        let config: string = "";
        for(let con: string of this.Configuration) {
            config += con;
        }
        let ring: string = "";
        switch (this.RingSize.toLowerCase()) {
            case "p": { ring = "pyranose"; break; }
            case "f": { ring = "furanose"; break; }
            default: { ring = "undefined"; break; }
        }
        let notation: string = this.Notation;
        let superClass: string = this.SuperClass;
        let SNFGKeys: Array<string> = Object.keys(SNFGSymbolGlycan);
        let CONFIG_FLAG: boolean = false;
        let RING_FLAG: boolean = false;
        let NOTATION_FLAG: boolean = false;
        let SNKey: string = "";
        let SUGAR_FLAG: boolean = false;
        let sugar: Sugar = new Sugar("");
        for (let key: string of SNFGKeys) {
            if(key.toLowerCase() === notation.toLowerCase()) {
                NOTATION_FLAG = true;
                SNKey = key;
                if (SNFGSymbolGlycan[key].isomer.toLowerCase() === config.toLowerCase()) CONFIG_FLAG = true;
                if (SNFGSymbolGlycan[key].ring.toLowerCase() === ring.toLowerCase()) RING_FLAG = true;
                if (NOTATION_FLAG && CONFIG_FLAG && RING_FLAG) {
                    sugar.changeName(key);
                    sugar.setIsomer(SNFGSymbolGlycan[key].isomer);
                    sugar.setRing(SNFGSymbolGlycan[key].ring);
                    SUGAR_FLAG = true;
                }
            }
            else continue;
        }
        if(!SUGAR_FLAG) {
            if(NOTATION_FLAG) sugar = new UndefSugar(SNKey);
            else sugar = new UndefSugar(notation);
            if(CONFIG_FLAG) sugar.setIsomer(SNFGSymbolGlycan[SNKey].isomer);
            else sugar.setIsomer(config);
            if(RING_FLAG) sugar.setRing(SNFGSymbolGlycan[SNKey].ring);
            else sugar.setRing(ring);
        }

        for(let key: string of Object.keys(greekNumber)) {
            if(key.toLowerCase() === superClass.toLowerCase()) sugar.setCarbBone(greekNumber[key]);
        }
        return sugar;
    }

    checkModificaiton(sugar: Sugar){
        let modifications: Array<Object> = this.Modifications;
        for(let modification: Object of modifications) {
            let mody: Modification = new Modification();
            let modyBond: Modificationbond = new Modificationbond();
            let keys: Array<string> = Object.keys(modification);
            let position_key: string = "";
            let notation_key: string = "";
            for(let key: string of keys) {
                switch(key.toLowerCase()) {
                    case JSONKeys.Position.toLowerCase(): {
                        position_key = key;
                        break;
                    }
                    case JSONKeys.Notation.toLowerCase(): {
                        notation_key = key;
                        break;
                    }
                }
            }
            if(modification[position_key].length === 1) {
                let notation: string = compareModifiData(modification[notation_key]);
                if(notation === "Undefined") {
                    mody.setName(modification[notation_key]);
                }
                else {
                    mody.setName(notation);
                }
                modyBond.setParentSugarPosition(modification[position_key][0]);
                mody.setModificationBond(modyBond);
            }
            else {
                mody = new MultipleModification();
                modyBond = new MultipleModificationBind();
                let notation: string = compareModifiData(modification[notation_key]);
                if(notation === "Undefined") {
                    mody.setName(modification[notation_key]);
                }
                else {
                    mody.setName(notation);
                }
                modyBond.parentSugarPosition = modification[position_key];
                mody.setMultipleBind(modyBond);
            }
            mody.setParentSugars(sugar);
            sugar.setChildModifications(mody);
        }
    }

    checkSubstituents(sugar: Sugar){
        let substituents: Array<Object> = this.Substituents;
        for(let substituent: Object of substituents) {
            let keys: Array<string> = Object.keys(substituent);
            let position_key: string = "";
            let status_key: string = "";
            let notation_key: string = "";
            let accepter_key: string = "";
            let mody: Modification = new Modification();
            let modyBond: Modificationbond = new Modificationbond();
            for(let key: string of keys) {
                switch(key.toLowerCase()) {
                    case JSONKeys.Position.toLowerCase(): {
                        position_key = key;
                        for(let positionKey: string of Object.keys(substituent[key])) {
                            if (positionKey.toLowerCase() === JSONKeys.Acceptor.toLowerCase()) accepter_key = positionKey;
                        }
                        break;
                    }
                    case JSONKeys.Status.toLowerCase(): {
                        status_key = key;
                        break;
                    }
                    case JSONKeys.Notation.toLowerCase(): {
                        notation_key = key;
                        break;
                    }
                    default: continue;
                }
            }
            if(substituent[position_key][accepter_key].length === 1) {
                let notation: string = compareModifiData(substituent[notation_key]);
                if(notation === "Undefined") {
                    mody.setName(substituent[notation_key]);
                }
                else {
                    mody.setName(notation);
                }
                modyBond.setParentSugarPosition(substituent[position_key][accepter_key][0]);
                mody.setModificationBond(modyBond);
            }
            else {
                mody = new MultipleModification();
                modyBond = new MultipleModificationBind();
                if(substituent[status_key] === "simple") mody.fuzzy = false;
                else if(substituent[status_key] === "fuzzy") mody.fuzzy = true;
                let notation: string = compareModifiData(substituent[notation_key]);
                if(notation === "Undefined") {
                    mody.setName(substituent[notation_key]);
                }
                else {
                    mody.setName(notation);
                }
                modyBond.parentSugarPosition = substituent[position_key];
                mody.setMultipleBind(modyBond);
            }
            mody.setParentSugars(sugar);
            sugar.setChildModifications(mody);
        }
    }
    checkAnome(sugar: Sugar) {
        switch(this.AnomState.toLowerCase()) {
            case "a":
            case "alpha":
            case "α":
                sugar.setAnomeric("α"); break;
            case "b":
            case "beta":
            case "β":
                sugar.setAnomeric("β"); break;
            default:
                sugar.setAnomeric("?");
        }
        sugar.setAnomeric(this.AnomState);
    }
}

const compareModifiData = (notation: string): string => {
    for(let key: string of Object.keys(modifiData)) {
        if(key.toLowerCase() === notation.toLowerCase()) {
            return key;
        }
    }
    return "Undefined";
};

