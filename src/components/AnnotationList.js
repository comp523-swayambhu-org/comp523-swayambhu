import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import CSVList from './CSVList.js';

const drawerWidth = 250;

export default function AnnotationList({ open }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <Toolbar>
        <Typography variant="h6">Annotations</Typography>
      </Toolbar>
      <Divider />
      <CSVList />
    </Drawer>
  );
}
