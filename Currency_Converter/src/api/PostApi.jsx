import axios from "axios";

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/1ae309ffd2ac8c192bcf3319",
});

// get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};

