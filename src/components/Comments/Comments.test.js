import React from "react";
import { shallow } from "enzyme";
import Comments from "./Comments";

it("expect to render Comments component", () => {
  const wrapper = shallow(<Comments />);
  expect(wrapper).toMatchSnapshot();
});

it("Correctly does not submit new comment if usercomment blank", () => {
  const wrapper = shallow(<Comments />);
  wrapper.find('[id="addcommentsubmit"]').simulate("click");
  expect(wrapper.state()).toEqual({
    comments: [],
    usercomment: ""
  });
});

it("Correctly updates usercomment state", () => {
  const wrapper = shallow(<Comments />);
  wrapper
    .find('[id="addcommentfield"]')
    .simulate("change", { target: { value: "Hello" } });
  expect(wrapper.state()).toEqual({
    comments: [],
    usercomment: "Hello"
  });
});
