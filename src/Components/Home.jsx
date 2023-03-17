import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Rightbar from "./Right/Rightbar";
import { Grid, Typography } from "@mui/material";
const Home = () => {
  return (
    <Box>
      {/* ===========Header=============  */}
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* ===========Sidebar=============  */}

          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          {/* ===========News Feed=============  */}

          <Feed />
        </Grid>
        <Typography></Typography>
        <Grid item xs={3}>
          {/* ===========Rightbar=============  */}

          <Rightbar />
        </Grid>
      </Grid>

      {/* </Stack> */}
    </Box>
  );
};

export default Home;
