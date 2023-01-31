import React from 'react'
import styled from 'styled-components'

const UpComing = ({showUpComing}) => {
  const imageData = 'https://image.tmdb.org/t/p/w500'
  return (
    <MovieRowContainer>
    <div className='heading'>
    </div>
    <MovieSlider>
    {
      showUpComing.map((movie,index) => (
            <div key={index} className='movieItem'>
            <img src={`${imageData}${movie.poster_path}`} alt=''/>
            <div className='movieName'>{movie.original_title}</div>
        </div>
        ))
    }
    </MovieSlider>
    </MovieRowContainer>
  )
}

export default UpComing

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
    }
`
const MovieSlider = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    padding:8px 0px;
    scroll-behavior: smooth;
    flex-wrap: wrap;
    overflow: auto;

    .movieItem {
        transform: scale(1);
        max-width: 150px;
        height: 100%;
        max-height: 260px;
        transition: all 0.3s linear;
        user-select: none;
        border-radius: 4px;
        margin: 12px 0px;

        &:hover {
            transform: scale(1.05);
            z-index: 10;
        }

    img {
        width : 150px;
        height: 220px;
        max-height: 220px;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    .movieName {
        text-align: center;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:  clip; 
        font-size: 10px;
        padding:4px 0px 10px 0px;
    }
    }
`