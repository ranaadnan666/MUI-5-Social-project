import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import QuiltedImageList from './Imagelist'
import GroupAvatars from './Onlineuser'
import './style.css'
import AlignItemsList from './Users'
const Rightbar = () => {
  return (
    <div className='main-div'>
      <Box sx={{ display:{xs:"none",sm:"block"}}} id="rightbar">
     <Typography id="text-right"> Online Friends</Typography>
<Box id="avatar-group">
<GroupAvatars/>

  </Box>  
  <br></br>
  <Divider/>

     <Box>
      <Typography id="text-right">Gallery</Typography>
      <QuiltedImageList/>
    
      </Box>
      <br></br>
  <Divider/>
  <Typography id="text-right">Users</Typography>
       <Box>
        <AlignItemsList/>
       </Box>
    
    
    </Box>
    </div>
  )
}

export default Rightbar