import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import './index.css'
import ResponsiveAppBar from "./components/AppBar";
import {Alert, Snackbar} from "@mui/material";
import SnackbarContext from './contexts/SnackbarContext';
import {QueryClient, QueryClientProvider} from "react-query";
import SnackbarProvider from './contexts/SnackbarProvider';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import Home from "./pages/Home";

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <SnackbarProvider>
                    <BrowserRouter>
                        <ResponsiveAppBar/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                        </Routes>
                    </BrowserRouter>
                    <SnackbarContext.Consumer>
                        {({setSnackbarState, snackbarState: {isOpen, message}}) =>
                            <Snackbar
                                open={isOpen}
                                autoHideDuration={3000}
                                onClose={() => setSnackbarState({isOpen: false, message: ""})}
                                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                            >
                                <Alert severity="error" variant="filled" sx={{width: '100%'}}>
                                    {message}
                                </Alert>
                            </Snackbar>
                        }
                    </SnackbarContext.Consumer>
                </SnackbarProvider>
            </LocalizationProvider>
        </QueryClientProvider>

    </React.StrictMode>,
)
