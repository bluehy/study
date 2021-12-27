import { useState } from "react";
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

const Coin = () => {
  const [loading, setLoading] = useState(true);
  // const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams() as unknown as RouteParams;
  console.log(coinId);

  const location = useLocation();
  // https://typescript.tv/react/upgrade-to-react-router-v6/
  const name = location.state as RouterState;

  return (
    <Container>
      <Header>
        <Title>{coinId}</Title>
      </Header>
      {loading ? <Loading /> : null}
    </Container>
  );
};
export default Coin;
