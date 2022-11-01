import { fireEvent, render } from "@testing-library/react";
import "react";
import { ItemType } from "../../shared/models/item-type.enum";
import { PricingRule, Rule } from "../../shared/models/pricing-rule.model";
import FoodOrder from "./FoodOrder";

describe("FoodOrder", () => {
  it("should calculate amount of item", async () => {
    const rules: Rule[] = [
      {
        id: 1,
        buyAmount: 1,
        payAmount: 1,
        itemType: ItemType.Small,
        pricePerUnit: 10,
      },
    ];
    const { getByTestId } = render(
      <FoodOrder pricingRule={{ rules } as PricingRule} />
    );
    const plusButton = getByTestId("food-order__plus-1");
    const minusButton = getByTestId("food-order__minus-1");
    const amount = getByTestId("food-order__number-place-1");

    fireEvent.click(plusButton);
    expect(amount.textContent).toBe("1");

    fireEvent.click(minusButton);
    expect(amount.textContent).toBe("0");
  });
});
