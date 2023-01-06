export interface transaction {
    id: number;
    text: string;
    amount: number;
}

export interface transactions {
    transactions: transaction[];
}