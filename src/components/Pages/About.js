import React from 'react'
import {Grid, Container, Typography}  from '@mui/material'

function about() {
  return (
    <div> 
        <Container>
            <Grid container  style={{marginTop: "100px"}}>
                <Grid item md={6} xs={12} lg={6}>
                  <Typography>
                    <h1>About Cubuk</h1>
                  </Typography>
                  <box>
                    <Typography>
                      Cubuk inicitaitive started it quest to ensure awareness of the need for young individual to harness the oppotunities in the evolving IT space.
                    </Typography>
                    <Typography>
                      
                    </Typography>
                  </box>
                </Grid>
                <Grid item>
                  <Typography>
                    <h1>Image</h1>
                  </Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default about;