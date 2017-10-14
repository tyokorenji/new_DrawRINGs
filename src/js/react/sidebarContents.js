"use strict";
import React from "react";
import { Menu, Icon, Table, Image, TextArea, Form } from "semantic-ui-react";
import { modeType } from "./modeType";
import { nodeTable } from "./nodeTable";
import { edgeTable } from "./edgeTable";
import { structureTable } from "./structureTable";
import { KCFTextArea } from "./KCFTextArea";
export class SidebarContens {
    constructor(textareaValue){
        this.contents = undefined;
        this.textAreaValue = textareaValue;
    }


    getContents(currentModeType){
        if (currentModeType === modeType.NODE) {
            this.contents = new nodeTable();
            return (
                this.contents.getContents()
            );
        }
        else if (currentModeType === modeType.EDGE) {
            this.contents = new edgeTable();
            return (
                this.contents.getContents()
            );
        }
        else if (currentModeType === modeType.STRUCTURE) {
            this.contents = new structureTable();
            return (
                this.contents.getContents()
            );
        }
        else if (currentModeType === modeType.DRAW_KCF) {
            return (
                <KCFTextArea value = { this.textAreaValue }/>
            );
        }
        else if (currentModeType === modeType.KCF_TEXT_OUT) {
            return (
                <KCFTextArea value = { this.textAreaValue }/>
            );
        }
    }
}