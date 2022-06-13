import React from 'react'
import {Grid, Container, Typography, Box}  from '@mui/material'


function about() {
  return (
    <div> 
        <Container>
            <Grid container  style={{marginTop: "200px"}}>
                <Grid item md={12} xs={12} lg={12}>
                  <Typography>
                    <h2>About Cubuk</h2>
                  </Typography>
                  <Box>
                    <Typography>
                      Cubuk inicitaitive started it quest to ensure awareness of the need for young individual to harness the oppotunities in the evolving IT space.
                      We come with the vision to help young folks interested in developing a carear in the ever evolving space.

                      We also offer solutions to company to draft out business plan that will help them secure relevance in effectively integrating their business with various Information technology tools to help them strive.
                    </Typography>
                  </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default about;