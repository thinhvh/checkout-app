import React, { useCallback, useEffect, useState } from "react";
import CustomerTest from "../../components/CustomerTest/CustomerTest";
import FoodOrder from "../../components/FoodOrder/FoodOrder";
import Loading from "../../components/Loading/Loading";
import { API_URL } from "../../env";
import { MEMBERS } from "../../shared/constants/member.constant";
import { CustomerInfo } from "../../shared/models/customer-info.model";
import { PricingRule } from "../../shared/models/pricing-rule.model";
import "./Checkout.css";

const Checkout: React.FC = () => {
  const [customer, setCustomer] = useState<CustomerInfo>(MEMBERS[0]);
  const [pricingRule, setPricingRule] = useState<PricingRule>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPricingRule = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}/pricing-rule/${customer.type}${
          customer.id ? `/${customer.id}` : ""
        }`
      );
      const data = await response.json();

      setPricingRule(data);
      setLoading(false);
    } catch {
      console.error("something error when fetch pricing rule");
    }
  }, [customer.id, customer.type, setPricingRule, setLoading]);

  useEffect(() => {
    fetchPricingRule();
  }, [fetchPricingRule]);

  const changeCustomer = (id: string) => {
    const member = MEMBERS.find((mem) => mem.id === +id);

    setCustomer(member as CustomerInfo);
  };

  return (
    <div className={"checkout"}>
      <Loading isLoading={loading} />
      <div>
        <CustomerTest onChange={changeCustomer} value={customer.id} />
      </div>
      <div>
        <FoodOrder pricingRule={pricingRule} />
      </div>
    </div>
  );
};

export default Checkout;
