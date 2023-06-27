import React, { useMemo } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { PAGE_ITEM_COUNT } from "./../../constants/blog"

// urlBasis = '/blog/'

export default function Pagination({ currentPage, itemCount, urlBasis }) {
  const pagesCount = useMemo(() => {
    return (Math.ceil(itemCount / PAGE_ITEM_COUNT))
  }, [itemCount])

  const buttons = useMemo(() => {
    let arr = []
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pagesCount])

  if (pagesCount < 2) {
    return null
  }

  return (
    <Wrapper>
      <Button
        as={currentPage <= 1 ? 'button' : null}
        disabled
        to={currentPage >= 3
          ? `${urlBasis}${currentPage - 1}`
          : `${urlBasis}`}
        className='arrow'
      >
        {/* TODO: LEFT ARROW */}
      </Button>
      <div className="center">
        {pagesCount < 5 ? (
          <>
            {buttons.map(el => (
              <Button
                to={el >= 2
                  ? `${urlBasis}${el}`
                  : `${urlBasis}`}
                active={currentPage === el}
              >
                {el}
              </Button>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3
              && <Button to={`${urlBasis}`} >
                {1}
              </Button>
            }
            {currentPage > 4
              && <Button className="not" disabled>
                ...
              </Button>
            }

            {buttons.map((el, index) => {
              if (currentPage < 4 && (index < 6)) { // first 4 pages
                return (
                  <Button to={`${urlBasis}${el}`} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              if (currentPage > pagesCount - 3 && (index > pagesCount - 7)) { // last 4 pages
                return (
                  <Button
                    to={el >= 2
                      ? `${urlBasis}/${el}`
                      : `${urlBasis}`}
                    active={currentPage === el}
                  >
                    {el}
                  </Button>
                )
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) { // all othher pages
                return (
                  <Button to={`${urlBasis}${el}`} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              return null
            })}

            {(currentPage === 1 || pagesCount - currentPage > 3)
              && <Button className="not" disabled>
                ...
              </Button>
            }
            {(currentPage === 1 || pagesCount - currentPage > 2)
              && (
                <Button to={`${urlBasis}${pagesCount}`}>
                  {pagesCount}
                </Button>
              )}
          </>
        )}
      </div>
      <Button
        className='arrow'
        as={currentPage >= pagesCount ? 'button' : null}
        disabled
        to={
          currentPage < pagesCount
            ? `${urlBasis}${currentPage + 1}`
            : `${urlBasis}${pagesCount}`}
      >
        {/* TODO: RIGHT ARROW */}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
 
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`

const Button = styled(Link)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: transparent;

  ${({ active }) => active && `
    
  `}
 
  &.not, &:disabled{
    cursor: default;
  }
 
  &.arrow{
    padding: 10px;
  }
`