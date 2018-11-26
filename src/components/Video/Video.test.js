import React from "react";
import { shallow } from "enzyme";
import Video from "./Video";

it("expect to render Video component", () => {
  expect(shallow(<Video />)).toMatchSnapshot();
});
