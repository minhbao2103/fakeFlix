import React from 'react'
import styled from 'styled-components';

import SearchButton from './SearchButton';
import TitleFilm from './TitleFilm';
import FormLogin from './FormLogin';

const Header = () => {
  return (
    <MainHeader>
       <WrapTitle>
         <TitleFilm />
         <SearchButton />
       </WrapTitle>
       
        <FormLogin />
    </MainHeader>
  )
}

export default Header

const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4px;
`
const WrapTitle = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
`