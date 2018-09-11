"use strict";

import React from "react";
import { Form, Checkbox, Table, TextArea } from "semantic-ui-react";
import { liaise } from "../script/main";
import { modifiData } from "../script/data/modificationData";

export class ModificationContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModification: modifiData.Undefined.TrivalName,
            selectedModificationPositions: liaise.selectedModifiactionPositions,
            multipleBond: false,
            bridgeBind: false,
            undef: false,
            textAreaValue: ""
        };
    }

    onChangeModificationEvent = (e, { value }) =>  {
        let currentState = this.state;
        currentState.selectedModification = value;
        currentState.multipleBond = false;
        currentState.bridgeBind = false;
        currentState.undef = false;
        currentState.textAreaValue = "";
        liaise.changeMultipleBind(false);
        liaise.changeBridgeBind(false);
        this.setState(currentState);
        liaise.selectedModification = currentState.selectedModification;
    };

    onUndefClickToggleEvent = () => {
        let currentState = this.state;
        currentState.selectedModification = modifiData.Undefined.TrivalName;
        currentState.multipleBond = false;
        currentState.bridgeBind = false;
        if(currentState.undef) {
            currentState.undef = false;
            currentState.textAreaValue = "";
        }
        else {
            currentState.undef = true;
        }
        this.setState(currentState);
    };

    onChangeUndefModificationNameAra = (e) => {
        let currentState = this.state;
        if(currentState.undef) {
            currentState.textAreaValue = e.target.value;
            currentState.selectedModification  = currentState.textAreaValue;
            this.setState(currentState);
            liaise.selectedModification = currentState.selectedModification;
        }
    };

    onChangeMultipleBindToggleEvent = () => {
        let currentState = this.state;
        if(currentState.multipleBond) {
            currentState.multipleBond = false;
            liaise.changeMultipleBind(false);
        }
        else {
            currentState.multipleBond = true;
            liaise.changeMultipleBind(true);
            if(liaise.bridgeBind) {
                currentState.bridgeBind = false;
                liaise.changeBridgeBind(false);
            }
        }
        console.log(liaise.multipleBond);
        this.setState(currentState);
    };

    onChangeBridgeBindToggleEvent = () => {
        console.log("bridgeToggleクリック");
        let currentState = this.state;
        let key = modifiData.Undefined.TrivalName;
        if(currentState.undef) {
            key = "Undefined";
        }
        else {
            for(let item in modifiData) {
                if(currentState.selectedModification === modifiData[item].TrivalName) key = item;
            }
        }
        if(currentState.bridgeBind === true) {
            currentState.bridgeBind = false;
            liaise.changeBridgeBind(false);
        }
        else if(currentState.bridgeBind === false) {
            if(modifiData[key].bridgeBind){
                currentState.bridgeBind = true;
                liaise.changeBridgeBind(true);
                if(liaise.multipleBond) {
                    currentState.multipleBond = false;
                    liaise.changeMultipleBind(false);
                }
            }
            else {
                currentState.bridgeBind = false;
                liaise.changeBridgeBind(false);
            }
        }
        this.setState(currentState);
    };

    onChangeCheckboxEvent = (e, data) => {
        if(data.checked) {
            liaise.setSelectedModifiactionPositions(data.label);
        }
        else {
            liaise.deleateSelectedModifiactionPositions(data.label);
        }
    };

    render () {

        const defTextAreaSize = {
            style: {
                width: "100%",
                height: "100%"
            }
        };

        return (
            <div>
                <Form>
                    <Form.Field>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.RLac.TrivalName + "\n ( "+ modifiData.RLac.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.RLac.TrivalName }
                                            checked = {this.state.selectedModification === modifiData.RLac.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.RPy.TrivalName+ "\n ( "+ modifiData.RPy.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.RPy.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.RPy.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.SLac.TrivalName+ "\n ( "+ modifiData.SLac.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.SLac.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.SLac.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.SPy.TrivalName+ "\n ( "+ modifiData.SPy.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.SPy.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.SPy.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.XLac.TrivalName+ "\n ( "+ modifiData.XLac.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.XLac.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.XLac.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Am.TrivalName+ "\n ( "+ modifiData.Am.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Am.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Am.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Br.TrivalName+ "\n ( "+ modifiData.Br.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Br.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Br.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Cl.TrivalName+ "\n ( "+ modifiData.Cl.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Cl.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Cl.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.DiMe.TrivalName+ "\n ( "+ modifiData.DiMe.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.DiMe.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.DiMe.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Et.TrivalName+ "\n ( "+ modifiData.Et.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Et.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Et.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.F.TrivalName+ "\n ( "+ modifiData.F.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.F.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.F.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Fo.TrivalName+ "\n ( "+ modifiData.Fo.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Fo.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Fo.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Gc.TrivalName+ "\n ( "+ modifiData.Gc.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Gc.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Gc.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.I.TrivalName+ "\n ( "+ modifiData.I.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.I.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.I.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.N.TrivalName+ "\n ( "+ modifiData.N.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.N.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.N.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NAm.TrivalName+ "\n ( "+ modifiData.NAm.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NAm.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NAm.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NDiMe.TrivalName+ "\n ( "+ modifiData.NDiMe.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NDiMe.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NDiMe.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NEtOH.TrivalName+ "\n ( "+ modifiData.NEtOH.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NEtOH.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NEtOH.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NFo.TrivalName+ "\n ( "+ modifiData.NFo.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NFo.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NFo.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NGc.TrivalName+ "\n ( "+ modifiData.NGc.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NGc.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NGc.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NMe.TrivalName+ "\n ( "+ modifiData.NMe.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NMe.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NMe.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NS.TrivalName+ "\n ( "+ modifiData.NS.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NS.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NS.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.NSuc.TrivalName+ "\n ( "+ modifiData.NSuc.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.NSuc.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.NSuc.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.OMeOH.TrivalName+ "\n ( "+ modifiData.OMeOH.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.OMeOH.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.OMeOH.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.P.TrivalName+ "\n ( "+ modifiData.P.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.P.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.P.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.PCho.TrivalName+ "\n ( "+ modifiData.PCho.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.PCho.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.PCho.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.PEm.TrivalName+ "\n ( "+ modifiData.PEm.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.PEm.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.PEm.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.PPEm.TrivalName+ "\n ( "+ modifiData.PPEm.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.PPEm.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.PPEm.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Py.TrivalName+ "\n ( "+ modifiData.Py.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Py.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Py.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.PyP.TrivalName+ "\n ( "+ modifiData.PyP.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.PyP.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.PyP.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.S.TrivalName+ "\n ( "+ modifiData.S.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.S.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.S.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.SH.TrivalName+ "\n ( "+ modifiData.SH.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.SH.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.SH.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Suc.TrivalName+ "\n ( "+ modifiData.Suc.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Suc.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Suc.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            radio
                                            label = { modifiData.Tri_P.TrivalName+ "\n ( "+ modifiData.Tri_P.Name + ")" }
                                            name = "checkboxRadioGroup"
                                            value = { modifiData.Tri_P.TrivalName}
                                            checked = {this.state.selectedModification === modifiData.Tri_P.TrivalName}
                                            onChange = {this.onChangeModificationEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                    </Table.Cell>
                                    <Table.Cell>
                                    </Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </Form.Field>
                    <Form.Field>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            toggle
                                            label = "undefined Monosacchride in SNFG"
                                            checked = {this.state.undef}
                                            onChange = {this.onUndefClickToggleEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <TextArea value = {this.state.textAreaValue} { ...defTextAreaSize } onChange = {(event) => this.onChangeUndefModificationNameAra(event)} placeholder = "please enter undefind sugar name." autoHeight/>
                    </Form.Field>
                    <Form.Field>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            toggle
                                            label = "Multiple bond"
                                            checked= {this.state.multipleBond}
                                            onChange = {this.onChangeMultipleBindToggleEvent}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox
                                            toggle
                                            label = "bridge bond"
                                            checked= {this.state.bridgeBind}
                                            onChange = {this.onChangeBridgeBindToggleEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Form.Field>
                    <Form.Field>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            label = "1"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "2"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "3"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "4"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "5"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Checkbox
                                            label = "6"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "7"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "8"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "9"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                        <Checkbox
                                            label = "10"
                                            onChange = {this.onChangeCheckboxEvent}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Form.Field>
                </Form>
            </div>
        );
    }
}
