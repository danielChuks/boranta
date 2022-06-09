import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {AppBar, IconButton, Stack, Toolbar, Typography} from '@mui/material'
import CatchingPokeMonIcon from '@mui/icons-material/CatchingPokemon'


const Navbar = () => {
  return (
    <>
      <AppBar position='static' style={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <CatchingPokeMonIcon />
          </IconButton>
            <Typography variant='h5' component='h6' sx={{flexGrow: 1}}>
                <Link to='/' style={{textDecoration: 'none', color:'inherit'}}>CUBUK</Link>
            </Typography>
            <Stack direction='row' spacing={2}>
              <Link to='/' style={{textDecoration: 'none', color:'inherit'}}> <h3>HOME</h3></Link>
              <Link to='/about' style={{textDecoration: 'none', color:'inherit'}}> <h3>ABOUT </h3></Link>
              <Link to='/contact' style={{textDecoration: 'none', color:'inherit'}}><h3>CONTACT</h3></Link>
            </Stack>
        </Toolbar>
      </AppBar>      
    </>
  )
} 

export default Navbar