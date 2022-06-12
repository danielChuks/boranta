import { Grid, Container, Typography, Box} from '@mui/material'
import React from 'react'
import './BodyHomeContent.css'
import coin from '../pageImages/images/coin.jpg'

const values = [
  {
    title: 'The Evolution',
    details: "The world has had a text of blockchain and it may look unpopular now but in the coming five years it is said that a lot of companies are going to embrace blockchain as a means of business activiets where developers of blockchain would be sort after as to the normal centralized web app developers. Aside the fact that blockchain is taking over the world soon lets look at why we should go into blockchain.",
    Image: <img src={coin} alt="coin" width={1155} style={{marginTop: "40px"}}/>
    
  },

  {
    title: 'Swift Exchange',
    details: "With different coins and different web and mobile applications for this coins alot of folks have found a different and swift way to perform not just trading coin people have seen the wider possibility to perform real life trade with crypto from the comfort of their home.",
  }
]

const BodyHomeContent = () => {
  return (
    <div>
    <Container>
      <Grid container>
        {values.map( value => (
          <Grid item key={value.id} xs={12} md={12} lg={12}>
            <Grid>
             <Box style={{marginTop: '30px', marginButtom: "40px"}}>
               <h3>{value.title}</h3>
              </Box>
            <Typography>
                {value.details}
            </Typography>
              {value.Image}
            </Grid>
         </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  )
}

export default BodyHomeContent