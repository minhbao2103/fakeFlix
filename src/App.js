import React from 'react'
import { useState,useEffect } from 'react'
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

  const [showMovie,setShowMovie] = useState([])
  const [showTop,setShowTop] = useState([])
  const [showUpComing,setShowUpComing] = useState([])
  const [showLatest,setShowLatest] = useState([])

  const API_KEY = '45465dff'
  const postApi = 'https://api.themoviedb.org/3/movie/popular?api_key=47cb32d7a40a71c6ac4940b6e81611d0&language=en-US&page=1'
  const topRating ='https://api.themoviedb.org/3/movie/top_rated?api_key=47cb32d7a40a71c6ac4940b6e81611d0&language=en-US&page=1'
  const upComing ='https://api.themoviedb.org/3/movie/upcoming?api_key=47cb32d7a40a71c6ac4940b6e81611d0&language=en-US&page=1'
  const latest ='https://api.themoviedb.org/3/movie/now_playing?api_key=47cb32d7a40a71c6ac4940b6e81611d0&language=en-US&page=1'
 
  useEffect(() => {
    fetch(latest)
    .then((res) => {
     return res.json()
    })
    .then((post) => {
      setShowLatest(post.results);
    })

    fetch(upComing)
    .then((res) => {
     return res.json()
    })
    .then((post) => {
      setShowUpComing(post.results);
    })

    fetch(topRating)
    .then((res) => {
     return res.json()
    })
    .then((post) => {
      setShowTop(post.results);
    })

    fetch(postApi)
    .then((res) => {
     return res.json()
    })
    .then((post) => {
      setShowMovie(post.results);
    })
  },[])


  
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
    : ""}
   </MovieListContainer>

 <MainContent showMovie={showMovie} showTop={showTop} showUpComing={showUpComing} showLatest={showLatest}/>
    </>
  )
}

export default App

const MovieListContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding: 28px;
    justify-content: space-evenly;
    gap: 24px;
    height: 100%;
    background: black;
    `