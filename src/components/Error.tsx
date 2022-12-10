import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Container>
      <Content>404</Content>
      <Content>Page not found</Content>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  font-size: 60px;
  text-shadow: 3px 4px 7px rgba(23, 22, 21, 0.8);
  letter-spacing: 1.4px;
`;
