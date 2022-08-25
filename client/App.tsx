import React from "react";
import Button from "./components/Button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Nav2 } from "./components/Navbar";

export function App() {
  return (
    <div>
      <Nav2></Nav2>
      <h1>TEST.</h1>
      <Button icon={faHeart} onClickFunc={() => console.log("Button clicked!")}/>
    </div>
  );
}
