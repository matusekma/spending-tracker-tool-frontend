import {
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import {DateTimePicker} from "@mui/x-date-pickers";
import React, {Dispatch, SetStateAction, useState} from "react";
import {Moment} from "moment";
import {CATEGORIES, Category} from "../model/Category";
import {CURRENCIES, Currency} from "../model/Currency";

interface Props {
    category: Category | '',
    currency: Currency | '',
    sumFrom: number | '',
    sumTo: number | '',
    summary: string,
    setCategory: Dispatch<SetStateAction<Category | ''>>;
    setCurrency: Dispatch<SetStateAction<Currency | ''>>;
    setFromDate: Dispatch<SetStateAction<Moment | null>>;
    setToDate: Dispatch<SetStateAction<Moment | null>>;
    setSumFrom: Dispatch<SetStateAction<number | ''>>;
    setSumTo: Dispatch<SetStateAction<number | ''>>;
    setSummary: Dispatch<SetStateAction<string>>;
}

function TransactionFilter({
                               category,
                               currency,
                               sumFrom,
                               sumTo,
                               setCategory,
                               setCurrency,
                               setFromDate,
                               setToDate,
                               setSumFrom,
                               setSumTo,
                               summary,
                               setSummary
                           }: Props) {

    const [fromDateState, setFromDateState] = useState<Moment | null>(null);
    const [toDateState, setToDateState] = useState<Moment | null>(null);

    return (
        <Container>
            <Stack
                direction={{sm: 'column', md: 'row'}}
                justifyContent={{xs: 'center', sm: 'start'}}
                spacing={{xs: 1, sm: 2, md: 4}}
            >
                <FormControl sx={{minWidth: 231}}>
                    <InputLabel id="category-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="category-simple-select-label"
                        id="category-simple-select"
                        defaultValue={''}
                        value={category}
                        onChange={e => setCategory(e.target.value as Category)}
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {CATEGORIES.map(c =>
                            <MenuItem key={c} value={c}>{c}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: 231}}>
                    <InputLabel id="currency-simple-select-label">Currency</InputLabel>
                    <Select
                        labelId="currency-simple-select-label"
                        id="currency-simple-select"
                        defaultValue={''}
                        value={currency}
                        onChange={e => setCurrency(e.target.value as Currency)}
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {CURRENCIES.map(c =>
                            <MenuItem key={c} value={c}>{c}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="From"
                    value={fromDateState}
                    onChange={(newValue) => newValue && setFromDateState(newValue)}
                    onAccept={(newValue) => newValue && setFromDate(newValue)}
                />
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="To"
                    value={toDateState}
                    onChange={(newValue) => newValue && setToDateState(newValue!)}
                    onAccept={(newValue) => newValue && setToDate(newValue!)}
                />
            </Stack>
            <Stack
                sx={{mt: 2}}
                direction={{sm: 'column', md: 'row'}}
                justifyContent={{xs: 'center', sm: 'start'}}
                spacing={{xs: 1, sm: 2, md: 4}}
            >
                <FormControl sx={{minWidth: 231}}>
                    <TextField
                        id="sumFrom"
                        label="Sum from"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            min: 0,
                            max: 10_000_000
                        }}
                        value={sumFrom}
                        onChange={e => setSumFrom(Number(e.target.value))}
                    />
                </FormControl>
                <FormControl sx={{minWidth: 231}}>
                    <TextField
                        id="sumTo"
                        label="Sum to"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            min: 0,
                            max: 10_000_000
                        }}
                        value={sumTo}
                        onChange={e => setSumTo(Number(e.target.value))}
                    />
                </FormControl>
                <FormControl sx={{minWidth: 231}}>
                    <TextField
                        id="summary"
                        label="Summary"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={summary}
                        onChange={e => setSummary(e.target.value)}
                    />
                </FormControl>
            </Stack>
        </Container>
    )
}

export default TransactionFilter
