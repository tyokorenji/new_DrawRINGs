//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_monosaccharides_modifications } from "./checkMonosaccharidesModifications";
import { check_monosaccharides_substituent } from "./checkMonosaccharidesSubstituent";
import { check_monosaccharides_edge } from "./checkMonosaccharidesEdge";
import { check_configuration } from "./checkConfiguration";

export let check_monosaccharides_number_key= (json: Object): boolean => {
    let MODIFICATION_FALG: boolean = false;
    let TRIVIALNAME_FLAG: boolean = false;
    let RINGEND_FLAG: boolean = false;
    let ANOMERICSYMBOL_FLAG: boolean = false;
    let SUBSITUENTS_FLAG: boolean = false;
    let CONFIGURATION_FLAG: boolean = false;
    let SUPERCLASS_FLAG: boolean = false;
    let TRIVIALNOTATION_FLAG: boolean = false;
    let ANOMERICPOSITION_FLAG = false;
    let RINGSTART_FLAG: boolean = false;
    let EDGE_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(json);
    for(let key of keys) {
        switch (key.toLowerCase()) {
            case JSONKeys.Modifications.toLowerCase(): {
                //Modificationの中身がOKかどうかのcheck
                MODIFICATION_FALG = check_monosaccharides_modifications(json[key]);
                break;
            }
            case JSONKeys.TrivialName.toLowerCase(): {
                //TrivialNameがstringどうかのcheck
                for(let TName: string of json[key]) {
                    if(typeof TName === "string") {
                        TRIVIALNAME_FLAG = true;
                    }
                    else {
                        TRIVIALNAME_FLAG = false;
                        break;
                    }
                }
                break;
            }
            case JSONKeys.RingEnd.toLowerCase(): {
                //"RingEnd"の値がnumberかどうかのcheck
                if(typeof json[key] === "number") {
                    RINGEND_FLAG = true;
                }
                break;
            }
            case JSONKeys.AnomericSymbol.toLowerCase(): {
                //"AnomericSymbol"がstringかどうかのcheck
                if(typeof json[key] === "string") {
                    ANOMERICSYMBOL_FLAG = true;
                }
                break;
            }
            case JSONKeys.Subsituents.toLowerCase(): {
                SUBSITUENTS_FLAG = check_monosaccharides_substituent(json[key]);
                if(!SUBSITUENTS_FLAG) return false;
                break;
            }
            case JSONKeys.Configuration.toLowerCase(): {
                CONFIGURATION_FLAG = check_configuration(json[key]);
                break;
            }
            case JSONKeys.SuperClass.toLowerCase(): {
                //"SuperClass"の値がstringかどうかのcheck
                if(typeof json[key] === "string") {
                    SUPERCLASS_FLAG = true;
                }
                break;
            }
            case JSONKeys.TrivialNotation.toLowerCase(): {
                if(typeof json[key] === "string") {
                    TRIVIALNOTATION_FLAG = true;
                }
                break;
            }
            case JSONKeys.AnomericPosition.toLowerCase(): {
                //AnomericPositionがnumberがどうかのcheck
                if(typeof json[key] === "number") {
                    ANOMERICPOSITION_FLAG = true;
                }
                break;
            }
            case JSONKeys.RingStart.toLowerCase(): {
                //"RingStart"の値がnumberかどうかのcheck
                if(typeof json[key] === "number") {
                    RINGSTART_FLAG = true;
                }
                break;
            }
            case JSONKeys.Edge.toLowerCase(): {
                EDGE_FLAG = check_monosaccharides_edge(json[key]);
                break;
            }
            default: return false;
        }
    }
    // console.log("Modification", MODIFICATION_FALG);
    // console.log("TrivalName", TRIVIALNAME_FLAG);
    // console.log("Ring End", RINGEND_FLAG);
    // console.log("Anomeric symbol", ANOMERICSYMBOL_FLAG);
    // console.log("Substituents", SUBSITUENTS_FLAG);
    // console.log("Configuration", CONFIGURATION_FLAG);
    // console.log("SuperClass", SUPERCLASS_FLAG);
    // console.log("TrivialNotation", TRIVIALNOTATION_FLAG);
    // console.log("Anomeric position", ANOMERICPOSITION_FLAG);
    // console.log("Ring Start", RINGSTART_FLAG);
    // console.log("Edge", EDGE_FLAG);
    if(MODIFICATION_FALG && TRIVIALNAME_FLAG && RINGEND_FLAG && ANOMERICSYMBOL_FLAG && SUBSITUENTS_FLAG && CONFIGURATION_FLAG && SUPERCLASS_FLAG && TRIVIALNOTATION_FLAG && ANOMERICPOSITION_FLAG && RINGSTART_FLAG && EDGE_FLAG) {
        return true;
    }
    else {
        return false;
    }
};