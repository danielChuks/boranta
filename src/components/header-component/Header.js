import React from 'react'
import head from './images/header.jpg'
import {Typography, Container, Grid}  from '@mui/material'

function Header() {
  return (
    <Container>
        <Grid>
            <Typography className="image-style">
                <img src={head} alt='header'/>
            </Typography>
        </Grid>
    </Container>
  )
}

export default Header