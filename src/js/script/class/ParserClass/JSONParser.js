//@flow
"use strict";

import { Glycan } from "../Glycan";
import { JSONKeys } from "../../data/JSONKeys";
import { check_monosaccharides } from "../../jsonParser/check/checkMonosaccharides";
import { set_monosaccharides } from "../../jsonParser/setDrawGlycanData/setMonosaccharide";
import {check_fragment} from "../../jsonParser/check/checkFragment";
import {check_repeat} from "../../jsonParser/check/checkRepeat";
import {check_edge} from "../../jsonParser/check/checkEdge";
import { check_bridge } from "../../jsonParser/check/checkBridge";

export class JSONParser {
    json: Object;
    glycan: Glycan;
    monosaccharides: Array<Object>;
    subfragments: Array<Object>;


    constructor(text: Object) {
        this.json = text;
        this.glycan = new Glycan;
        this.monosaccharides = [];
        this.subfragments = [];
    }


    //GlyTouCanで定義されたGlycanを表すJSONがチェックする、定義に外れたものであった場合falseを返す
    checkJson(): boolean {
        let MONOSACCHARIDES_FLAG: boolean = false;
        let FRAGMENTS_FLAG: boolean = false;
        let REPEAT_FLAG: boolean = false;
        let EDGES_FLAG: boolean = false;
        let BRIDGE_FLAG: boolean = false;
        for(let key: string of Object.keys(this.json)) {
            switch (key.toLowerCase()) {
                case JSONKeys.Monosaccharides.toLowerCase(): {
                    MONOSACCHARIDES_FLAG = check_monosaccharides(this.json[key]);
                    break;
                }
                case JSONKeys.Fragments.toLowerCase(): {
                    FRAGMENTS_FLAG = check_fragment(this.json[key]);
                }
                case JSONKeys.Repeat.toLowerCase(): {
                    REPEAT_FLAG = check_repeat(this.json[key]);
                    break;
                }
                case JSONKeys.Edges.toLowerCase(): {
                    EDGES_FLAG = check_edge(this.json[key]);
                    break;
                }
                case JSONKeys.Bridge.toLowerCase(): {
                    BRIDGE_FLAG = check_bridge(this.json[key]);
                    break;
                }
                default:
                    alert("this json is error!");
                    return false;
            }
        }
        console.log("keycheck1: Monosaccharide", MONOSACCHARIDES_FLAG);
        console.log("keycheck2: Fragment", FRAGMENTS_FLAG);
        console.log("keycheck3: Repeat", REPEAT_FLAG);
        console.log("keycheck4: Edge", EDGES_FLAG);
        console.log("keycheck5: Bridge", BRIDGE_FLAG);
        if (MONOSACCHARIDES_FLAG && FRAGMENTS_FLAG && REPEAT_FLAG && EDGES_FLAG && BRIDGE_FLAG) return true;
        else {
            alert("this json is error!");
            return false;
        }
    }

    setData(): Glycan{
        let keys: Array<string> = Object.keys(this.json);
        let glycan: Object = {};
        for(let key: string of keys ){
            switch(key.toLowerCase()) {
                case JSONKeys.Monosaccharides.toLowerCase(): {
                    glycan = set_monosaccharides(this.json[key]);
                    break;
                }
                case JSONKeys.SubFragments.toLowerCase(): {
                    break;
                }
                default: break;
            }
        }
        return glycan;
    }
}

