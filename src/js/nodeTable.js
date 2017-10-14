"use strict";

import React from "react";
import { Table, Image } from "semantic-ui-react";

export class nodeTable {
    constructor() {

    }

    getContents(){
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
                            <Table.Cell><Image src='../image/symbol/Hexose.jpg' size='mini'/><br/><p>Hexose</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Glc.jpg' size='mini'/><br/><p>Glc</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Man.jpg' size='mini'/><br/><p>Man</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Gal.jpg' size='mini'/><br/><p>Gal</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Gul.jpg' size='mini'/><br/><p>Gul</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Alt.jpg' size='mini'/><br/><p>Alt</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/All.jpg' size='mini'/><br/><p>All</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Tal.jpg' size='mini'/><br/><p>Tal</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Ido.jpg' size='mini'/><br/><p>Ido</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Square</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/HexNAc.jpg' size='mini'/><br/><p>HexNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GlcNAc.jpg' size='mini'/><br/><p>GlcNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/ManNAc.jpg' size='mini'/><br/><p>ManNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GalNAc.jpg' size='mini'/><br/><p>GalNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GulNAc.jpg' size='mini'/><br/><p>GulNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/AltNAc.jpg' size='mini'/><br/><p>AltNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/AllNAc.jpg' size='mini'/><br/><p>AllNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/TalNAc.jpg' size='mini'/><br/><p>TalNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/IdoNAc.jpg' size='mini'/><br/><p>IdoNAc</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Crossed Square</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Hexosamine.jpg' size='mini'/><br/><p>Hexosamine</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GlcN.jpg' size='mini'/><br/><p>GlcN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/MAnN.jpg' size='mini'/><br/><p>ManN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GalN.jpg' size='mini'/><br/><p>GalN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GulN.jpg' size='mini'/><br/><p>GulN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/AltN.jpg' size='mini'/><br/><p>AltN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/AllN.jpg' size='mini'/><br/><p>AllN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/TalN.jpg' size='mini'/><br/><p>TalN</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/IdoN.jpg' size='mini'/><br/><p>IdoN</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Divided Diamond</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Hexuronate.jpg' size='mini'/><br/><p>Hexuronate</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GlcA.jpg' size='mini'/><br/><p>GlcA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/ManA.jpg' size='mini'/><br/><p>ManA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GalA.jpg' size='mini'/><br/><p>GalA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/GulA.jpg' size='mini'/><br/><p>GulA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/AltA.jpg' size='mini'/><br/><p>AltA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/AllA.jpg' size='mini'/><br/><p>AllA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/TalA.jpg' size='mini'/><br/><p>TalA</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/IdoA.jpg' size='mini'/><br/><p>IdoA</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Triangle</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Deoxyhexose.jpg' size='mini'/><br/><p>
                                Deoxyhexose</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Qui.jpg' size='mini'/><br/><p>Qui</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Rha.jpg' size='mini'/><br/><p>Rha</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/6dGul.jpg' size='mini'/><br/><p>6dGul</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/6dAlt.jpg' size='mini'/><br/><p>6dAlt</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/6dTal.jpg' size='mini'/><br/><p>6dTal</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Fuc.jpg' size='mini'/><br/><p>Fuc</p></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Divided Triangle</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/DeoxyhexNAc.jpg' size='mini'/><br/><p>
                                DeoxyhexNAc</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/QuiNAc.jpg' size='mini'/><br/><p>QuiNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/RhaNAc.jpg' size='mini'/><br/><p>RhaNAc</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/6dAltNAc.jpg' size='mini'/><br/><p>6dAltNAc</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/6dTalNAc.jpg' size='mini'/><br/><p>6dTalNAc</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/FucNAc.jpg' size='mini'/><br/><p>FucNAc</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Flat Rectangle</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Di-deoxyhexose.jpg' size='mini'/><br/><p>
                                Di-deoxyhexose</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Oli.jpg' size='mini'/><br/><p>Oli</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Tyv.jpg' size='mini'/><br/><p>Tyv</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Abe.jpg' size='mini'/><br/><p>Abe</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Par.jpg' size='mini'/><br/><p>Par</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Dig.jpg' size='mini'/><br/><p>Dig</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Col.jpg' size='mini'/><br/><p>Col</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Star</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Pentose.jpg' size='mini'/><br/><p>Pentose</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Ara.jpg' size='mini'/><br/><p>Ara</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Lyx.jpg' size='mini'/><br/><p>Lyx</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Xyl.jpg' size='mini'/><br/><p>Xyl</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Rib.jpg' size='mini'/><br/><p>Rib</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Filled Diamond</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Deoxynonulosonate.jpg' size='mini'/><br/><p>
                                Deoxynonulosonate</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Kdn.jpg' size='mini'/><br/><p>Kdn</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Neu5Ac.jpg' size='mini'/><br/><p>Neu5Ac</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Neu5Gc.jpg' size='mini'/><br/><p>Neu5Gc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Neu.jpg' size='mini'/><br/><p>Neu</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Sia.jpg' size='mini'/><br/><p>Sia</p></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Flat Diamond</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Di-deoxynonulosonate.jpg' size='mini'/><br/><p>
                                Di-deoxynonulosonate</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Pse.jpg' size='mini'/><br/><p>Pse</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Leg.jpg' size='mini'/><br/><p>Leg</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Aci.jpg' size='mini'/><br/><p>Aci</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/4eLeg.jpg' size='mini'/><br/><p>4eLeg</p>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Flat Hexagon</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Unknown.jpg' size='mini'/><br/><p>Unknown</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Bac.jpg' size='mini'/><br/><p>Bac</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/LDmanHep.jpg' size='mini'/><br/><p>LDmanHep</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Kdo.jpg' size='mini'/><br/><p>Kdo</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Dha.jpg' size='mini'/><br/><p>Dha</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/DDmanHep.jpg' size='mini'/><br/><p>DDmanHep</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/MurNAc.jpg' size='mini'/><br/><p>MurNAc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/MurNGc.jpg' size='mini'/><br/><p>MurNGc</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Mur.jpg' size='mini'/><br/><p>Mur</p></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Pentagon</Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Assigned.jpg' size='mini'/><br/><p>Assigned</p>
                            </Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Api.jpg' size='mini'/><br/><p>Api</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Fru.jpg' size='mini'/><br/><p>Fru</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Tag.jpg' size='mini'/><br/><p>Tag</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Sor.jpg' size='mini'/><br/><p>Sor</p></Table.Cell>
                            <Table.Cell><Image src='../image/symbol/Psi.jpg' size='mini'/><br/><p>Psi</p></Table.Cell>
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