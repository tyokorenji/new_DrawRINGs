//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";

export let check_position_key = (json: Object): boolean => {
    let CHILDSIDE_FLAG: boolean = false;
    let PARENTSIDE_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(json);
    if(keys.length === 0) return true;
    for(let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.ChildSide.toLowerCase(): {
                for(let childSide: number of json[key]){
                    if(typeof childSide !== "number") {
                        return false;
                    }
                }
                CHILDSIDE_FLAG = true;
                break;
            }
            case JSONKeys.ParentSide.toLowerCase(): {
                for(let parentSide: number of json[key]){
                    if(typeof parentSide !== "number") {
                        return false;
                    }
                }
                PARENTSIDE_FLAG = true;
                break;
            }
        }
    }
    if(CHILDSIDE_FLAG && PARENTSIDE_FLAG) return true;
    else return false;
};
