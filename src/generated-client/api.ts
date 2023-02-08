/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateTransactionRequest
 */
export interface CreateTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    'category': CreateTransactionRequestCategoryEnum;
    /**
     * 
     * @type {number}
     * @memberof CreateTransactionRequest
     */
    'sum': number;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    'currency': CreateTransactionRequestCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    'paid': string;
}

export const CreateTransactionRequestCategoryEnum = {
    Housing: 'housing',
    Travel: 'travel',
    Food: 'food',
    Utilities: 'utilities',
    Insurance: 'insurance',
    Healthcare: 'healthcare',
    Financial: 'financial',
    Lifestyle: 'lifestyle',
    Entertainment: 'entertainment',
    Clothing: 'clothing',
    Miscellaneous: 'miscellaneous'
} as const;

export type CreateTransactionRequestCategoryEnum = typeof CreateTransactionRequestCategoryEnum[keyof typeof CreateTransactionRequestCategoryEnum];
export const CreateTransactionRequestCurrencyEnum = {
    Huf: 'HUF',
    Usd: 'USD',
    Eur: 'EUR'
} as const;

export type CreateTransactionRequestCurrencyEnum = typeof CreateTransactionRequestCurrencyEnum[keyof typeof CreateTransactionRequestCurrencyEnum];

/**
 * 
 * @export
 * @interface CreateTransactionResponse
 */
export interface CreateTransactionResponse {
    /**
     * 
     * @type {number}
     * @memberof CreateTransactionResponse
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionResponse
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionResponse
     */
    'category': string;
    /**
     * 
     * @type {number}
     * @memberof CreateTransactionResponse
     */
    'sum': number;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionResponse
     */
    'currency': CreateTransactionResponseCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionResponse
     */
    'paid': string;
}

export const CreateTransactionResponseCurrencyEnum = {
    Huf: 'HUF',
    Usd: 'USD',
    Eur: 'EUR'
} as const;

export type CreateTransactionResponseCurrencyEnum = typeof CreateTransactionResponseCurrencyEnum[keyof typeof CreateTransactionResponseCurrencyEnum];

/**
 * 
 * @export
 * @interface EditTransactionRequest
 */
export interface EditTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof EditTransactionRequest
     */
    'summary'?: string;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionRequest
     */
    'category'?: EditTransactionRequestCategoryEnum;
    /**
     * 
     * @type {number}
     * @memberof EditTransactionRequest
     */
    'sum'?: number;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionRequest
     */
    'currency'?: EditTransactionRequestCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionRequest
     */
    'paid'?: string;
}

export const EditTransactionRequestCategoryEnum = {
    Housing: 'housing',
    Travel: 'travel',
    Food: 'food',
    Utilities: 'utilities',
    Insurance: 'insurance',
    Healthcare: 'healthcare',
    Financial: 'financial',
    Lifestyle: 'lifestyle',
    Entertainment: 'entertainment',
    Clothing: 'clothing',
    Miscellaneous: 'miscellaneous'
} as const;

export type EditTransactionRequestCategoryEnum = typeof EditTransactionRequestCategoryEnum[keyof typeof EditTransactionRequestCategoryEnum];
export const EditTransactionRequestCurrencyEnum = {
    Huf: 'HUF',
    Usd: 'USD',
    Eur: 'EUR'
} as const;

export type EditTransactionRequestCurrencyEnum = typeof EditTransactionRequestCurrencyEnum[keyof typeof EditTransactionRequestCurrencyEnum];

/**
 * 
 * @export
 * @interface EditTransactionResponse
 */
export interface EditTransactionResponse {
    /**
     * 
     * @type {number}
     * @memberof EditTransactionResponse
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionResponse
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionResponse
     */
    'category': string;
    /**
     * 
     * @type {number}
     * @memberof EditTransactionResponse
     */
    'sum': number;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionResponse
     */
    'currency': EditTransactionResponseCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof EditTransactionResponse
     */
    'paid': string;
}

export const EditTransactionResponseCurrencyEnum = {
    Huf: 'HUF',
    Usd: 'USD',
    Eur: 'EUR'
} as const;

export type EditTransactionResponseCurrencyEnum = typeof EditTransactionResponseCurrencyEnum[keyof typeof EditTransactionResponseCurrencyEnum];

/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'httpStatus'?: ErrorResponseHttpStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'stackTrace'?: string;
    /**
     * 
     * @type {object}
     * @memberof ErrorResponse
     */
    'data'?: object;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    'status': number;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'timestamp': string;
}

export const ErrorResponseHttpStatusEnum = {
    _100Continue: '100 CONTINUE',
    _101SwitchingProtocols: '101 SWITCHING_PROTOCOLS',
    _102Processing: '102 PROCESSING',
    _103Checkpoint: '103 CHECKPOINT',
    _200Ok: '200 OK',
    _201Created: '201 CREATED',
    _202Accepted: '202 ACCEPTED',
    _203NonAuthoritativeInformation: '203 NON_AUTHORITATIVE_INFORMATION',
    _204NoContent: '204 NO_CONTENT',
    _205ResetContent: '205 RESET_CONTENT',
    _206PartialContent: '206 PARTIAL_CONTENT',
    _207MultiStatus: '207 MULTI_STATUS',
    _208AlreadyReported: '208 ALREADY_REPORTED',
    _226ImUsed: '226 IM_USED',
    _300MultipleChoices: '300 MULTIPLE_CHOICES',
    _301MovedPermanently: '301 MOVED_PERMANENTLY',
    _302Found: '302 FOUND',
    _302MovedTemporarily: '302 MOVED_TEMPORARILY',
    _303SeeOther: '303 SEE_OTHER',
    _304NotModified: '304 NOT_MODIFIED',
    _305UseProxy: '305 USE_PROXY',
    _307TemporaryRedirect: '307 TEMPORARY_REDIRECT',
    _308PermanentRedirect: '308 PERMANENT_REDIRECT',
    _400BadRequest: '400 BAD_REQUEST',
    _401Unauthorized: '401 UNAUTHORIZED',
    _402PaymentRequired: '402 PAYMENT_REQUIRED',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _405MethodNotAllowed: '405 METHOD_NOT_ALLOWED',
    _406NotAcceptable: '406 NOT_ACCEPTABLE',
    _407ProxyAuthenticationRequired: '407 PROXY_AUTHENTICATION_REQUIRED',
    _408RequestTimeout: '408 REQUEST_TIMEOUT',
    _409Conflict: '409 CONFLICT',
    _410Gone: '410 GONE',
    _411LengthRequired: '411 LENGTH_REQUIRED',
    _412PreconditionFailed: '412 PRECONDITION_FAILED',
    _413PayloadTooLarge: '413 PAYLOAD_TOO_LARGE',
    _413RequestEntityTooLarge: '413 REQUEST_ENTITY_TOO_LARGE',
    _414UriTooLong: '414 URI_TOO_LONG',
    _414RequestUriTooLong: '414 REQUEST_URI_TOO_LONG',
    _415UnsupportedMediaType: '415 UNSUPPORTED_MEDIA_TYPE',
    _416RequestedRangeNotSatisfiable: '416 REQUESTED_RANGE_NOT_SATISFIABLE',
    _417ExpectationFailed: '417 EXPECTATION_FAILED',
    _418IAmATeapot: '418 I_AM_A_TEAPOT',
    _419InsufficientSpaceOnResource: '419 INSUFFICIENT_SPACE_ON_RESOURCE',
    _420MethodFailure: '420 METHOD_FAILURE',
    _421DestinationLocked: '421 DESTINATION_LOCKED',
    _422UnprocessableEntity: '422 UNPROCESSABLE_ENTITY',
    _423Locked: '423 LOCKED',
    _424FailedDependency: '424 FAILED_DEPENDENCY',
    _425TooEarly: '425 TOO_EARLY',
    _426UpgradeRequired: '426 UPGRADE_REQUIRED',
    _428PreconditionRequired: '428 PRECONDITION_REQUIRED',
    _429TooManyRequests: '429 TOO_MANY_REQUESTS',
    _431RequestHeaderFieldsTooLarge: '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
    _451UnavailableForLegalReasons: '451 UNAVAILABLE_FOR_LEGAL_REASONS',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _501NotImplemented: '501 NOT_IMPLEMENTED',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE',
    _504GatewayTimeout: '504 GATEWAY_TIMEOUT',
    _505HttpVersionNotSupported: '505 HTTP_VERSION_NOT_SUPPORTED',
    _506VariantAlsoNegotiates: '506 VARIANT_ALSO_NEGOTIATES',
    _507InsufficientStorage: '507 INSUFFICIENT_STORAGE',
    _508LoopDetected: '508 LOOP_DETECTED',
    _509BandwidthLimitExceeded: '509 BANDWIDTH_LIMIT_EXCEEDED',
    _510NotExtended: '510 NOT_EXTENDED',
    _511NetworkAuthenticationRequired: '511 NETWORK_AUTHENTICATION_REQUIRED'
} as const;

export type ErrorResponseHttpStatusEnum = typeof ErrorResponseHttpStatusEnum[keyof typeof ErrorResponseHttpStatusEnum];

/**
 * 
 * @export
 * @interface PageTransactionResponse
 */
export interface PageTransactionResponse {
    /**
     * 
     * @type {number}
     * @memberof PageTransactionResponse
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageTransactionResponse
     */
    'totalElements'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageTransactionResponse
     */
    'first'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageTransactionResponse
     */
    'last'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageTransactionResponse
     */
    'size'?: number;
    /**
     * 
     * @type {Array<TransactionResponse>}
     * @memberof PageTransactionResponse
     */
    'content'?: Array<TransactionResponse>;
    /**
     * 
     * @type {number}
     * @memberof PageTransactionResponse
     */
    'number'?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageTransactionResponse
     */
    'sort'?: SortObject;
    /**
     * 
     * @type {number}
     * @memberof PageTransactionResponse
     */
    'numberOfElements'?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageTransactionResponse
     */
    'pageable'?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageTransactionResponse
     */
    'empty'?: boolean;
}
/**
 * 
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'offset'?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageableObject
     */
    'sort'?: SortObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    'paged'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    'unpaged'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'pageNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'pageSize'?: number;
}
/**
 * 
 * @export
 * @interface SortObject
 */
export interface SortObject {
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    'empty'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    'sorted'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    'unsorted'?: boolean;
}
/**
 * 
 * @export
 * @interface TransactionResponse
 */
export interface TransactionResponse {
    /**
     * 
     * @type {number}
     * @memberof TransactionResponse
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof TransactionResponse
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionResponse
     */
    'category': string;
    /**
     * 
     * @type {number}
     * @memberof TransactionResponse
     */
    'sum': number;
    /**
     * 
     * @type {string}
     * @memberof TransactionResponse
     */
    'currency': TransactionResponseCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionResponse
     */
    'paid': string;
}

export const TransactionResponseCurrencyEnum = {
    Huf: 'HUF',
    Usd: 'USD',
    Eur: 'EUR'
} as const;

export type TransactionResponseCurrencyEnum = typeof TransactionResponseCurrencyEnum[keyof typeof TransactionResponseCurrencyEnum];


/**
 * TransactionControllerApi - axios parameter creator
 * @export
 */
export const TransactionControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTransactionRequest} createTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTransaction: async (createTransactionRequest: CreateTransactionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTransactionRequest' is not null or undefined
            assertParamExists('createTransaction', 'createTransactionRequest', createTransactionRequest)
            const localVarPath = `/api/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTransactionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTransaction: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTransaction', 'id', id)
            const localVarPath = `/api/transactions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {EditTransactionRequest} editTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editTransaction: async (id: number, editTransactionRequest: EditTransactionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('editTransaction', 'id', id)
            // verify required parameter 'editTransactionRequest' is not null or undefined
            assertParamExists('editTransaction', 'editTransactionRequest', editTransactionRequest)
            const localVarPath = `/api/transactions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(editTransactionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTransaction', 'id', id)
            const localVarPath = `/api/transactions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous'} [category] 
         * @param {'HUF' | 'USD' | 'EUR'} [currency] 
         * @param {string} [paidFrom] 
         * @param {string} [paidTo] 
         * @param {number} [sumFrom] 
         * @param {number} [sumTo] 
         * @param {string} [summary] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactions: async (page?: number, size?: number, sort?: Array<string>, category?: 'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous', currency?: 'HUF' | 'USD' | 'EUR', paidFrom?: string, paidTo?: string, sumFrom?: number, sumTo?: number, summary?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (currency !== undefined) {
                localVarQueryParameter['currency'] = currency;
            }

            if (paidFrom !== undefined) {
                localVarQueryParameter['paidFrom'] = (paidFrom as any instanceof Date) ?
                    (paidFrom as any).toISOString() :
                    paidFrom;
            }

            if (paidTo !== undefined) {
                localVarQueryParameter['paidTo'] = (paidTo as any instanceof Date) ?
                    (paidTo as any).toISOString() :
                    paidTo;
            }

            if (sumFrom !== undefined) {
                localVarQueryParameter['sumFrom'] = sumFrom;
            }

            if (sumTo !== undefined) {
                localVarQueryParameter['sumTo'] = sumTo;
            }

            if (summary !== undefined) {
                localVarQueryParameter['summary'] = summary;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionControllerApi - functional programming interface
 * @export
 */
export const TransactionControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateTransactionRequest} createTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTransaction(createTransactionRequest: CreateTransactionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTransaction(createTransactionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTransaction(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTransaction(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {EditTransactionRequest} editTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editTransaction(id: number, editTransactionRequest: EditTransactionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.editTransaction(id, editTransactionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransaction(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransaction(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous'} [category] 
         * @param {'HUF' | 'USD' | 'EUR'} [currency] 
         * @param {string} [paidFrom] 
         * @param {string} [paidTo] 
         * @param {number} [sumFrom] 
         * @param {number} [sumTo] 
         * @param {string} [summary] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactions(page?: number, size?: number, sort?: Array<string>, category?: 'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous', currency?: 'HUF' | 'USD' | 'EUR', paidFrom?: string, paidTo?: string, sumFrom?: number, sumTo?: number, summary?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactions(page, size, sort, category, currency, paidFrom, paidTo, sumFrom, sumTo, summary, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionControllerApi - factory interface
 * @export
 */
export const TransactionControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateTransactionRequest} createTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTransaction(createTransactionRequest: CreateTransactionRequest, options?: any): AxiosPromise<CreateTransactionResponse> {
            return localVarFp.createTransaction(createTransactionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTransaction(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTransaction(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {EditTransactionRequest} editTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editTransaction(id: number, editTransactionRequest: EditTransactionRequest, options?: any): AxiosPromise<EditTransactionResponse> {
            return localVarFp.editTransaction(id, editTransactionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction(id: number, options?: any): AxiosPromise<TransactionResponse> {
            return localVarFp.getTransaction(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous'} [category] 
         * @param {'HUF' | 'USD' | 'EUR'} [currency] 
         * @param {string} [paidFrom] 
         * @param {string} [paidTo] 
         * @param {number} [sumFrom] 
         * @param {number} [sumTo] 
         * @param {string} [summary] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactions(page?: number, size?: number, sort?: Array<string>, category?: 'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous', currency?: 'HUF' | 'USD' | 'EUR', paidFrom?: string, paidTo?: string, sumFrom?: number, sumTo?: number, summary?: string, options?: any): AxiosPromise<PageTransactionResponse> {
            return localVarFp.getTransactions(page, size, sort, category, currency, paidFrom, paidTo, sumFrom, sumTo, summary, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionControllerApi - object-oriented interface
 * @export
 * @class TransactionControllerApi
 * @extends {BaseAPI}
 */
export class TransactionControllerApi extends BaseAPI {
    /**
     * 
     * @param {CreateTransactionRequest} createTransactionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionControllerApi
     */
    public createTransaction(createTransactionRequest: CreateTransactionRequest, options?: AxiosRequestConfig) {
        return TransactionControllerApiFp(this.configuration).createTransaction(createTransactionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionControllerApi
     */
    public deleteTransaction(id: number, options?: AxiosRequestConfig) {
        return TransactionControllerApiFp(this.configuration).deleteTransaction(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {EditTransactionRequest} editTransactionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionControllerApi
     */
    public editTransaction(id: number, editTransactionRequest: EditTransactionRequest, options?: AxiosRequestConfig) {
        return TransactionControllerApiFp(this.configuration).editTransaction(id, editTransactionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionControllerApi
     */
    public getTransaction(id: number, options?: AxiosRequestConfig) {
        return TransactionControllerApiFp(this.configuration).getTransaction(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [page] Zero-based page index (0..N)
     * @param {number} [size] The size of the page to be returned
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous'} [category] 
     * @param {'HUF' | 'USD' | 'EUR'} [currency] 
     * @param {string} [paidFrom] 
     * @param {string} [paidTo] 
     * @param {number} [sumFrom] 
     * @param {number} [sumTo] 
     * @param {string} [summary] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionControllerApi
     */
    public getTransactions(page?: number, size?: number, sort?: Array<string>, category?: 'housing' | 'travel' | 'food' | 'utilities' | 'insurance' | 'healthcare' | 'financial' | 'lifestyle' | 'entertainment' | 'clothing' | 'miscellaneous', currency?: 'HUF' | 'USD' | 'EUR', paidFrom?: string, paidTo?: string, sumFrom?: number, sumTo?: number, summary?: string, options?: AxiosRequestConfig) {
        return TransactionControllerApiFp(this.configuration).getTransactions(page, size, sort, category, currency, paidFrom, paidTo, sumFrom, sumTo, summary, options).then((request) => request(this.axios, this.basePath));
    }
}


