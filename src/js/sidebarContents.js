"use strict";
import React from "react";
import { Menu, Icon, Table } from "semantic-ui-react";
import { modeType } from "./modeType";

export class SidebarContens {
    constructor(){

    }
    getContents(currentModeType){
        if (currentModeType === modeType.NODE) {
            return (
                <Table definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>White(Generic)</Table.HeaderCell>
                            <Table.HeaderCell>Blue</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>reset rating</Table.Cell>
                            <Table.Cell>None</Table.Cell>
                            <Table.Cell>Resets rating to default value</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>set rating</Table.Cell>
                            <Table.Cell>rating (integer)</Table.Cell>
                            <Table.Cell>Sets the current star rating to specified value</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            );
        }
        else if (currentModeType === modeType.EDGE) {
            return (
                <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
            );
        }
        else if (currentModeType === modeType.STRUCTURE) {
            return (
                <Menu.Item name='home'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
            );
        }
        else if (currentModeType === modeType.DRAW_KCF) {
            return (
                <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
            );
        }
        else if (currentModeType === modeType.KCF_TEXT_OUT) {
            return (
                <Menu.Item name='home'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
            );
        }
    }
}