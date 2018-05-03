"use strict";

import React from "react";
import { Table, Image } from "semantic-ui-react";
import { liaise } from "../script/main";
import { linkageModeSearch } from "./linkageModeSearch";
import { LinkageImage } from "./linkageImage";
import { linkageModeType } from "./linkageModeType";

export class EdgeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: liaise.nodeSelect
        };
    }

    onClickEvent(e) {
        let currentState = this.state;
        currentState.currentMode = linkageModeSearch(e.target.id);
        this.setState(currentState);
        liaise.linkageSelect = currentState.currentMode;
        console.log(liaise.linkageSelect);
    }

    render () {
        const defImageStyle = {
            style: {}
        };
        return (
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
        );
    }
}
