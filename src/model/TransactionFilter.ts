import {Category} from "./Category";
import {Currency} from "./Currency";

export interface TransactionsFilter {
    category?: Category;
    currency?: Currency;
    paidFrom?: string;
    paidTo?: string;
    sumFrom?: number;
    sumTo?: number;
    summary?: string;
}


