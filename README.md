# Crypto Watch Documentation

This project is a cryptocurrency tracking application built with React. It fetches data from the CoinGecko API and displays information about different cryptocurrencies.

## Inputs

* **Currency:** The user can select the currency (EUR or USD) to display prices and market cap. The application uses the CryptoContext.js file to provide currency across the application. This is used throughout the app to fetch and display data in the selected currency.
* **Search:** The user can search for cryptocurrencies by name using the search bar on the homepage. This functionality is implemented in the CoinsTable.jsx and SearchTable.jsx components.
* **Coin ID:** On the CoinPage.jsx component, it dynamically fetches and displays detailed information about a specific cryptocurrency based on its ID. This includes its name, description, rank, price, market cap, and historical chart data. The ID is passed as a route parameter.
* **Chart Period:** The user can select the period for which they want to view the historical chart data (24 Hours, 30 Days, 3 Months, or 1 Year). This input is available on the CoinPage.jsx component and influences the API call made by the CoinChart.jsx component. The `config/data.js` file stores the available periods for the chart.

## Outputs

* **Homepage:** Displays a banner with a carousel of trending coins and a table of all available cryptocurrencies. This includes the coin's image, name, symbol, current price, 24h change, and market cap. Implemented in Homepage.jsx, which utilizes the components Banner.jsx, Carousel.jsx, CoinsTable.jsx, and SearchTable.jsx components.
* **Coin Page:** Displays detailed information about a specific coin, including a chart of its historical price data. This page is accessed by clicking on a coin in the table or carousel. Implemented with the CoinPage.jsx component.
* **Coin Chart:** Displays a line chart of the historical price data for a specific coin. The data is fetched based on the selected currency and chart period, and then processed to produce the `react-chartjs-2` chart. This component is part of the CoinPage output and managed by the CoinChart.jsx component.

## Additional Notes

* The project uses Material UI for styling and responsiveness.
* The application utilizes Axios for fetching data from the CoinGecko API.
* The CoinGecko API is accessed with the functions defined inside `config/api.js`
* The available chart periods are defined inside `config/data.js`
* React Router is used to manage routing between the home page and coin page.
* The `.gitignore` file is configured to ignore common files and folders like `/node_modules`, `/coverage`, and `/build`.
* The `README.md` file contains instructions for running and building the application, as well as links to learn more about React and Create React App.
* The app is configured with basic SEO and PWA properties via the contents of the `public` folder.
