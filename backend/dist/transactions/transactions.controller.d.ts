import { TransactionsService } from "./transactions.service";
import { Transaction } from "./transaction.entity";
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    createTransaction(transaction: Transaction): Promise<Transaction>;
}
