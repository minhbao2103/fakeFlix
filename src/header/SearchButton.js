import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'

const SearchButton = () => {
  return (
    <SearchBar>
    <AiOutlineSearch className='iconSearch'/>
    <input type={`text`} placeholder=' Searching here...' />
    </SearchBar>
  )
}

export default SearchButton

const SearchBar = styled.div`
  display: flex;
  justify-content:flex-end;
  padding: 2px 4px;
  position: relative;
  transition: all 1s ease-in;

  &:hover .iconSearch {
      color: gray;
    }

  .iconSearch {
    width: 18px;
    height: 18px;
    cursor: pointer;
    transform: translateX(20px) translateY(2px);
    color: gray;
  }

  input {
    font-size: 14px;
    outline: none;
    border: none;
    width: 0;
    opacity: 0;
    padding: 0px 8px;
    cursor: pointer;
    transition: width 0.5s;
    &:focus {
      padding-left: 20px;
      width: 120px;
      cursor: text;
      opacity: 1;
      color: gray;
      border-radius: 4px;
    }
  }
`
