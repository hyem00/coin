import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoin(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>The coin ! ({coin.length})=</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        coin.map((coins) => (
          <li>
            {coins.name} ({coins.symbol}) : ${coins.quotes.USD.price} USD
          </li>
        ))
      )}
    </div>
  );
}

export default App;
