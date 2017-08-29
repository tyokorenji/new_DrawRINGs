"use strict";

import React from "react";
import NodeImg from "../../image/Node.png";
import EdgeImg from "../../image/Edge.png";
import StructureImag from "../../image/structure.png";
import ClearImg from "../../image/clear.png";
import DrawKcfImg from "../../image/draw_KCF.png";
import KcfTextOutImg from "../../image/kcf_text_out.png";
import UndoImg from "../../image/undo.png";
import RedoImg from  "../../image/redo.png";

import { ImageWrap } from "./imageWrap";
import { ExplainTextarea } from "./explainTextarea";
import { SidebarLeftPush } from "./sideBar";

import  { modeType } from "./modeType";

export class InterFace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_mode_type: modeType.NOT_SELECTED,
            explainText: "",
            sideBarVisible: false,
        };
    }

    onClickEvent(e) {
        let currentState = this.state;
        const targetId = e.target.id;
        if (targetId == "node") {
            currentState.current_mode_type = modeType.NODE;
            currentState.sideBarVisible = true;
        }
        else if (targetId == "edge") {
            currentState.current_mode_type = modeType.EDGE;
            currentState.sideBarVisible = true;
        }
        else if (targetId == "structure") {
            currentState.current_mode_type = modeType.STRUCTURE;
            currentState.sideBarVisible = true;
        }
        else if (targetId == "clear") {
            currentState.current_mode_type = modeType.CLEAR;
            currentState.sideBarVisible = false;
        }
        else if (targetId == "drawKCF") {
            currentState.current_mode_type = modeType.DRAW_KCF;
            currentState.sideBarVisible = true;
        }
        else if (targetId == "KCFTextOut") {
            currentState.current_mode_type = modeType.KCF_TEXT_OUT;
            currentState.sideBarVisible = true;
        }
        else if (targetId == "undo") {
            currentState.current_mode_type = modeType.UNDO;
            currentState.sideBarVisible = false;
        }
        else if (targetId == "redo") {
            currentState.current_mode_type = modeType.REDO;
            currentState.sideBarVisible = false;
        }
        this.setState(currentState);
    }

    mouseOverEvent(e) {
        let currentState = this.state;
        if (e.target.id == "node") currentState.explainText = "Draw Glycan!!!";
        else if (e.target.id == "edge") currentState.explainText = "Bind Glycan!!!";
        else if (e.target.id == "structure") currentState.explainText = "Motif Structure!!!";
        else if (e.target.id == "clear") currentState.explainText = "Canvas Clear!!!";
        else if (e.target.id == "draeKCF") currentState.explainText = "Image to KCF!!!";
        else if (e.target.id == "KCFTextOut") currentState.explainText = "KCF to Image!!!";
        else if (e.target.id == "undo") currentState.explainText = "Undo!!!";
        else if (e.target.id == "redo") currentState.explainText = "Redo!!!";

    }


    render() {
        const defImageStyle = {
            width: "10%",
            height: "10%",
            centered: true,
            onMouseOver : (event) => {this.mouseOverEvent(event);},
            onClick :  (event) => { this.onClickEvent(event); }
        };
        const defFunctionMenu = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "10px",
            marginLeft: "30px",
            marginRight: "80px",
            marginBottom: "10px"
        };

        const elementMargin = {
            style: {
                marginLeft: "30px",
                marginRight: "80px",
                marginBottom: "10px",
                width: "95%",
                height: "95%"
            }
        };

        const elementMarginCanvas = {
            style: {
                marginLeft: "30px",
                marginRight: "30px",
                marginBottom: "10px",
                width: "95%",
                height: "95%"
            }
        };
        return (
            <div>
                <div style = { defFunctionMenu }>
                    <ImageWrap id = "node" content = "Draw Glycan" selected = { this.state.current_mode_type === modeType.NODE } image = { NodeImg } defStyle = { defImageStyle } />
                    <ImageWrap id = "edge" content = "Bind Glycan" selected = { this.state.current_mode_type === modeType.EDGE } image = {EdgeImg } defStyle = { defImageStyle } />
                    <ImageWrap id = "structure" content = "Motif Structure" selected = { this.state.current_mode_type === modeType.STRUCTURE } image = { StructureImag } defStyle = { defImageStyle } />
                    <ImageWrap id = "clear" content = "canvas clear" selected = { this.state.current_mode_type === modeType.CLEAR } image = { ClearImg } defStyle = { defImageStyle } />
                    <ImageWrap id = "drawKCF" content = "Image to KCF" selected = { this.state.current_mode_type === modeType.DRAW_KCF } image = { DrawKcfImg } defStyle = { defImageStyle } />
                    <ImageWrap id = "KCFTextOut" content = "KCF to Image" selected = { this.state.current_mode_type === modeType.KCF_TEXT_OUT } image = { KcfTextOutImg } defStyle = { defImageStyle } />
                    <ImageWrap id = "undo" content = "Undo" selected = { this.state.current_mode_type === modeType.UNDO } image = { UndoImg } defStyle = { defImageStyle } />
                    <ImageWrap id = "redo" content = "Redo" selected = { this.state.current_mode_type === modeType.REDO } image = { RedoImg } defStyle = { defImageStyle } />
                </div>

                <div { ...elementMargin }>
                    <ExplainTextarea explainText = { this.state.explainText } />
                </div>

                <div { ...elementMarginCanvas }>
                    <SidebarLeftPush visible = { this.state.sideBarVisible } mode_type = { this.state.current_mode_type }/>
                </div>
            </div>
        );
    }
}