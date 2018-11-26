import React from "react";
import { shallow } from "enzyme";
import CommentEntry from "./CommentEntry";

it("expect to render Comment Entry component", () => {
  expect(
    shallow(
      <CommentEntry key="1" name="You" img="" comment="Hello" time="123" />
    )
  ).toMatchSnapshot();
});
