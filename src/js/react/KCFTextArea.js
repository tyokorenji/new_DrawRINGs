//@flow
"use strict";

import React from "react";
import { TextArea, Form, Button, Table } from "semantic-ui-react";
import { modeType } from "./modeType";
import {liaise} from "../script/main";
import {createSelectedFragment} from "../script/createFragment/createSelectedFragment";
import { JSONParser } from "../script/class/ParserClass/JSONParser";
import {Glycan} from "../script/class/Glycan";
import { drawGlycan } from "../script/drawGlycan/drawGlycan";
import { createSVG } from "../script/createSVG/createSVG";

export class KCFTextArea extends React.Component {
    state: Object;

    constructor(props: Object) {
        super(props);
        this.state = {
            textareraValue : "Initial Text"
        };
    }

    onChangeTextArea(e: Object) {
        let currentState = this.state;
        currentState.textareraValue = e.target.value;
        this.setState(currentState);
    }

    onButtonClickEvent() {
        liaise.setTextAreaValue(this.state.textareraValue);
        let jsonObejct: Object = JSON.parse(this.state.textareraValue);;
        let parser: JSONParser = new JSONParser(jsonObejct);
        let glycoJSON: boolean = parser.checkJson();
        if(!glycoJSON) return false;

        // let glycan: Glycan = parser.setData();
        // if(Object.keys(glycan).length !== 0) {
        //     // createSVG(glycan);
        //     drawGlycan(glycan);
        // }


        // throw new Error("Error!!");
        // console.log(liaise.getTextAreaValue());

    }

    render(){
        return(
            <Form>
                <Form.Field>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Button onClick = { () => this.onButtonClickEvent() } primary active = {false} >Apply!</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <TextArea value = {this.state.textareaValue} onChange = {(event) => this.onChangeTextArea(event)} rows = {31} placeholder = "please enter glycan's text format." />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Form.Field>
            </Form>



            // <Button>
            // <Form>
            //     {/*<TextArea value = {this.state.textareaValue} onChange = {(e) => this.setState({textareaValue: e.target.value})} rows = {31}></TextArea>*/}
            //     <TextArea value = {this.state.textareaValue} onChange = {(event) => this.onChangeTextArea(event)} rows = {31} placeholder = "please enter glycan's text format." />
            // </Form>
        );
    }
}