import { PaymentProcessor } from "./payment-processor";

export class CreditCard extends PaymentProcessor {
    processorPayment(amount: number): void {
        console.log(`Processoring Credit Card Amount $${amount}`)
    }
}