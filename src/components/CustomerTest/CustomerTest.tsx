import React, { SyntheticEvent } from "react";
import { MEMBERS } from "../../shared/constants/member.constant";

interface CustomerTestProps {
  value: number;
  onChange: Function;
}

const CustomerTest: React.FC<Partial<CustomerTestProps>> = ({
  value,
  onChange = () => {},
}) => {
  const changeCustomer = (event: SyntheticEvent<HTMLSelectElement>) => {
    const id: string = (event.target as HTMLSelectElement).value;

    onChange(id);
  };

  return (
    <>
      <h5>Test Customer</h5>
      <select
        onChange={changeCustomer}
        value={value}
        data-testid="customer-test-select"
      >
        {MEMBERS.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomerTest;
