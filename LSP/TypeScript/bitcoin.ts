import { PaymentProcessor } from "./payment-processor";

export class Bitcoin extends PaymentProcessor{
    processorPayment(amount: number): void {
        console.log(`Processoring Bitcoin Card Amount $${amount}`)
    }

}