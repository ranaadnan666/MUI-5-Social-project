// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import { Box, ImageList, ImageListItem } from '@mui/material'
import img from '../../image/feedimg1.jpg'
import img1 from '../../image/feedimg2.jpg'
import img2 from '../../image/feedimg3.jpg'
import img3 from '../../image/feedimg4.jpg'
import img4 from '../../image/feedimg5.jpg'
import img5 from '../../image/feedimg6.jpg'
import img6 from '../../image/feedimg7.jpg'
export default function MasonryImageList() {
    return (
      <Box sx={{ width: 250, height: 450,  }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  }
const itemData = [
  {
    img: img,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: img1,
    title: 'Burger',
  },
  {
    img: img2,
    title: 'Camera',
  },
  {
    img: img3,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: img4,
    title: 'Hats',
    cols: 2,
  },
  {
    img: img5,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: img6,
    title: 'Basketball',
  },
  {
    img: img1,
    title: 'Fern',
  },
  {
    img: img4,
    title: 'Hats',
    cols: 2,
  },
  {
    img: img5,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: img6,
    title: 'Basketball',
  },


];