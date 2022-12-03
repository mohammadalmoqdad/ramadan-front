import React from "react";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";
import { BodyContent } from "./AppLayout.styles";
export default function AppLayout(props) {
  return (
    <>
      <Navbar />
      <BodyContent className="body">{props.children}</BodyContent>
      {/* <Sidebar /> */}
    </>
  );
}
