import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Header from './components/header/Header'
import Trailer from './components/header/trailer/Trailer'
import MainContent from './components/maincontent/MainContent'
import MovieComponent from './components/maincontent/MovieComponent';

const App = () => {
  const [search, setSearch] = useState('')
  const [movieList, setMovieList] = useState([])
  const [timeoutId,setTimeoutId] = useState()



  const API_KEY = '45465dff'
  const fetchData = async(searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
      setMovieList(response.data.Search)
   }

   const handleInputChange = (e) => {
    setSearch(e.target.value)
    const timeout = setTimeout(() => {
      fetchData(e.target.value)
    }, 500)
    setTimeoutId(timeout)

    clearTimeout(timeoutId)
  }

  return (
    <>
      <Header handleInputChange={handleInputChange} search={search}/>
      <Trailer />
      <MovieListContainer>
    {movieList?.length
    ? movieList.map((movie, index) => (
      <MovieComponent movie={movie} key={index}  />
    ))
    : "No Movie Search"}
   </MovieListContainer>
      {/* <MainContent /> */}
    </>
  )
}

export default App

const MovieListContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 28px;
    justify-content: space-evenly;
    gap: 24px;
    `