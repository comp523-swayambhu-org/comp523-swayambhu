import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

const drawerWidth = 300;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  }),
}));

export default function ButtonAppBar({ openHelp, menuClick, menuOpened }) {
  return (
    <AppBar position="fixed" style={{ background: 'black' }} open={menuOpened}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to Swayambhu Stories
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="help"
          sx={{ mr: 2 }}
          onClick={openHelp} >
          <HelpIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={menuClick}
        >
        {menuOpened === false && <MenuIcon />}
        {menuOpened && <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
