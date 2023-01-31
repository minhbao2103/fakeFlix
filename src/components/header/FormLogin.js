import React from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components';


const FormLogin = () => {
  return (
    <FormSignUp style={{
      color:'white',
      margin:'2px 0px',
      }}>
      <Button variant="contained" color="error" 
      style={{
        fontSize:'6px',
        margin:'0px 2px'
                    }}>Sign Up</Button>
      <Button variant="contained" color="error" 
      style={{
        fontSize:'6px',
        margin:'0px 2px'
      }}>Sign In</Button>
    </FormSignUp>
  )
}

export default FormLogin

const FormSignUp = styled.div`

   
`