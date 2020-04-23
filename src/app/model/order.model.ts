import { LocationInterface } from './account.model';

export interface OrderItemInterface {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  combinationIdx?: number;
  combinationDescription?: string;
  combinationDescriptionEN?: string;
}

export interface OrderInterface {
  _id: string;
  address: string;
  clientId: string;
  clientName: string;
  clientPhoneNumber: string;
  code: string;
  created: string;
  deliveryCost?: number;
  deliveryDiscount?: number;
  groupDiscount?: number;
  overRangeCharge: number;
  tax: number;
  tips: number;
  total: number;
  items: Array<OrderItemInterface>;
  location: LocationInterface;
  note?: string;
  paymentStatus: number;
  status: number;
}