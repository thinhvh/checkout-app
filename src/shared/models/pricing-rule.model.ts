import { CustomerType } from "./customer-type.enum";
import { ItemType } from "./item-type.enum";

export interface Rule {
  id: number;
  itemType: ItemType;
  pricePerUnit: number;
  buyAmount: number;
  payAmount: number;
  amount?: number;
}

export interface PricingRule {
  id: number;
  customerType: CustomerType;
  rules: Rule[];
  customerId?: number;
}
