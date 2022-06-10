import React, {Fragment} from "react";
import { Container, Grid} from "@mui/material";
import Header from "../header-component/Header";

const Index = () => {
  return (
  <>
    <Container> 
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h1>hello</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1>hello</h1>
          </Grid>
      </Grid>
    </Container>
  </>
  )
}

export default Index