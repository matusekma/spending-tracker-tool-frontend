import {TRANSACTIONS_API} from "./client";
import {TransactionsFilter} from "../model/TransactionFilter";

export function getTransactionsApiCall(transactionsFilter: TransactionsFilter, page: number, pageSize: number, sort: string[]) {
    const {category, currency, paidFrom, paidTo, sumFrom, sumTo, summary} = transactionsFilter
    return TRANSACTIONS_API.getTransactions(page, pageSize, sort, category?.toUpperCase() as any, currency, paidFrom, paidTo, sumFrom, sumTo, summary).then(res => res.data)
}
