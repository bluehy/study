import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../Loading";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 32px;
`;

interface RouteParams {
  coinId: string;
}

interface RouterState {
  name: string;
}

interface IInfoData {
  id;
  name;
  symbol;
  rank;
  is_new;
  is_active;
  type;
  tags;
  team;
  description;
  message;
  open_source;
  started_at;
  development_status;
  hardware_wallet;
  proof_type;
  org_structure;
  hash_algorithm;
  links;
  links_extended;
  whitepaper;
  first_data_at;
  last_data_at;
}

interface IPriceData {
  id;
  name;
  symbol;
  rank;
  circulating_supply;
  total_supply;
  max_supply;
  beta_value;
  first_data_at;
  last_updated;
  quotes;
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  // const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams() as unknown as RouteParams;
  console.log(coinId);

  // https://typescript.tv/react/upgrade-to-react-router-v6/
  const { name } = useLocation().state as RouterState;
  console.log(name);

  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      // const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
      // const json = await response.json()
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log(infoData);
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{name}</Title>
      </Header>
      {loading ? <Loading /> : null}
    </Container>
  );
};
export default Coin;
