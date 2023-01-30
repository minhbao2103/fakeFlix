import React from 'react'
import styled from 'styled-components'

function MovieComponent({movie}) {
  return (
    <MovieContainer >
    <CoverImg src={movie.Poster}/>
    <MovieName>{movie.Title}</MovieName>
    </MovieContainer>

  )
}

export default MovieComponent


const MovieContainer = styled.div`
    background: rgb(60, 60, 60);
    color: white;
    width: 140px;
    height: 260px;
    user-select: none;
    text-align: center;
    border-radius: 4px;
`
const CoverImg = styled.img`
    transform: scale(1);
    max-width: 140px;
    height: 100%;
    max-height: 220px;
    transition: all 0.3s linear;
    user-select: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:hover {
            transform: scale(1.05);
            z-index: 10;
        }
`
const MovieName = styled.p`
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:  ellipsis; 
        font-size: 10px;
`