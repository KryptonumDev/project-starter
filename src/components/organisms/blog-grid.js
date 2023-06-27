import React from "react";
import Card from "../moleculas/blog-card";
import styled from "styled-components";

export default function Grid({ posts }) {
  return (
    <Wrapper>
      {posts.map((el, index) => (
        <Card key={el.uri + index} data={el} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
`