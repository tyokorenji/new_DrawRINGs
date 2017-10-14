"use strict";

import React from "react";
import { TextArea, Form } from "semantic-ui-react";
import { modeType } from "./modeType";

export class KCFTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textareraValue : "Initial Text"
        };
    }

    render(){
        return(
            <Form>
                <TextArea value = {this.state.textareaValue} onChange = {(e) => this.setState({textareaValue: e.target.value})} rows = {31}></TextArea>
            </Form>
        );
    }
}