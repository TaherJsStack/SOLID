import { PaymentProcessor } from "./payment-processor";

export class DebitCard extends PaymentProcessor {
    processorPayment(amount: number): void {
        console.log(`Processoring Debit Card Amount $${amount}`)
    }
}