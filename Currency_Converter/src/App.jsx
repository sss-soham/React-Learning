import { currencyConverter } from "./api/PostApi";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setFromCurrency, setToCurrency, setConvertedAmount, setLoading, setError } from "./store.jsx";

const App = () => {

	// using normal react- state management.
	// const [amount, setAmount] = useState(0);
	// const [fromCurrency, setFromCurrency] = useState("USD");
	// const [toCurrency, setToCurrency] = useState("INR");
	// const [convertedAmount, setConvertedAmount] = useState(null);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);

	const { amount, fromCurrency, toCurrency, convertedAmount, loading, error } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleConvertCurrenct = async () => {
		dispatch(setLoading(true));
		dispatch(setError(null));
		try {
			const res = await currencyConverter(fromCurrency, toCurrency, amount);
			const { conversion_result } = await res.data;
			dispatch(setLoading(false));
			dispatch(setConvertedAmount(conversion_result));
			console.log(conversion_result);
		}catch(error) {
			dispatch(setError("Error fetching conversion rate"));
			console.log(error);
		}
	};

	return(
		<section className="currency-converter">
			<div className="currency-div">
				<h1>Currency Converter</h1>
				<div>
					<label htmlFor="currency_amount">Amount:
						<input type="number" id="currency_amount" value={amount} 
						onChange={(e) => dispatch(setAmount(e.target.value))}/>
					</label>
				</div>
				<div className="currency-selector">
					<div>
						<label>
							From:
							<select value={fromCurrency} 
							onChange={(e) => dispatch(setFromCurrency(e.target.value))}>
								<option value="USD">USD</option>
								<option value="EUR">EUR</option>
								<option value="INR">INR</option>
								<option value="GBP">GBP</option>
								<option value="AUD">AUD</option>
							</select>
						</label>
					</div>

					<div>
						<label>
							To:
							<select
							value={toCurrency}
							onChange={(e) => dispatch(setToCurrency(e.target.value))}>
								<option value="INR">INR</option>
								<option value="USD">USD</option>
								<option value="EUR">EUR</option>
								<option value="GBP">GBP</option>
								<option value="AUD">AUD</option>
							</select>
						</label>
					</div>
				</div>

				<button
				disabled={loading || amount <= 0}
				onClick={handleConvertCurrenct}>
					{loading? "Converting.." : "Convert"}
				</button>

				<hr />
				{convertedAmount && (
					<div>
						<h2>
							{amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
						</h2>
					</div>
				)}
				
				{error && 
				<p>{error}</p>}
			</div>
		</section>
	)
};

export default App;