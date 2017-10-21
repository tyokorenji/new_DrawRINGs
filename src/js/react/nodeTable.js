"use strict";

import React from "react";
import { Table, Image } from "semantic-ui-react";

export class NodeTable extends React.Component {
    constructor(props) {
        super(props);
    }


    onClickEvent(e) {
        console.log(e.target.id);
    }

    render(){
        return (
            <div>
                <Table definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>White<br/>(Generic)</Table.HeaderCell>
                            <Table.HeaderCell>Blue</Table.HeaderCell>
                            <Table.HeaderCell>Green</Table.HeaderCell>
                            <Table.HeaderCell>Yellow</Table.HeaderCell>
                            <Table.HeaderCell>Orange</Table.HeaderCell>
                            <Table.HeaderCell>Pink</Table.HeaderCell>
                            <Table.HeaderCell>Purple</Table.HeaderCell>
                            <Table.HeaderCell>Light Blue</Table.HeaderCell>
                            <Table.HeaderCell>Brown</Table.HeaderCell>
                            <Table.HeaderCell>Red</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Filled Circle</Table.Cell>
                            <Table.Cell id = { "Hexose" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Hexose.jpg' size='mini' id = { "Hexose" } /><br/><p id = { "Hexose" } >Hexose</p></Table.Cell>
                            <Table.Cell id = { "Glc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Glc.jpg' size='mini' id = { "Glc" } /><br/><p id = { "Glc" } >Glc</p></Table.Cell>
                            <Table.Cell id = { "Man" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Man.jpg' size='mini' id = { "Man" } /><br/><p id = { "Man" } >Man</p></Table.Cell>
                            <Table.Cell id = { "Gal" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Gal.jpg' size='mini' id = { "Gal" } /><br/><p id = { "Gal" } >Gal</p></Table.Cell>
                            <Table.Cell id = { "Gul" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Gul.jpg' size='mini' id = { "Gul" } /><br/><p id = { "Gul" } >Gul</p></Table.Cell>
                            <Table.Cell id = { "Alt" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Alt.jpg' size='mini' id = { "Alt" } /><br/><p id = { "Alt" } >Alt</p></Table.Cell>
                            <Table.Cell id = { "All" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/All.jpg' size='mini' id = { "All" } /><br/><p id = { "All" } >All</p></Table.Cell>
                            <Table.Cell id = { "Tal" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Tal.jpg' size='mini' id = { "Tal" } /><br/><p id = { "Tal" } >Tal</p></Table.Cell>
                            <Table.Cell id = { "Ido" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Ido.jpg' size='mini' id = { "Ido" } /><br/><p id = { "Ido" } >Ido</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Square</Table.Cell>
                            <Table.Cell id = { "HexNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/HexNAc.jpg' size='mini' id = { "HexNAc" } /><br/><p id = { "HexNAc" } >HexNAc</p></Table.Cell>
                            <Table.Cell id = { "GlcNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GlcNAc.jpg' size='mini' id = { "GlcNAc" } /><br/><p id = { "GlcNAc" } >GlcNAc</p></Table.Cell>
                            <Table.Cell id = { "ManNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/ManNAc.jpg' size='mini' id = { "ManNAc" } /><br/><p id = { "ManNAc" } >ManNAc</p></Table.Cell>
                            <Table.Cell id = { "GalNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GalNAc.jpg' size='mini' id = { "GalNAc" } /><br/><p id = { "GalNAc" } >GalNAc</p></Table.Cell>
                            <Table.Cell id = { "GulNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GulNAc.jpg' size='mini' id = { "GulNAc" } /><br/><p id = { "GulNAc" } >GulNAc</p></Table.Cell>
                            <Table.Cell id = { "AltNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/AltNAc.jpg' size='mini' id = { "AltNAc" } /><br/><p id = { "AltNAc" } >AltNAc</p></Table.Cell>
                            <Table.Cell id = { "AllNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/AllNAc.jpg' size='mini' id = { "AllNAc" } /><br/><p id = { "AllNAc" } >AllNAc</p></Table.Cell>
                            <Table.Cell id = { "TalNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/TalNAc.jpg' size='mini' id = { "TalNAc" } /><br/><p id = { "TalNAc" } >TalNAc</p></Table.Cell>
                            <Table.Cell id = { "IdoNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/IdoNAc.jpg' size='mini' id = { "IdoNAc" } /><br/><p id = { "IdoNAc" } >IdoNAc</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Crossed Square</Table.Cell>
                            <Table.Cell id = { "Hexosamine" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Hexosamine.jpg' size='mini' id = { "Hexosamine" } /><br/><p id = { "Hexosamine" } >Hexosamine</p></Table.Cell>
                            <Table.Cell id = { "GlcN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GlcN.jpg' size='mini' id = { "GlcN" } /><br/><p id = { "GlcN" } >GlcN</p></Table.Cell>
                            <Table.Cell id = { "ManN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/MAnN.jpg' size='mini' id = { "ManN" } /><br/><p id = { "ManN" } >ManN</p></Table.Cell>
                            <Table.Cell id = { "GalN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GalN.jpg' size='mini' id = { "GalN" } /><br/><p id = { "GalN" } >GalN</p></Table.Cell>
                            <Table.Cell id = { "GulN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GulN.jpg' size='mini' id = { "GulN" } /><br/><p id = { "GulN" } >GulN</p></Table.Cell>
                            <Table.Cell id = { "AltN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/AltN.jpg' size='mini' id = { "AltN" } /><br/><p id = { "AltN" } >AltN</p></Table.Cell>
                            <Table.Cell id = { "AllN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/AllN.jpg' size='mini' id = { "AllN" } /><br/><p id = { "AllN" } >AllN</p></Table.Cell>
                            <Table.Cell id = { "TalN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/TalN.jpg' size='mini' id = { "TalN" } /><br/><p id = { "TalN" } >TalN</p></Table.Cell>
                            <Table.Cell id = { "IdoN" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/IdoN.jpg' size='mini' id = { "IdoN" } /><br/><p id = { "IdoN" } >IdoN</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Divided Diamond</Table.Cell>
                            <Table.Cell id = { "Hexuronate" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Hexuronate.jpg' size='mini' id = { "Hexuronate" } /><br/><p id = { "Hexuronate" } >Hexuronate</p></Table.Cell>
                            <Table.Cell id = { "GlcA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GlcA.jpg' size='mini' id = { "GlcA" } /><br/><p id = { "GlcA" } >GlcA</p></Table.Cell>
                            <Table.Cell id = { "ManA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/ManA.jpg' size='mini' id = { "ManA" } /><br/><p id = { "ManA" } >ManA</p></Table.Cell>
                            <Table.Cell id = { "GalA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GalA.jpg' size='mini' id = { "GalA" } /><br/><p id = { "GalA" } >GalA</p></Table.Cell>
                            <Table.Cell id = { "GulA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/GulA.jpg' size='mini' id = { "GulA" } /><br/><p id = { "GulA" } >GulA</p></Table.Cell>
                            <Table.Cell id = { "AltA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/AltA.jpg' size='mini' id = { "AltA" } /><br/><p id = { "AltA" } >AltA</p></Table.Cell>
                            <Table.Cell id = { "AllA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/AllA.jpg' size='mini' id = { "AllA" } /><br/><p id = { "AllA" } >AllA</p></Table.Cell>
                            <Table.Cell id = { "TalA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/TalA.jpg' size='mini' id = { "TalA" } /><br/><p id = { "TalA" } >TalA</p></Table.Cell>
                            <Table.Cell id = { "IdoA" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/IdoA.jpg' size='mini' id = { "IdoA" } /><br/><p id = { "IdoA" } >IdoA</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Triangle</Table.Cell>
                            <Table.Cell id = { "Deoxyhexose" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Deoxyhexose.jpg' size='mini' id = { "Deoxyhexose" } /><br/><p id = { "Deoxyhexose" } >Deoxyhexose</p></Table.Cell>
                            <Table.Cell id = { "Qui" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Qui.jpg' size='mini' id = { "Qui" } /><br/><p id = { "Qui" } >Qui</p></Table.Cell>
                            <Table.Cell id = { "Rha" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Rha.jpg' size='mini' id = { "Rha" } /><br/><p id = { "Rha" } >Rha</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "d6Gul" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/6dGul.jpg' size='mini' id = { "d6Gul" } /><br/><p id = { "d6Gul" } >6dGul</p></Table.Cell>
                            <Table.Cell id = { "d6Alt" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/6dAlt.jpg' size='mini' id = { "d6Alt" } /><br/><p id = { "d6Alt" } >6dAlt</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "d6Tal" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/6dTal.jpg' size='mini' id = { "d6Tal" } /><br/><p id = { "d6Tal" } >6dTal</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Fuc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Fuc.jpg' size='mini' id = { "Fuc" } /><br/><p id = { "Fuc" } >Fuc</p></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Divided Triangle</Table.Cell>
                            <Table.Cell id = { "DeoxyhexNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/DeoxyhexNAc.jpg' size='mini' id = { "DeoxyhexNAc" } /><br/><p id = { "DeoxyhexNAc" } >DeoxyhexNAc</p></Table.Cell>
                            <Table.Cell id = { "QuiNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/QuiNAc.jpg' size='mini' id = { "QuiNAc" } /><br/><p id = { "QuiNAc" } >QuiNAc</p></Table.Cell>
                            <Table.Cell id = { "RhaNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/RhaNAc.jpg' size='mini' id = { "RhaNAc" } /><br/><p id = { "RhaNAc" } >RhaNAc</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "d6AltNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/6dAltNAc.jpg' size='mini' id = { "d6AltNAc" } /><br/><p id = { "d6AltNAc" } >6dAltNAc</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "d6TalNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/6dTalNAc.jpg' size='mini' id = { "d6TalNAc" } /><br/><p id = { "d6TalNAc" } >6dTalNAc</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "FucNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/FucNAc.jpg' size='mini' id = { "FucNAc" } /><br/><p id = { "FucNAc" } >FucNAc</p></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Flat Rectangle</Table.Cell>
                            <Table.Cell id = { "Di_deoxyhexose" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Di-deoxyhexose.jpg' size='mini' id = { "Di_deoxyhexose" } /><br/><p id = { "Di_deoxyhexose" } >Di-deoxyhexose</p></Table.Cell>
                            <Table.Cell id = { "Oli" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Oli.jpg' size='mini' id = { "Oli" } /><br/><p id = { "Oli" } >Oli</p></Table.Cell>
                            <Table.Cell id = { "Tyv" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Tyv.jpg' size='mini' id = { "Tyv" } /><br/><p id = { "Tyv" } >Tyv</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Abe" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Abe.jpg' size='mini' id = { "Abe" } /><br/><p id = { "Abe" } >Abe</p></Table.Cell>
                            <Table.Cell id = { "Par" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Par.jpg' size='mini' id = { "Par" } /><br/><p id = { "Par" } >Par</p></Table.Cell>
                            <Table.Cell id = { "Dig" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Dig.jpg' size='mini' id = { "Dig" } /><br/><p id = { "Dig" } >Dig</p></Table.Cell>
                            <Table.Cell id = { "Col" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Col.jpg' size='mini' id = { "Col" } /><br/><p id = { "Col" } >Col</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Star</Table.Cell>
                            <Table.Cell id = { "Pentose" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Pentose.jpg' size='mini' id = { "Pentose" } /><br/><p id = { "Pentose" } >Pentose</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Ara" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Ara.jpg' size='mini' id = { "Ara" } /><br/><p id = { "Ara" } >Ara</p></Table.Cell>
                            <Table.Cell id = { "Lyx" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Lyx.jpg' size='mini' id = { "Lyx" } /><br/><p id = { "Lyx" } >Lyx</p></Table.Cell>
                            <Table.Cell id = { "Xyl" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Xyl.jpg' size='mini' id = { "Xyl" } /><br/><p id = { "Xyl" } >Xyl</p></Table.Cell>
                            <Table.Cell id = { "Rib" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Rib.jpg' size='mini' id = { "Rib" } /><br/><p id = { "Rib" } >Rib</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Diamond</Table.Cell>
                            <Table.Cell id = { "Deoxynonulosonate" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Deoxynonulosonate.jpg' size='mini' id = { "Deoxynonulosonate" } /><br/><p id = { "Deoxynonulosonate" } >Deoxynonulosonate</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Kdn" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Kdn.jpg' size='mini' id = { "Kdn" } /><br/><p id = { "Kdn" } >Kdn</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Neu5Ac" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Neu5Ac.jpg' size='mini' id = { "Neu5Ac" } /><br/><p id = { "Neu5Ac" } >Neu5Ac</p></Table.Cell>
                            <Table.Cell id = { "Neu5Gc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Neu5Gc.jpg' size='mini' id = { "Neu5Gc" } /><br/><p id = { "Neu5Gc" } >Neu5Gc</p></Table.Cell>
                            <Table.Cell id = { "Neu" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Neu.jpg' size='mini' id = { "Neu" } /><br/><p id = { "Neu" } >Neu</p></Table.Cell>
                            <Table.Cell id = { "Sia" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Sia.jpg' size='mini' id = { "Sia" } /><br/><p id = { "Sia" } >Sia</p></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Flat Diamond</Table.Cell>
                            <Table.Cell id = { "Di_deoxynonulosonate" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Di-deoxynonulosonate.jpg' size='mini' id = { "Di_deoxynonulosonate" } /><br/><p id = { "Di_deoxynonulosonate" } >Di-deoxynonulosonate</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Pse" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Pse.jpg' size='mini' id = { "Pse" } /><br/><p id = { "Pse" } >Pse</p></Table.Cell>
                            <Table.Cell id = { "Leg" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Leg.jpg' size='mini' id = { "Leg" } /><br/><p id = { "Leg" } >Leg</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "Aci" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Aci.jpg' size='mini' id = { "Aci" } /><br/><p id = { "Aci" } >Aci</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell id = { "e4Leg" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/4eLeg.jpg' size='mini' id = { "e4Leg" } /><br/><p id = { "e4Leg" } >4eLeg</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Flat Hexagon</Table.Cell>
                            <Table.Cell id = { "Unknown" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Unknown.jpg' size='mini' id = { "Unknown" } /><br/><p id = { "Unknown" } >Unknown</p></Table.Cell>
                            <Table.Cell id = { "Bac" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Bac.jpg' size='mini' id = { "Bac" } /><br/><p id = { "Bac" } >Bac</p></Table.Cell>
                            <Table.Cell id = { "LDmanHep" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/LDmanHep.jpg' size='mini' id = { "LDmanHep" } /><br/><p id = { "LDmanHep" } >LDmanHep</p></Table.Cell>
                            <Table.Cell id = { "Kdo" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Kdo.jpg' size='mini' id = { "Kdo" } /><br/><p id = { "Kdo" } >Kdo</p></Table.Cell>
                            <Table.Cell id = { "Dha" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Dha.jpg' size='mini' id = { "Dha" } /><br/><p id = { "Dha" } >Dha</p></Table.Cell>
                            <Table.Cell id = { "DDmanHep" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/DDmanHep.jpg' size='mini' id = { "DDmanHep" } /><br/><p id = { "DDmanHep" } >DDmanHep</p></Table.Cell>
                            <Table.Cell id = { "MurNAc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/MurNAc.jpg' size='mini' id = { "MurNAc" } /><br/><p id = { "MurNAc" } >MurNAc</p></Table.Cell>
                            <Table.Cell id = { "MurNGc" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/MurNGc.jpg' size='mini' id = { "MurNGc" } /><br/><p id = { "MurNGc" } >MurNGc</p></Table.Cell>
                            <Table.Cell id = { "Mur" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Mur.jpg' size='mini' id = { "Mur" } /><br/><p id = { "Mur" } >Mur</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Pentagon</Table.Cell>
                            <Table.Cell id = { "Assigned" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Assigned.jpg' size='mini' id = { "Assigned" } /><br/><p id = { "Assigned" } >Assigned</p>
                            </Table.Cell>
                            <Table.Cell id = { "Api" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Api.jpg' size='mini' id = { "Api" } /><br/><p id = { "Api" } >Api</p></Table.Cell>
                            <Table.Cell id = { "Fru" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Fru.jpg' size='mini' id = { "Fru" } /><br/><p id = { "Fru" } >Fru</p></Table.Cell>
                            <Table.Cell id = { "Tag" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Tag.jpg' size='mini' id = { "Tag" } /><br/><p id = { "Tag" } >Tag</p></Table.Cell>
                            <Table.Cell id = { "Sor" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Sor.jpg' size='mini' id = { "Sor" } /><br/><p id = { "Sor" } >Sor</p></Table.Cell>
                            <Table.Cell id = { "Psi" } onClick = { (event) => this.onClickEvent(event) } ><Image src='../image/symbol/Psi.jpg' size='mini' id = { "Psi" } /><br/><p id = { "Psi" } >Psi</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}