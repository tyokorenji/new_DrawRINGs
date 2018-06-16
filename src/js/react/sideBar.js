"use strict";

import React from "react";
import { Sidebar, Segment, Menu, Header } from "semantic-ui-react";
import { Canvas } from "./canvas";
import { FunctionContents } from "./functionContents";
import { SidebarContens } from "./sidebarContents";

export class SidebarLeftPush extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaValue: ""
        };
    }

    getContent(current_mode_type, functionConents) {
        return functionConents.getcontents(current_mode_type);
    }

    getSidebarContents(current_mode_type, sidebarContents) {
        return sidebarContents.getContents(current_mode_type);
    }

    render(){
        const functionContents = new FunctionContents();
        const sidebarContents = new SidebarContens(this.state.textareaValue);
        const content = this.getContent(this.props.mode_type, functionContents);
        const sidebarContent = this.getSidebarContents(this.props.mode_type, sidebarContents);

        const defCanvasDivStyle = {
            width: "100%",
            height: "500px",
            overflowY: "scroll",
            overflowX: "scroll"
        };
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as = { Menu } animation = "push"  width = "very wide" visible = { this.props.visible } icon = "labeled" vertical inverted style = {{background: "#ffffff"}}>
                        { sidebarContent }
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <div>
                                <Header>{ content }</Header>
                            </div>
                            <div style = { defCanvasDivStyle }>
                                <Canvas/>
                            </div>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}