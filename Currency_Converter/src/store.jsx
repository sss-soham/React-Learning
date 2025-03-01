import { createStore } from "redux"

const SET_AMOUNT = "currency/amount";
const SET_FROM_CURRENCY = "currency/fromCurrency";
const SET_TO_CURRENCY = "currency/toCurrency";
const SET_CONVERTED_AMOUNT = "currency/convertedAmount";
const SET_LOADING = "currency/loading";
const SET_ERROR = "currency/error";

const initialState = {
    amount: 0,
    fromCurrency: "USD",
    toCurrency: "INR",
    convertedAmount: null,
    loading: false,
    error: null,
};

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AMOUNT:
            return {...state, amount: action.payload};
        case SET_FROM_CURRENCY:
            return {...state, fromCurrency: action.payload};
        case SET_TO_CURRENCY:
            return {...state, toCurrency: action.payload};
        case SET_CONVERTED_AMOUNT:
            return {...state, convertedAmount: action.payload, loading:false};
        case SET_LOADING:
            return {...state, loading: true, error:null};
        case SET_ERROR:
            return {...state, error: action.payload, loading: false};
    
        default:
            return state;
    }
};

export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    payload: amount,
});

export const setFromCurrency = (fromCurrency) => ({
    type: SET_FROM_CURRENCY,
    payload: fromCurrency,
});

export const setToCurrency = (toCurrency) => ({
    type: SET_TO_CURRENCY,
    payload: toCurrency,
});

export const setConvertedAmount = (convertedAmount) => ({
    type: SET_CONVERTED_AMOUNT,
    payload: convertedAmount,
});

export const setLoading = () => ({
    type: SET_LOADING,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

export const store = createStore(currencyReducer);