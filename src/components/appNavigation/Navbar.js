import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {AppBar, IconButton, Stack, Toolbar, Typography} from '@mui/material'
import CatchingPokeMonIcon from '@mui/icons-material/CatchingPokemon'
import Timer from '../Timer';


const Navbar = () => {
  return (
    <>
      <AppBar style={{backgroundColor: "black", position: "fixed" }}>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <CatchingPokeMonIcon />
          </IconButton>
            <Typography variant='h5' component='h6' sx={{flexGrow: 1}}>
                <Link to='/' style={{textDecoration: 'none', color:'inherit'}}>CUBUK</Link>
            </Typography>
            <Stack direction='row' spacing={2}>
              <Timer/>
              <Link to='/' style={{textDecoration: 'none', color:'inherit'}}> Home</Link>
              <Link to='/about' style={{textDecoration: 'none', color:'inherit'}}> About</Link>
              <Link to='/our-services' style={{textDecoration: 'none', color:'inherit'}}> Our services</Link>
              <Link to='/contact' style={{textDecoration: 'none', color:'inherit'}}>Contact</Link>
            </Stack>
        </Toolbar>
      </AppBar>    
    </>
  )
} 

export default Navbar