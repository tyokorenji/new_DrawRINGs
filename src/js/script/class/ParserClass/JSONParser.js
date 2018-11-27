//@flow
"use strict";

import { Glycan } from "../Glycan";
import { JSONKeys } from "../../data/JSONKeys";
import { check_subfragment } from "../../jsonParser/check/checkSubfragment";
import { check_monosaccharides } from "../../jsonParser/check/checkMonosaccharides";
import { set_monosaccharides } from "../../jsonParser/setDrawGlycanData/setMonosaccharide";


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
        let MONOSACCHARIDE_FLAG: boolean = false;
        let SUBFRAGMENT_FLAG: boolean = false;
        for(let key: string of Object.keys(this.json)) {
            switch (key.toLowerCase()) {
                case JSONKeys.Monosaccharides.toLowerCase(): {
                    MONOSACCHARIDE_FLAG = check_monosaccharides(this.json[key]);
                    break;
                }
                case JSONKeys.SubFragments.toLowerCase(): {
                    SUBFRAGMENT_FLAG = check_subfragment(this.json[key]);
                    break;
                }
                default:
                    alert("this json is error!");
                    return false;
            }
        }
        console.log("keycheck1: Monosaccharide", MONOSACCHARIDE_FLAG);
        console.log("keyCheck2: Subfragment", SUBFRAGMENT_FLAG);
        if (MONOSACCHARIDE_FLAG && SUBFRAGMENT_FLAG) return true;
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

