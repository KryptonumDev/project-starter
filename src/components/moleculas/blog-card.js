import { Link } from "gatsby";
import React from "react";

export default function Card({ data }) {
  return (
    <Link to={data.uri}>
      {data.title}
    </Link>
  )
}