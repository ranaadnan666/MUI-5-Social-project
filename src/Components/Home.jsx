import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Rightbar from './Right/Rightbar';
import { Grid, Typography } from '@mui/material';
const Home = () => {
  return (
    <Box>
    <Header/>
{/* <Stack direction="row" spacing={2} justifyContent="space-between" bac> */}

<Grid container spacing={2}>
  <Grid item xs={3} >
  <Sidebar/>
  </Grid>
  <Grid item xs={6}>
  <Feed/>
  </Grid>
  <Typography >
  </Typography>
  <Grid item xs={3}>
  <Rightbar/>
  </Grid>
</Grid>
{/* <Box>
    
</Box><Box>
   
</Box><Box>
   
</Box> */}
{/* </Stack> */}
    </Box>
  )
}

export default Home