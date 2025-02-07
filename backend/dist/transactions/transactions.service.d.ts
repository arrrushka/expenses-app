import { Repository } from "typeorm";
import { Transaction } from "./transaction.entity";
export declare class TransactionsService {
    private transactionsRepository;
    constructor(transactionsRepository: Repository<Transaction>);
    create(transaction: Transaction): Promise<Transaction>;
}
