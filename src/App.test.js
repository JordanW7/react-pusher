import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("expect to render App component", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
