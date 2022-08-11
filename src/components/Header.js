import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import menuPic from "../assests/bitcoin.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.586)' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => { window.location.href = '/' }}
          >
            <img src={menuPic} alt="Bitcoin"  width="50" height="50" F />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BTC Predictor Game
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
