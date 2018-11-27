//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";

export let check_probability_key = (json: Object): boolean => {
    let CHILDSIDE_FLAG: boolean = false;
    let PARENTSIDE_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(json);
    for(let key: string of keys) {
        switch (key.toLowerCase()) {
            case JSONKeys.ChildSide.toLowerCase(): {
                let keys2: Array<string> = Object.keys(json[key]);
                let HIGH_FLAG: boolean = false;
                let LOW_FLAG: boolean = false;
                for(let key2: string of keys2) {
                    switch (key2.toLowerCase()) {
                        case JSONKeys.High.toLowerCase(): {
                            if(typeof json[key][key2] === "number"){
                                HIGH_FLAG = true;
                            }
                            break;
                        }
                        case JSONKeys.Low.toLowerCase(): {
                            if(typeof json[key][key2] === "number"){
                                LOW_FLAG = true;
                            }
                            break;
                        }
                    }
                }
                if(HIGH_FLAG && LOW_FLAG) CHILDSIDE_FLAG = true;
                else return false;
                break;
            }
            case JSONKeys.ParentSide.toLowerCase(): {
                let keys2: Array<string> = Object.keys(json[key]);
                let HIGH_FLAG: boolean = false;
                let LOW_FLAG: boolean = false;
                for(let key2: string of keys2) {
                    switch (key2.toLowerCase()) {
                        case JSONKeys.High.toLowerCase(): {
                            if(typeof json[key][key2] === "number"){
                                HIGH_FLAG = true;
                            }
                            break;
                        }
                        case JSONKeys.Low.toLowerCase(): {
                            if(typeof json[key][key2] === "number"){
                                LOW_FLAG = true;
                            }
                            break;
                        }
                    }
                }
                if(HIGH_FLAG && LOW_FLAG) PARENTSIDE_FLAG = true;
                else return false;
                break;
            }
            default: {
                return false;
            }
        }
    }
    if(CHILDSIDE_FLAG && PARENTSIDE_FLAG) return true;
    else return false;
};
