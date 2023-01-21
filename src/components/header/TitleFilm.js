import React from 'react'

import { GiFilmSpool } from 'react-icons/gi'
import styled from 'styled-components'

const TitleFilm = () => {
  return (
    <TitleContent>
     <IconFilmSpool> <GiFilmSpool /> </IconFilmSpool>
     <AppName>Film</AppName>
    </TitleContent>
  )
}

export default TitleFilm

const TitleContent = styled.a`
  display: flex;
`
const IconFilmSpool = styled.div`
  color: red;
`
const AppName = styled.div`
  color: red;
`