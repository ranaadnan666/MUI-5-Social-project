import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import img from '../../image/feedimg1.jpg'
import img1 from '../../image/feedimg2.jpg'
import img2 from '../../image/feedimg3.jpg'
import img3 from '../../image/feedimg4.jpg'
import img4 from '../../image/feedimg5.jpg'
import img5 from '../../image/feedimg6.jpg'
import img6 from '../../image/feedimg7.jpg'
import './style.css'

export default function GroupAvatars() {
  return (
    <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src={img} />
      <Avatar alt="Travis Howard" src={img1} />
      <Avatar alt="Cindy Baker" src={img2} />
      <Avatar alt="Agnes Walker" src={img3} />
      <Avatar alt="Trevor Henderson" src={img4} />
      <Avatar alt="Trevor Henderson" src={img5} />
      <Avatar alt="Trevor Henderson" src={img6}/>
      <Avatar alt="Trevor Henderson" src={img4} />
      <Avatar alt="Trevor Henderson" src={img5} />
      <Avatar alt="Trevor Henderson" src={img6}/>
    </AvatarGroup>
  );
}