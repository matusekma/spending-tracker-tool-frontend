import React, {useState} from 'react';
import './Home.css'
import {
    Box,
    Container,
} from '@mui/material';
import TransactionGrid from "../components/TransactionGrid";
import TransactionFilter from "../components/TransactionFilter";
import {Category} from "../model/Category";
import {Currency} from "../model/Currency";
import {Moment} from "moment";


function Home() {
    const [category, setCategory] = useState<Category | ''>('');
    const [currency, setCurrency] = useState<Currency | ''>('');
    const [fromDate, setFromDate] = useState<Moment | null>(null);
    const [toDate, setToDate] = useState<Moment | null>(null);
    const [sumFrom, setSumFrom] = useState<number | ''>('');
    const [sumTo, setSumTo] = useState<number | ''>('');
    const [summary, setSummary] = useState<string>('');

    return (
        <Container className="App" sx={{mt: 4}}>
            <TransactionFilter {...{
                category,
                setCategory,
                currency,
                setCurrency,
                fromDate,
                setFromDate,
                toDate,
                setToDate,
                sumFrom,
                setSumFrom,
                sumTo,
                setSumTo,
                summary,
                setSummary
            }} />
            <Box height="70vh" sx={{mt: 2}}>
                <TransactionGrid
                    transactionsFilter={{
                        category: category || undefined,
                        currency: currency || undefined,
                        paidFrom: fromDate?.toISOString(),
                        paidTo: toDate?.toISOString(),
                        sumFrom: sumFrom || undefined,
                        sumTo: sumTo || undefined,
                        summary: summary ?? undefined
                    }}/>
            </Box>
        </Container>
    )
}

export default Home
