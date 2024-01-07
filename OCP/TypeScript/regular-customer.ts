import { Customer } from "./customer";

export class RegularCustomer implements Customer{
    giveDiscount(): number {
        return 10
    }
    addLoyaltyPoints(amount: number): number {
        return amount
    }
}