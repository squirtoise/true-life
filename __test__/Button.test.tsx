/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";

 import Button from '../client/components/Button';
 import { faHeart } from "@fortawesome/free-solid-svg-icons";

 describe("Button", () => {
  test("Button component is rendered", () => {
    render(<Button icon={faHeart} onClickFunc={() => console.log('test')}/>);

    screen.debug();

  });
 });