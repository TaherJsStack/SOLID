
import { MachineFax } from "./interfaces/fax";
import { MachinePrint } from "./interfaces/print";
import { MachineScan } from "./interfaces/scan";

export class MultiFunctionPrinter implements MachinePrint, MachineScan, MachineFax {
    print(document: string): void {
        console.log("print.");
    }
    scan(document: string): void {
        console.log("scan.");
    }
    fax(document: string): void {
        console.log("fax.");
    }
}