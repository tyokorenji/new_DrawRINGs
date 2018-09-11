"use strict";

import React from "react";
import { Table, Image, Form, Checkbox, Radio } from "semantic-ui-react";
import { liaise } from "../script/main";
import { linkageModeSearch } from "./linkageModeSearch";
import { LinkageImage } from "./linkageImage";
import { linkageModeType } from "./linkageModeType";

export class EdgeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: liaise.nodeSelect,
            undef: false,
            anomeric: "",
            parentPosition: NaN,
            childPotisiotn: NaN
        };
    }

    onClickEvent(e) {
        let currentState = this.state;
        currentState.undef = false;
        currentState.anomeric = "";
        currentState.parentPosition = NaN;
        currentState.childPosition = NaN;
        liaise.initUndefLinakgeSelect();
        currentState.currentMode = linkageModeSearch(e.target.id);
        this.setState(currentState);
        liaise.linkageSelect = currentState.currentMode;
        console.log(liaise.linkageSelect);
    }

    onClickToggleEvent = () => {
        let currentState = this.state;
        currentState.currentMode = linkageModeSearch("");
        liaise.linkageSelect = currentState.currentMode;
        if(currentState.undef) {
            currentState.undef = false;
        }
        else {
            currentState.undef = true;
        }
        liaise.undefLinkage = currentState.undef;
        this.setState(currentState);
    };
    onChangeAnomericRadio = (e, {value}) => {
        let currentState = this.state;
        if(currentState.undef) {
            currentState.anomeric = {value}.value;
            liaise.undefLinkageSelect.anomeric = currentState.anomeric;
            this.setState(currentState);
        }
    };

    onChangeParentPositionRadio = (e, {value}) => {
        let currentState = this.state;
        if(currentState.undef) {
            currentState.parentPosition = {value}.value;
            liaise.undefLinkageSelect.parentPosition = currentState.parentPosition;
            this.setState(currentState);
        }
    };

    onChangeChildPositionRadio = (e, {value}) => {
        let currentState = this.state;
        if(currentState.undef) {
            currentState.childPosition = {value}.value;
            liaise.undefLinkageSelect.childPosition = currentState.childPosition;
            this.setState(currentState);
        }
    };

    // DEBUG

    render () {
        const defImageStyle = {
            style: {}
        };
        return (
            <div>
                <Table definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>a1-</Table.HeaderCell>
                            <Table.HeaderCell>b1-</Table.HeaderCell>
                            <Table.HeaderCell>a2-</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "a2-1" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-1.png' id = { "a2-1" } selected = { this.state.currentMode === linkageModeType.A2_1 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-2</Table.Cell>
                            <Table.Cell id = { "a1-2" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-2.png' id = { "a1-2" } selected = { this.state.currentMode === linkageModeType.A1_2 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-2" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-2.png' id = { "b1-2" } selected = { this.state.currentMode === linkageModeType.B1_2 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-3</Table.Cell>
                            <Table.Cell id = { "a1-3" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-3.png' id = { "a1-3" } selected = { this.state.currentMode === linkageModeType.A1_3 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-3" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-3.png' id = { "b1-3" } selected = { this.state.currentMode === linkageModeType.B1_3 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "a2-3" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-3.png' id = { "a2-3" } selected = { this.state.currentMode === linkageModeType.A2_3 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-4</Table.Cell>
                            <Table.Cell id = { "a1-4" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-4.png' id = { "a1-4" } selected = { this.state.currentMode === linkageModeType.A1_4 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-4" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-4.png' id = { "b1-4" } selected = { this.state.currentMode === linkageModeType.B1_4 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "a2-4" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-4.png' id = { "a2-4" } selected = { this.state.currentMode === linkageModeType.A2_4 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-5</Table.Cell>
                            <Table.Cell id = { "a1-5" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-5.png' id = { "a1-5" } selected = { this.state.currentMode === linkageModeType.A1_5 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-5" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-5.png' id = { "b1-5" } selected = { this.state.currentMode === linkageModeType.B1_5 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "a2-5" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-5.png' id = { "a2-5" } selected = { this.state.currentMode === linkageModeType.A2_5 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-6</Table.Cell>
                            <Table.Cell id = { "a1-6" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-6.png' id = { "a1-6" } selected = { this.state.currentMode === linkageModeType.A1_6 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-6" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-6.png' id = { "b1-6" } selected = { this.state.currentMode === linkageModeType.B1_6 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "a2-6" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-6.png' id = { "a2-6" } selected = { this.state.currentMode === linkageModeType.A2_6 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-7</Table.Cell>
                            <Table.Cell id = { "a1-7" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-7.png' id = { "a1-7" } selected = { this.state.currentMode === linkageModeType.A1_7 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-7" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-7.png' id = { "b1-7" } selected = { this.state.currentMode === linkageModeType.B1_7 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "a2-7" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-7.png' id = { "a2-7" } selected = { this.state.currentMode === linkageModeType.A2_7 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>-8</Table.Cell>
                            <Table.Cell id = { "a1-8" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a1-8.png' id = { "a1-8" } selected = { this.state.currentMode === linkageModeType.A1_8 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "b1-8" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/b1-8.png' id = { "b1-8" } selected = { this.state.currentMode === linkageModeType.B1_8 } defStyle = { defImageStyle }/></Table.Cell>
                            <Table.Cell id = { "a2-8" } onClick = { (event) => this.onClickEvent(event) } ><LinkageImage image='../image/symbol/a2-8.png' id = { "a2-8" } selected = { this.state.currentMode === linkageModeType.A2_8 } defStyle = { defImageStyle }/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>


                <Form>
                    <Form.Field>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            toggle
                                            label = "undefined linkage"
                                            checked = {this.state.undef}
                                            onClick = {this.onClickToggleEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Form.Field>
                </Form>

                <Form>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="3"> Please select anomeric of child sugar .</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="α"
                                            name="anomericGroup"
                                            value="α"
                                            checked={this.state.anomeric === "α"}
                                            onChange = {this.onChangeAnomericRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="β"
                                            name="anomericGroup"
                                            value="β"
                                            checked={this.state.anomeric === "β"}
                                            onChange = {this.onChangeAnomericRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="undefined"
                                            name="ringRadioGroup"
                                            value="?"
                                            checked={this.state.anomeric === "?"}
                                            onChange = {this.onChangeAnomericRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Form>

                <Form>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="5"> Please select position of parent sugar .</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="1"
                                            name="parentGroup"
                                            value="1"
                                            checked={this.state.parentPosition === "1"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="2"
                                            name="parentGroup"
                                            value="2"
                                            checked={this.state.parentPosition === "2"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="3"
                                            name="parentGroup"
                                            value="3"
                                            checked={this.state.parentPosition === "3"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="4"
                                            name="parentGroup"
                                            value="4"
                                            checked={this.state.parentPosition === "4"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="5"
                                            name="parentGroup"
                                            value="5"
                                            checked={this.state.parentPosition === "5"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="6"
                                            name="parentGroup"
                                            value="6"
                                            checked={this.state.parentPosition === "6"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="7"
                                            name="parentGroup"
                                            value="7"
                                            checked={this.state.parentPosition === "7"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="8"
                                            name="parentGroup"
                                            value="8"
                                            checked={this.state.parentPosition === "8"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="9"
                                            name="parentGroup"
                                            value="9"
                                            checked={this.state.parentPosition === "9"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="undefined"
                                            name="parentGroup"
                                            value="?"
                                            checked={this.state.parentPosition === "?"}
                                            onChange = {this.onChangeParentPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Form>

                <Form>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="5"> Please select position of child sugar .</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="1"
                                            name="childGroup"
                                            value="1"
                                            checked={this.state.childPosition === "1"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="2"
                                            name="childGroup"
                                            value="2"
                                            checked={this.state.childPosition === "2"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="3"
                                            name="childGroup"
                                            value="3"
                                            checked={this.state.childPosition === "3"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="4"
                                            name="childGroup"
                                            value="4"
                                            checked={this.state.childPosition === "4"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="5"
                                            name="childGroup"
                                            value="5"
                                            checked={this.state.childPosition === "5"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="6"
                                            name="childGroup"
                                            value="6"
                                            checked={this.state.childPosition === "6"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="7"
                                            name="childGroup"
                                            value="7"
                                            checked={this.state.childPosition === "7"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="8"
                                            name="childGroup"
                                            value="8"
                                            checked={this.state.childPosition === "8"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="9"
                                            name="childGroup"
                                            value="9"
                                            checked={this.state.childPosition === "9"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.Field>
                                        <Radio
                                            label="undefined"
                                            name="childGroup"
                                            value="?"
                                            checked={this.state.childPosition === "?"}
                                            onChange = {this.onChangeChildPositionRadio}
                                        />
                                    </Form.Field>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Form>
            </div>
        );
    }
}
