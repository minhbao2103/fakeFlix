import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Trailer = () => {
  return (
    <TrailerContent>
     <H1Title>
         <h1>Resident Evil 2</h1>
    </H1Title>
    <TagP>
    <p>A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the </p>
    </TagP>
      <ReactPlayer 
        url='https://vimeo.com/291070285'
        playing={true}
        height='100%'
        width='100%'
        loop={true}
        controls={false}
        playsinline= {true}
       />
    </TrailerContent>
  )
}

export default Trailer

const TrailerContent = styled.div`
  position: relative;
  color: white;
`
const H1Title = styled.div`
  position: absolute;
  margin: 2px;
  padding: 4px;
  top: 10px;
  font-size: 10px;
  opacity: 0.7;
`
const TagP = styled.div`
  position: absolute;
  width: 220px;
  margin: 2px;
  padding: 4px;
  top: 40px;
  font-size: 8px;
  opacity: 0.7;
`