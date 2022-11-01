import { ItemType } from "../models/item-type.enum";
import { Rule } from "../models/pricing-rule.model";
import { calculatePrice } from "./calculate-price";
import { transformRule } from "./transform-rule";

describe("Test util functions", () => {
  describe("should return right value when call calculatePrice", () => {
    let rule: Rule;

    beforeEach(() => {
      rule = {
        id: 1,
        pricePerUnit: 10,
        itemType: ItemType.Small,
        payAmount: 2,
        buyAmount: 3,
      };
    });

    it("should return right value when has not amount", () => {
      const result = calculatePrice(rule);

      expect(result).toBe(0);
    });

    it("should return right value without discount when has amount", () => {
      rule.amount = 2;
      const result = calculatePrice(rule);

      expect(result).toBe(20);
    });

    it("should return right value with discount when has amount", () => {
      rule.amount = 3;
      const result = calculatePrice(rule);

      expect(result).toBe(20);
    });
  });

  describe("should return right value when call transformRule", () => {
    it("should return rule with amount = 0", () => {
      const rule: Rule = {
        id: 1,
        pricePerUnit: 10,
        itemType: ItemType.Small,
        payAmount: 2,
        buyAmount: 3,
      };

      const result = transformRule([rule], []);

      expect(result).toEqual([{ ...rule, amount: 0 }]);
    });

    it("should return rule with amount is previous amount", () => {
      const rule: Rule = {
        id: 1,
        pricePerUnit: 10,
        itemType: ItemType.Small,
        payAmount: 2,
        buyAmount: 3,
      };

      const previousRule: Rule = {
        ...rule,
        amount: 5,
      };

      const result = transformRule([rule], [previousRule]);

      expect(result).toEqual([{ ...rule, amount: previousRule.amount }]);
    });
  });
});

export {};
