import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../App.css';
import Rightbar from './Right/Rightbar';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function CSSGrid() {
  const [mode,setMode]=React.useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
          <Item><Header/></Item>
        </Box>
      
        <Box gridColumn="span 3" id="mainbox-content" >
          <Item><Sidebar setMode={setMode} mode={mode}/></Item >
        </Box>
        
        <Box id="mainbox-content" gridColumn={{xs:"span 12",sm:"span 6"}}  >
          <Item><Feed/></Item>
        </Box>
        <Box gridColumn="span 3" id="mainbox-content">
          <Item><Rightbar/></Item>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}