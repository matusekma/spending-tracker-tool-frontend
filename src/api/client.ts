import {Configuration, TransactionControllerApi} from '../generated-client';

const configuration = new Configuration({
    basePath: `${import.meta.env.VITE_REACT_APP_API_URL}`,
    baseOptions: {timeout: 10_000, /*withCredentials: true*/}
});

export const TRANSACTIONS_API = new TransactionControllerApi(configuration);
