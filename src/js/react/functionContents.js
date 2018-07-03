"use strict";
import React from "react";
import { modeType } from "./modeType";

export class FunctionContents{
    constructor(){

    }

    getcontents(currentModeType){
        if (currentModeType === modeType.NODE) {
            return (
                <div>
                    <p>this is Draw Monosaccharide!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.EDGE) {
            return (
                <div>
                    <p>this is Draw linkage!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.ADD_MODIFICATION) {
            return (
                <div>
                    <p>this is add modification!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.STRUCTURE) {
            return (
                <div>
                    <p>this is Structure!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.REPEAT) {
            return (
                <div>
                    <p>this is Draw repeating unit!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.FRAGMENT) {
            return (
                <div>
                    <p>this is Draw glycan fragment!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.COMPOSITION) {
            return (
                <div>
                    <p>Draw composition!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.CLEAR) {
            return (
                <div>
                    <p>Clear canvas!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.DRAW_KCF) {
            return (
                <div>
                    <p>this is DrawKCF!!!</p>
                </div>
            );
        }
        else if (currentModeType === modeType.KCF_TEXT_OUT) {
            return (
                <div>
                    <p>this is KCFTextOut!!!</p>
                </div>
            );
        }
        // else if (currentModeType === modeType.UNDO) {
        //     return (
        //         <div>
        //             <p>this is undo!!!</p>
        //         </div>
        //     );
        // }
        // else if (currentModeType === modeType.REDO) {
        //     return (
        //         <div>
        //             <p>this is redo!!!</p>
        //         </div>
        //     );
        // }
        else {
            return (
                <div>
                    <p>This is initial message</p>
                </div>
            );
        }
    }
}