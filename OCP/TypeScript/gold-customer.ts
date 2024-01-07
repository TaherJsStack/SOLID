import { Customer } from "./customer";

export class GoldCustomer implements Customer{
    giveDiscount(): number {
        return 30
    }
    addLoyaltyPoints(amount: number): number {
        return amount * 3
    }
}