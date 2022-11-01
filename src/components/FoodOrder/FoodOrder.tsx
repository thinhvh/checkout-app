import React, { useEffect, useMemo, useState } from "react";
import { PricingRule, Rule } from "../../shared/models/pricing-rule.model";
import { calculatePrice } from "../../shared/utils/calculate-price";
import { transformRule } from "../../shared/utils/transform-rule";
import "./FoodOrder.css";

interface FoodOrderProps {
  pricingRule?: PricingRule;
}

const FoodOrder: React.FC<FoodOrderProps> = ({ pricingRule }) => {
  const [rules, setRules] = useState<Rule[]>([]);

  useEffect(() => {
    // keep the amount of item when select another customer
    setRules((previousRules) =>
      transformRule(pricingRule?.rules || [], previousRules)
    );
  }, [pricingRule, setRules]);

  const onChangeAmount = (index: number, amount: number): void => {
    (rules[index].amount as number) += amount;

    setRules([...rules]);
  };

  const total = useMemo(() => {
    return rules.reduce((previousValue, currentValue) => {
      previousValue += calculatePrice(currentValue);
      return previousValue;
    }, 0);
  }, [rules]);

  return (
    <div className="food-order">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Retail Price</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((item, index) => (
            <tr key={item.id}>
              <td>{`${item.itemType} Pizza`}</td>
              <td>${item.pricePerUnit}</td>
              <td>
                <button
                  data-testid={`food-order__minus-${item.id}`}
                  disabled={(item.amount as number) <= 0}
                  className="food-order__minus"
                  onClick={() => onChangeAmount(index, -1)}
                >
                  -
                </button>
                <span
                  data-testid={`food-order__number-place-${item.id}`}
                  className="food-order__number-place"
                >
                  {item.amount}
                </span>
                <button
                  data-testid={`food-order__plus-${item.id}`}
                  className="food-order__plus"
                  onClick={() => onChangeAmount(index, 1)}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total: ${total}</div>
    </div>
  );
};

export default FoodOrder;
