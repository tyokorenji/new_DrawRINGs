//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_notation_value } from "./checkNotationValue";


/***
 *   JSON MonosaccharidesのModificationのチェック
 * @param json: Modification の配列
 * @returns {boolean} : cehckの結果OKかどうか
 */
export let check_modifications = (modifications: Array<Object>): boolean => {
    if(modifications.length === 0) return true;
    let POSITIONONE_FLAG:boolean = false;
    let NOTATION_FLAG: boolean = false;
    for(let modification: Object of modifications) {
        let keys: Array<string> = Object.keys(modification);
        for(let key of keys) {
            switch (key.toLowerCase()) {
                case JSONKeys.PositionOne.toLowerCase(): {
                    if(typeof modification[key] === "number") {
                        POSITIONONE_FLAG = true;
                    }
                    break;
                }
                case JSONKeys.Notation.toLowerCase(): {
                    NOTATION_FLAG = check_notation_value(modification[key]);
                    if(!NOTATION_FLAG) return false;
                    break;
                }
                default: {
                    return false;
                }
            }
        }
        if(POSITIONONE_FLAG && NOTATION_FLAG) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};
