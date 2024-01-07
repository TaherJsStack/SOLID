import { Customer } from "./customer";

export class PremiumCustomer implements Customer{
    giveDiscount(): number {
        return 20
    }
    addLoyaltyPoints(amount: number): number {
        return amount * 2
    }
}