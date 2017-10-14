"use strict";

import React from "react";
import { Table } from "semantic-ui-react";

export class edgeTable {
    constructor() {

    }

    getContents() {
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
                        <Table.Cell>-1</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>a2-1</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-2</Table.Cell>
                        <Table.Cell>a1-2</Table.Cell>
                        <Table.Cell>b1-2</Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-3</Table.Cell>
                        <Table.Cell>a1-3</Table.Cell>
                        <Table.Cell>b1-3</Table.Cell>
                        <Table.Cell>a2-3</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-4</Table.Cell>
                        <Table.Cell>a1-4</Table.Cell>
                        <Table.Cell>b1-4</Table.Cell>
                        <Table.Cell>a2-4</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-5</Table.Cell>
                        <Table.Cell>a1-5</Table.Cell>
                        <Table.Cell>b1-5</Table.Cell>
                        <Table.Cell>a2-5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-6</Table.Cell>
                        <Table.Cell>a1-6</Table.Cell>
                        <Table.Cell>b1-6</Table.Cell>
                        <Table.Cell>a2-6</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-7</Table.Cell>
                        <Table.Cell>a1-7</Table.Cell>
                        <Table.Cell>b1-7</Table.Cell>
                        <Table.Cell>a2-7</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>-8</Table.Cell>
                        <Table.Cell>a1-8</Table.Cell>
                        <Table.Cell>b1-8</Table.Cell>
                        <Table.Cell>a2-8</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}
