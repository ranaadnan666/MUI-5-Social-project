import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

import './style.css'

import feeddara from './Feeddata'
import { Divider } from '@mui/material';

export default function Feed() {
;



  return (
    <>
    {
      feeddara.map((item,i)=>{
        return(
          <>
          <Card sx={{ maxWidth: "100%" }}>
          <CardHeader
            id='card-header'
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.name}
            subheader={item.date}
          />
          <CardMedia
            component="img"
            height="400"
            image={item.img}
        
          />
          <CardContent>
            <Typography id="text-desc" variant="body2" color="text.secondary">
              {
                item.desc
              }
            </Typography>
          </CardContent>
          <CardActions disableSpacing id='footer-icon'>
            <IconButton aria-label="add to favorites">
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <InsertCommentIcon/>
            </IconButton>
           
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
           
          </CardActions>
        </Card>
          <br/>
          
          <Divider />
          
        </>)
      })
    }
    </>
  );
}