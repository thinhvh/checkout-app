import { Rule } from "../models/pricing-rule.model";

export const calculatePrice = (item: Rule): number => {
  return (
    Math.ceil(((item.amount || 0) / item.buyAmount) * item.payAmount) *
    item.pricePerUnit
  );
};
