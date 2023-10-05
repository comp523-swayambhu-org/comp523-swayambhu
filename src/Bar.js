import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';

export default function ButtonAppBar({openHelp, openMenu}) {
  return (
    <AppBar position="static" style={{background: "black"}}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome to Swayambhu Stories
            </Typography>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <HelpIcon onClick={openHelp}/>
            </IconButton>
            <MenuIcon />
        </Toolbar>
    </AppBar>
  );
}