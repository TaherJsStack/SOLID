import { MachinePrint } from "./interfaces/print";
 
export class SimplePrinter implements MachinePrint {
    print(document: string): void {
        console.log("print.");
    }
}