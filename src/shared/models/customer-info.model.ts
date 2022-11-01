import { CustomerType } from "./customer-type.enum";

export interface CustomerInfo {
  type: CustomerType;
  name: string;
  id?: number;
}
