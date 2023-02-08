import * as React from 'react';
import {useCallback, useContext, useEffect, useState} from "react";
import {
    DataGrid,
    GridColDef,
    GridRowModel,
    GridSortModel,
    GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector,
    GridToolbarExport,
} from "@mui/x-data-grid";
import {getTransactionsApiCall} from "../api/apiCalls";
import {
    ErrorResponse,
    TransactionResponse,
} from "../generated-client";
import {useQuery} from "react-query";
import SnackbarContext from "../contexts/SnackbarContext";
import {AxiosError} from "axios";

import {Category} from "../model/Category";
import {Currency} from "../model/Currency";
import {TransactionsFilter} from "../model/TransactionFilter";


const columns: GridColDef[] = [
    {field: 'summary', headerName: 'Summary', flex: 1},
    {field: 'category', headerName: 'Category', flex: 0.3},
    {field: 'sum', headerName: 'Sum', flex: 0.7},
    {field: 'currency', headerName: 'Currency', flex: 0.3},
    {field: 'paid', headerName: 'Time', flex: 1},
];

function mapTransactionToRow(transaction: TransactionResponse): GridRowModel {
    return {
        id: transaction.id,
        summary: transaction.summary,
        category: transaction.category,
        sum: transaction.sum,
        currency: transaction.currency,
        paid: new Date(parseInt(transaction.paid) * 1000).toLocaleString("en-US")
    }
}

interface Props {
    transactionsFilter: TransactionsFilter
}

function TransactionGrid({transactionsFilter}: Props) {
    const [rowCount, setRowCount] = useState(0)
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [sort, setSort] = useState([""])
    const {setSnackbarState} = useContext(SnackbarContext)

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
    } = useQuery(['transactions', page, pageSize, sort, transactionsFilter], async () => {
        const transactionsPage = await getTransactionsApiCall(transactionsFilter, page, pageSize, sort)
        setRowCount(transactionsPage.totalElements!)
        return transactionsPage
    }, {keepPreviousData: true, retry: false})

    const [rowCountState, setRowCountState] = useState(rowCount);
    useEffect(() => {
        setRowCountState((prevRowCountState) =>
            rowCount !== undefined ? rowCount : prevRowCountState,
        );
    }, [rowCount, setRowCountState]);

    React.useEffect(() => {
        if (isError) {
            setSnackbarState({
                isOpen: true,
                message: ((error as AxiosError).response?.data as ErrorResponse)?.message || "An error happened!"
            })
        } else {
            setSnackbarState({isOpen: false, message: ""})
        }
    }, [isError, error])

    const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
        const sortStrings = sortModel.map(sortItem => `${sortItem.field},${sortItem.sort}`)
        setSort(sortStrings)
    }, []);


    const rows = data?.content?.map(d => mapTransactionToRow(d)) || []
    return (
        <div style={{display: 'flex', height: '100%'}}>
            <div style={{flexGrow: 1}}>
                <DataGrid
                    error={isError}
                    page={page}
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    pagination
                    paginationMode="server"
                    filterMode="server"
                    onFilterModelChange={() => {
                    }}
                    sortingMode="server"
                    onSortModelChange={handleSortModelChange}
                    rowCount={rowCountState}
                    rows={rows}
                    columns={columns}
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                    checkboxSelection
                    initialState={{
                        pagination: {
                            pageSize: 10,
                        },
                    }}
                    loading={isLoading || isFetching}
                />
            </div>
        </div>
    );
}

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton/>
            <GridToolbarDensitySelector/>
            <GridToolbarExport/>
        </GridToolbarContainer>
    )
}

export default TransactionGrid;
