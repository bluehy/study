import { useEffect } from "react";
import { useParams } from "react-router-dom";

// interface CharProps {
//   coinId: string;
// }

const Chart = (/* { coinId }: CharProps */) => {
  const params = useParams();
  // params = {coinId: "coinId"}
  //
  // Coin의 Route를 사용할 경우, Coin을 통해 props를 전달받도록 작성할 수 있음.
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  useEffect(() => {
    (async () => {
      const chartData = await (
        await fetch(
          `https://api.coinpaprika.com/v1/coins/${params.coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
        )
      ).json();
      console.log(chartData);
    })();
  }, []);

  return <h1>Chart about {params.coinId}</h1>;
};

export default Chart;
