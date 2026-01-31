// useState is a React hook used to store and update values inside a component
import { useState } from 'react'

// InputBox is custom component to take currency input from user
import InputBox from './mycomponents/Input'

// useCurrencyInfo is a custom hook used to fetch currency conversion data
import useCurrencyInfo from './myhooks/useCurrencyinfo.js'

function App() {

  // amount stores the value entered by the user in the "From" input box
  // setamount is used to update that value
  const [amount ,setamount] = useState(0)

  // from stores the selected source currency (default is USD)
  const [from , setfrom] = useState("usd")

  // to stores the selected target currency (default is INR)
  const [to , setto] = useState("inr")

  // convertedamount stores the final converted value
  const [convertedamount , setconvertedamount] = useState(0)

  // useCurrencyInfo is called with the selected "from" currency
  // it returns an object that contains conversion rates for all currencies
  const currencyInfo = useCurrencyInfo(from)

  // Object.keys is used to get all available currency codes from the API response
  // this list is passed to InputBox to populate the dropdown
  const options = Object.keys(currencyInfo)

  // convert function calculates the converted amount
  // Math.round is used to remove decimal values from the final result
  const convert = ()=>{
    setconvertedamount(Math.round(amount * currencyInfo[to]))
  }

  return(
    <div
      // Full screen container with background image
      className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5980584/pexels-photo-5980584.jpeg')",
      }}
    >

      <div className="w-full">
        {/* Main card container */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/0 hover:scale-105 transform transition-all duration-400">
          
          {/* Form is used so we can handle submit properly */}
          <form
            onSubmit={(e) => {
              // preventDefault stops page reload on submit
              e.preventDefault();
              convert();
            }}
          >

            {/* InputBox for source currency */}
            <div className="w-full mb-3 ">
              <InputBox 
                className="bg-gradient-to-r from-yellow-600 to-yellow-400
                transform
                hover:scale-105
                transition-all duration-400 ease-out"

                // Label text for input box
                label="From"

                // Value entered by the user
                amount={amount}

                // List of available currencies
                currencyoptions={options}

                // Updates source currency when dropdown changes
                oncurrencychange={(currency)=> setfrom(currency)}

                // Selected source currency
                selectcurrency={from}

                // Updates amount state when user types
                onamountchange={(amount)=> setamount(amount)}
              />
            </div>

            {/* InputBox for target currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                className='bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-105 transition-all duration-400 ease-out '

                // Label text for output box
                label="To"

                // Converted amount is displayed here
                amount={convertedamount}

                // Same currency list is reused
                currencyoptions={options}

                // Updates target currency when dropdown changes
                oncurrencychange={(currency)=> setto(currency)}

                // Selected target currency
                selectcurrency={to}

                // amountdisabled is used to prevent editing converted value
                amountdisabled
              />
            </div>

            {/* Convert button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-800 
              text-white py-2 rounded-lg mb-3
              cursor-pointer
              shadow-lg
              hover:from-yellow-600 hover:to-yellow-400
              hover:shadow-2xl hover:-translate-y-0.5 hover:scale-100
              transition-all duration-500 ease-out"
            >
              {/* Button text dynamically updates currency names */}
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

// App component is exported so it can be used in main.jsx
export default App
