import React from "react";
import { shallow } from "enzyme";
import Comments from "./Comments";

it("expect to render Comments component", () => {
  const wrapper = shallow(<Comments />);
  expect(wrapper).toMatchSnapshot();
});

it("Correctly submits new comment", () => {
  const wrapper = shallow(<Comments />);
  wrapper.find('[id="addcommentsubmit"]').simulate("click");
  expect(wrapper.state()).toEqual({
    comments: [],
    usercomment: ""
  });
});

it("Correctly updates comment state", () => {
  const wrapper = shallow(<Comments />);
  wrapper
    .find('[id="addcommentfield"]')
    .simulate("change", { target: { value: "Hello" } });
  expect(wrapper.state()).toEqual({
    comments: [],
    usercomment: "Hello"
  });
});
