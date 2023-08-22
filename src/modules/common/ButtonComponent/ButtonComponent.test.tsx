import * as React from "react";
import { shallow } from "enzyme";
import ButtonComponent from "./ButtonComponent";

describe("ButtonComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ButtonComponent title={""} variant={""} onChangeHandler={function (event: React.MouseEvent<Element, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(wrapper).toMatchSnapshot();
  });
});
