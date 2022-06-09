import React from "react";
import { Grid, Typography} from "@mui/material";

const Index = () => {


  return (
    <div> 
      <Grid container>
          <Typography>
            This is the welcome page 
          </Typography>
      </Grid>
      
      <Grid container spacing={2}>
        <Grid item md={6}>
           <h1>hello</h1>
        </Grid>
        <Grid item md={6}>
          {/* <Item>xs=4</Item> */}
          <h1>hello</h1>
        </Grid>
  </Grid>
  </div>
  )
}

export default Index