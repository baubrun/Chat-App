import React from "react";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import JoinChat from "./JoinChat";



const simulateChangeOnInput = (wrapper, inputSelector, givenValue) => {
  let input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: givenValue },
  });
  return wrapper.find(inputSelector);
};


describe("Join Chat", () => {

  it("inputs should get values submitted", () => {
    const wrapper = shallow(<JoinChat />);
    const nameInput = simulateChangeOnInput(wrapper, "input#name-input", "a");
    const chatRoomInput = simulateChangeOnInput(
      wrapper,
      "input#chatRoom-input",
      "asdf"
    );
    expect(nameInput.props().value).toEqual("a");
    expect(chatRoomInput.props().value).toEqual("asdf");
  });

});


describe('JoinChat Component', () => {
    const wrapper = shallow(<JoinChat />)
    expect(toJSON(wrapper)).toMatchSnapshot();
});