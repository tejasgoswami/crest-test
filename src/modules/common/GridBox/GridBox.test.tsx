import * as React from "react";
import { shallow } from "enzyme";
import GridBox from "./GridBox";

describe("GridBox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GridBox noOfColumns={0} numberOfCards={0} onChangeHandler={function (event: React.MouseEvent<Element, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(wrapper).toMatchSnapshot();
  });
});
