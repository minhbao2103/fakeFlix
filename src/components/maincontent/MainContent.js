import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const MainContent = () => {
    const movies = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU',
    ]

  return (
    <MovieRowContainer>
    <h1 className='heading'>Popular</h1>
    <MovieSlider>
    {
        movies.map((movie,index) => (
            <div key={index} className='movieItem'>
            <img src={movie} alt=''/>
            <div className='movieName'>movie name</div>
        </div>
        ))
    }
    </MovieSlider>
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
        font-size: 16px;
        user-select: none;
    }
`
const MovieSlider = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    padding:8px 0px;
    scroll-behavior: smooth;
    flex-wrap: wrap;

    .movieItem {
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

    img {
        width :160px;
        height: 100%;
    }

    .movieName {
        text-align: center;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:  ellipsis; 
        font-size: 10px;
    }
    }
`