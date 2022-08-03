import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { If } from "../components/If";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
`;

const Guest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/guest")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <React.Fragment>
      <Container>
        <h1>You're here as a Guest</h1>
        <If condition={data && data.length > 0}>
          {data.map((d, key) => (
            <div key={key}>{d.name}</div>
          ))}
        </If>
      </Container>
    </React.Fragment>
  );
};

export default Guest;
