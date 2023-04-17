import React, { useMemo } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
 
// urlBasis = 'https://example.com/blog/'
 
export default function Pagination({ currentPage, itemCount, urlBasis }) {
  const pagesCount = useMemo(() => {
    let count = itemCount - 10
    return (Math.ceil(count / 9)) + 1
  }, [itemCount])
 
  const buttons = useMemo(() => {
    let arr = []
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pagesCount])
 
  if (itemCount < 11) {
    return null
  }
 
  return (
    <Wrapper>
      <Button as={currentPage <= 1 ? 'button' : null} to={`${urlBasis}${currentPage - 1}`} className='arrow left' >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3L3 16L17 29" stroke="#EDAC2A" stroke-width="3" stroke-linecap="square" />
        </svg>
      </Button>
      <div className="center">
        {itemCount < 51 ? (
          <>
            {buttons.map(el => (
              <Button to={`${urlBasis}${el}`} active={currentPage === el} >
                {el}
              </Button>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3
              && <Button to={`${urlBasis}1`} >
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
                  <Button to={`${urlBasis}${el}`} active={currentPage === el}>
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
                <Button  to={`${urlBasis}${pagesCount}`}>
                  {pagesCount}
                </Button>
              )}
          </>
        )}
      </div>
      <Button as={currentPage >= pagesCount ? 'button' : null}  to={`${urlBasis}${currentPage + 1}`} className={'arrow right'}>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 29L17 16L3 3" stroke="#EDAC2A" stroke-width="3" stroke-linecap="square" />
        </svg>
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
 
  &.not{
    cursor: default;
  }
 
  &.arrow{
    background: #23423D;
    padding: 10px;
  }
`