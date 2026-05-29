// InputBox is a reusable component used for amount input and currency selection
function InputBox({

    // label is used to show text like "From" or "To"
    label,

    // amount holds the value shown inside the input field
    amount,

    // onamountchange is a function used to update amount in parent component
    onamountchange,

    // currencyoptions contains list of all available currency codes
    // default empty array is used to avoid errors if data is not ready
    currencyoptions = [],

    // oncurrencychange is used to update selected currency in parent component
    oncurrencychange,

    // selectcurrency stores the currently selected currency
    // default value is set to "usd"
    selectcurrency = "usd",

    // amountdisabled is used to disable input when needed (like output box)
    amountdisabled = false,

    // currencydisabled is used to disable currency dropdown if required
    currencydisabled = false,

    // className is used to pass custom styling from parent component
    className = "",
}) {

    return (
        // className is injected here so parent component can control styling
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            {/* Left side: amount input */}
            <div className="w-1/2">
                <label className="text-black/60 mb-2 inline-block">
                    {label}
                </label>

                <input
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="text"
                    inputMode="numeric"
                    placeholder="Amount"

                    // disables input when amountdisabled is true
                    disabled={amountdisabled}

                    // shows the value passed from parent component
                    value={amount}

                    // converts input value from string to number
                    // && check is used to avoid error if function is not passed
                    onChange={(e) =>
                        onamountchange && onamountchange(Number(e.target.value))
                    }
                />
            </div>

            {/* Right side: currency dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right relative z-10">
                <p className="text-black/60 mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-lg px-2 py-1 bg-white text-black cursor-pointer outline-none border border-gray-300"

                    // sets currently selected currency
                    value={selectcurrency}

                    // updates currency value in parent component
                    onChange={(e) =>
                        oncurrencychange && oncurrencychange(e.target.value)
                    }

                    // disables dropdown when currencydisabled is true
                    disabled={currencydisabled}
                >
                    {/* map is used to loop through currencyoptions
                        key helps React improve performance */}
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

// exporting component so it can be reused in App.jsx
export default InputBox;
