import React from "react";
import Card from "../moleculas/blog-card";
import styled from "styled-components";

const pageItemConunt = 9;

export default function Grid({ posts, currentPage }) {
  return (
    <Wrapper>
      {posts.map((el, index) => {
        if (
          index >= (pageItemConunt - 1) * (currentPage - 1) + (currentPage - 1) &&
          index <= (pageItemConunt - 1) * currentPage + (currentPage - 1)
        ) {
          return (
            <Card key={el.uri + index} data={el} />
          )
        }
        return null
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`