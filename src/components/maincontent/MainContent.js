
import React from 'react'
import styled from 'styled-components'
import { Route , Routes } from 'react-router-dom'
import Popular from './Popular'
import Trending from './Trending';
import Upcoming from './UpComing';
import Loves from './Loves';

const MainContent = ({showMovie,showTop,showUpComing,showLatest}) => {
  return (
    <MovieRowContainer>
    <div className='heading'>
        <span><a href='/'>Popular</a></span>
        <span><a href='/trending'>Trending</a></span>
        <span><a href='/upcoming'>Upcoming</a></span>
        <span><a href='/latest'>Latest</a></span>
    </div>
    <Routes>
        <Route path='/' element={<Popular showMovie={showMovie}/>}/>
        <Route path='/trending' element={<Trending showTop={showTop}/>}/>
        <Route path='/upcoming' element={<Upcoming showUpComing={showUpComing} />}/>
        <Route path='/latest' element={<Loves showLatest={showLatest} />}/>
    </Routes>
    </MovieRowContainer>
  )
}

export default MainContent

const MovieRowContainer = styled.div`
    background: black;
    color: white;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 18px;
        user-select: none;
        text-align: center;
      span {
        margin: 0px 8px;
        padding: 0px 8px;
      }
      a {
        text-decoration: none;
        color: white;
      }
    }
`
