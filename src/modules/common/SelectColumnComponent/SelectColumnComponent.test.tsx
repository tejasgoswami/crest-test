import * as React from "react";
import { shallow } from "enzyme";
import SelectColumnComponent from "./SelectColumnComponent";

describe("SelectColumnComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SelectColumnComponent handleChangeColumns={undefined} noOfColumns={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
