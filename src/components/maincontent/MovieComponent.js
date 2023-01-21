import React from 'react'
import styled from 'styled-components'

function MovieComponent({movie}) {
  return (
    <MovieContainer >
    <CoverImg src={movie.Poster}/>
    <MovieName>{movie.Title}</MovieName>
    <InfoColumn>
        <MovieInfo>Year:{movie.Year}</MovieInfo>
        <MovieInfo>Type:{movie.Type}</MovieInfo>
    </InfoColumn>
    </MovieContainer>
  )
}

export default MovieComponent

const MovieContainer = styled.div`
    background: black;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    user-select: none;
`
const CoverImg = styled.img`
    transform: scale(1);
    max-width: 160px;
    height: 100%;
    max-height: 360px;
    transition: all 0.3s linear;
    user-select: none;
    border-radius: 4px;
    margin: 0px 10px;
    padding: 8px 6px;
    &:hover {
            transform: scale(1.05);
            z-index: 10;
        }
`
const MovieName = styled.span`
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:  ellipsis; 
        font-size: 10px;
`
const InfoColumn = styled.div`

`
const MovieInfo = styled.div`
   text-align: center;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:  ellipsis; 
        font-size: 10px;
`