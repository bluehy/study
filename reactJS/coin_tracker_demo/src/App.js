import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((json) => {
        setCoins(json);
        setLoading(false);
        // console.log(coins);
      });
  }, []);

  const onSelect = (event) => {
    const val = event.target.value;
    const start = val.indexOf("$");
    const end = val.length;
    const coinValue = Math.abs(val.substring(start + 1, end));
    setSelected(coinValue);
    // https://mylko72.gitbooks.io/javascript-cookbook/content/chapter1/chapter1_2.html
    // setSelected(event.quotes.USD.price);
  };

  const onChange = (event) => {
    // console.log(event.target.value);
    setDollar(event.target.value);
  };

  return (
    <div className="App">
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <form>
          <select onChange={onSelect}>
            {coins.map((item) => (
              <option key={item.id}>
                {item.name} ({item.symbol}) ${item.quotes.USD.price}
              </option>
            ))}
          </select>
          <br />
          <input
            onChange={onChange}
            value={dollar}
            type="number"
            placeholder="input your USD"
          />
          <span> = </span>
          <input
            type="number"
            placeholder="coin"
            value={selected ? dollar / selected : selected}
            disabled
          />
        </form>
      )}
    </div>
  );
}

export default App;
