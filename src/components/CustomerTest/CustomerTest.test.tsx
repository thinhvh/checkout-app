import { fireEvent, render } from "@testing-library/react";
import "react";
import { MEMBERS } from "../../shared/constants/member.constant";
import CustomerTest from "./CustomerTest";

describe("CustomerTest", () => {
  it("should render select component with value", () => {
    const value = 2;
    const { getByTestId } = render(<CustomerTest value={2} />);
    const elem = getByTestId("customer-test-select");

    expect((elem as HTMLSelectElement).value).toBe(value.toString());
  });

  it("should listen onChange select component when change", () => {
    const testValue = MEMBERS[0].id?.toString();
    let recivedValue;
    const onChange = (value: string) => {
      recivedValue = value;
    };
    const { getByTestId } = render(<CustomerTest onChange={onChange} />);

    fireEvent.change(getByTestId("customer-test-select"), {
      target: { value: MEMBERS[0].id },
    });

    expect(recivedValue).toBe(testValue);
  });
});
