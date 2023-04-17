import { Link } from "gatsby"
import React from "react"

export default function Filter({ urlBasis, categories }) {
  return (
    <div>
    <Link to={urlBasis}>
      All posts
    </Link>
      {categories.map((el, index) => (
        <Link to={el.uri} key={el + index}>
          {el.name}
        </Link>
      ))}
    </div>
  )
}