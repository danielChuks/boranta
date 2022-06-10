import { Grid, Container, Typography, Box} from '@mui/material'
import React from 'react'
import './BodyHomeContent.css'

const values = [
  {
    title: 'The Evolution',
    details: "Cubuk chains represent a world where you can trade and buy properties including cars phones house without going through the stress of Bank transfers",
  },

  {
    title: 'How we trade',
    details: "We trade by using the followhhjhjahjdhahdjadhjahdhadjahdjahdkjahjdddk",
  },

  {
    title: 'How we trade',
    details: "We trade by using the followd.sjklsjflsjflksklfsjkfsklfjsfjsjflksjfjsflk",
  },

  {
    title: 'How we trade',
    details: "We trade by using the followssssssssssssssssssssssssssssssssssssssss",
    Image: "."
  },

]

const BodyHomeContent = () => {
  return (
    <div>
    <Container>
      <Grid container>
        {values.map( value => (
          <Grid  item key={value.id} xs={12} md={12} lg={12}>
            <Grid>
             <Box style={{marginTop: '30px', marginButtom: "40px"}}>
              {value.title}
              </Box>
            <Typography>
                {value.details}
            </Typography>
            </Grid>
         </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  )
}

export default BodyHomeContent