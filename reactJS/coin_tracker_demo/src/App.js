import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? <h2>Loading...</h2> : null}
    </div>
  );
}

export default App;