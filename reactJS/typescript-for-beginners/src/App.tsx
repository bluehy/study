import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Header = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
}

const Dummy = ({ text }: DummyProps) => {
  return <h1>{text}</h1>;
};

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`hello ${value}`);
  };
  return (
    <div>
      <Container>
        <Header>Protected</Header>
        <Dummy text="Hello neighbor" />
      </Container>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default App;
