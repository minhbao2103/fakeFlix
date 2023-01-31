import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Trailer = () => {
  return (
    <TrailerContent>
     <H1Title>
         <h1>Insidious Chapter 2</h1>
    </H1Title>
    <TagP>
    <p>In 1986, Lorraine Lambert summons demonologist Elise Rainier to help her son Josh, who is being followed by the spirit of an old woman.</p>
    </TagP>
      <ReactPlayer 
        url='https://vimeo.com/73046716'
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
  top: 0px;
  font-size: 10px;
  opacity: 0.7;
`
const TagP = styled.div`
  position: absolute;
  width: 220px;
  margin: 2px;
  padding: 4px;
  top: 30px;
  font-size: 8px;
  opacity: 0.7;
`