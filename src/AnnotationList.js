import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import Annotation from './Annotation.js'

const drawerWidth = 240;

export default function AnnotationList({open}) {
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
        <Typography variant='h6'>
          Annotations
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <Annotation 
          title="Annotation title" 
          description={"this is an annotations description"}
        />
        <Divider />
        <Annotation 
          title="Second Annotation" 
          description={"maybe we can fill these in by reading from a spreadsheet?"}
        />
        <Divider />
        <Annotation
          title="Videos?"
          description={"for videos, we can pass in a boolean to the annotation for if theres a video and display a video if the boolean is true"}
        />
      </List>
    </Drawer>
  );
}