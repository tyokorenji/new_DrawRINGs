//@flow
"use strict";

export class ParserModificarion {
    parentPosition: number;
    notation: string;
    name: string;  //描画の際必要かどうかの判別を行う

    constructor() {
        this.parentPosition = NaN;
        this.notation = "undefined";
        this.name = "undefined";
    }

    setParentPosition(position: number) {
        this.parentPosition = position;
    }
    getParentPosition(): number {
        return this.parentPosition;
    }

    setNotation(notation: string) {
        this.notation = notation;
    }
    getNotation(): string {
        return this.notation;
    }
    checkNotation() {
        switch (this.notation) {
            case "UNKNOWN": {
                break;
            }
            case "UNSATURATION_EL": {
                break;
            }
            case "UNSATURATION_FL": {
                break;
            }
            case "UNSATURATION_ZU": {

                break;
            }
            case "UNSATURATION_EU": {

                break;
            }
            case "UNSATURATION_ZU": {

                break;
            }
            case "DEOXY": {

                break;
            }
            case "METHYL": {

                break;
            }
            case "ALDONICACID": {

                break;
            }
            case "URONICACID": {

                break;
            }
            case  "KETONE_U": {

                break;
            }
            case "HYDROXYL": {

                break;
            }
            case "ALDEHYDE": {

                break;
            }
            case "ULOSONIC": {

                break;
            }
            case "KETONE": {

                break;
            }
            default: {

                break;
            }
        }
        return;
    }

}