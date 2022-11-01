import { CustomerInfo } from "../models/customer-info.model";
import { CustomerType } from "../models/customer-type.enum";

export const MEMBERS: CustomerInfo[] = [
  {
    id: 0,
    name: "Default",
    type: CustomerType.Normal,
  },
  {
    id: 1,
    type: CustomerType.Member,
    name: "Microsoft",
  },
  {
    id: 2,
    type: CustomerType.Member,
    name: "Amazon",
  },
  {
    id: 3,
    type: CustomerType.Member,
    name: "Facebook",
  },
];
