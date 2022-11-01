import { Rule } from "../models/pricing-rule.model";

export const transformRule = (rules: Rule[], previousRules: Rule[]): Rule[] => {
  const ruleMapping = previousRules.reduce(
    (previousValue: { [key: string]: Rule }, currentValue) => {
      previousValue[currentValue.itemType] = currentValue;

      return previousValue;
    },
    {}
  );

  return rules.map(
    (rule): Rule => ({
      ...rule,
      amount: ruleMapping[rule.itemType]?.amount || 0,
    })
  );
};
