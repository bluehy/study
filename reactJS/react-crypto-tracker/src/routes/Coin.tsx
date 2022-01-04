import { useEffect, useState } from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
  useParams,
  useMatch,
  Outlet,
  // useRouteMatch -> useMatch
  // https://reactrouter.com/docs/en/v6/api
} from "react-router-dom";
import styled from "styled-components";
import Loading from "../Loading";
import Chart from "./Chart";
import Price from "./Price";

// style

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

// interface

interface RouteParams {
  coinId: string;
}

interface RouterState {
  state: {
    name: string;
  };
}

interface ITag {
  coin_counter: number;
  ico_counter: number;
  id: string;
  name: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: ITag[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

// render

const Coin = () => {
  const [loading, setLoading] = useState(true);
  // const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams() as unknown as RouteParams;
  console.log(coinId);

  // https://typescript.tv/react/upgrade-to-react-router-v6/
  const { state } = useLocation() as RouterState;
  console.log(`state :  ${state?.name}`);

  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

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
  }, [coinId]);
  // coinId는 URL에 위치해서 절대 변하지 않는다.

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state?.name : loading ? "loading..." : info?.name}
        </Title>
        {/* <Title>{coinId}</Title> */}
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <p>Rank:</p>
              <p>{info?.rank}</p>
            </OverviewItem>
            <OverviewItem>
              <p>Symbol:</p>
              <p>{info?.symbol}</p>
            </OverviewItem>
            <OverviewItem>
              <p>Open Source:</p>
              <p>{info?.open_source ? "Yes" : "No"}</p>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Outlet />

          {/* nested Routes */}
          {/* using tab */}
          {/* <Routes>{
            <Route path={`/:coinId/price`} element={<Price />} />
            <Route path={`/:coinId/chart`} element={<Chart />} />
          </Routes>} */}
        </>
      )}
    </Container>
  );
};
export default Coin;
