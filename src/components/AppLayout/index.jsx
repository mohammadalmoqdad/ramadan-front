import React from "react";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";
import {BodyContent} from "./AppLayout.styles";
export default function AppLayout(props) {

    return (

        <>
            <Navbar/>
            <BodyContent color={props.color} className="body">
                {props.children}
            </BodyContent>
            <Sidebar/>
        </>

    )
}