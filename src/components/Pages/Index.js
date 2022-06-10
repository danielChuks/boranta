import React, {Fragment} from "react";
import { Container, Grid, Box, Typography} from "@mui/material";
import head from '../header-component/images/leadspace.jfif'
import BodyHomeContent from "../gridComponent/BodyHomeContent";

import './Page.css'

const Index = () => {

  return (
  <>
<Container > 
      <Grid>
        <h2 style={{marginTop:"80px"}}>{"Cubuk chain initiatives"}</h2>
          <Grid stye={{ display: 'flex', justifyContent: "center"}} item xs={12} md={12} lg={12}>
           <Box><Typography>
              {"Cubuk chains represent a world where you can trade and buy properties including cars phones house without going through the stress of Bank transfers"}
          </Typography>
          </Box>
          </Grid>
      </Grid>
    </Container>
    <Container style={{marginTop:"20px"}} >
      <Grid>
        <Grid container justifyContent="center" item xs={12} md={12} lg={12}>
            <img src={head} key="logo" alt="Logo" width={1155}/>
        </Grid>
       </Grid>
    </Container>
    <BodyHomeContent />
  </>
  )
}

export default Index