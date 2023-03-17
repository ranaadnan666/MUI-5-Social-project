import { Box, Typography } from '@mui/material'
import React from 'react'
import './style.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ArticleIcon from '@mui/icons-material/Article';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({mode,setMode}) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <Box id="sidebar-mainbox" sx={{ display:{xs:"none",sm:"block"}}}>
     
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText  primary={<Typography type="" id="text-side">Home</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#friends'>
              <ListItemIcon>
                <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText primary={<Typography type="" id="text-side">Friends</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#setting'>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography type="" id="text-side">Settings</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography type="" id="text-side">Profile</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#page'>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography type="" id="text-side">Page</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Group'>
              <ListItemIcon>
                <GroupWorkIcon/>
              </ListItemIcon>
              <ListItemText primary={<Typography type="" id="text-side">Groups</Typography>} />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <br/>
      <ListItem disablePadding>
            <ListItemButton id="dark-mode" component="a" href='#Mode'>
              <ListItemIcon >
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark" :"light")} />
            </ListItemButton>
          </ListItem>
    </Box>
    
  )
}

export default Sidebar