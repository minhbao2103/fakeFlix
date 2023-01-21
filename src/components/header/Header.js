import React from 'react'
import styled from 'styled-components';

import SearchButton from '../../components/header/SearchButton';
import TitleFilm from '../../components/header/TitleFilm';
import FormLogin from '../../components/header/FormLogin';

const Header = ({handleInputChange,search}) => {
  return (
    <MainHeader>
       <WrapTitle>
         <TitleFilm />
         <SearchButton handleInputChange={handleInputChange} search={search}/>
       </WrapTitle>
        <FormLogin />
    </MainHeader>
  )
}

export default Header

const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 18px 0px 4px 4px;
    position: sticky;
`
const WrapTitle = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
`
