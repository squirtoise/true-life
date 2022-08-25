import React from "react";
import Button from "./components/Button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function App() {
  return (
    <div>
      <h1>TEST.</h1>
      <Button icon={faHeart} onClickFunc={() => console.log("Button clicked!")}/>
    </div>
  );
}
