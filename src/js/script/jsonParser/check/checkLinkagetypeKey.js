//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";

export let check_linkagetype_key = (json: Object): boolean => {
    let CHILDSIDE_FLAG: boolean = false;
    let PARENTSIDE_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(json);
    for(let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.ChildSide.toLowerCase(): {
                if(typeof json[key] === "string") CHILDSIDE_FLAG = true;
                else return false;
                break;
            }
            case JSONKeys.ParentSide.toLowerCase(): {
                if(typeof json[key] === "string") PARENTSIDE_FLAG = true;
                else return false;
                break;
            }
            default: return false;
        }
    }
    if(CHILDSIDE_FLAG && PARENTSIDE_FLAG) return true;
    else return false;
};