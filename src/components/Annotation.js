import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VideoLink from './VideoLink';
import { Button } from '@mui/material';
import { useUnityContext } from 'react-unity-webgl';

export default function Annotation({
  num,
  title,
  description = null,
  url = null,
  handleShowLocation,
}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{num + ': ' + title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          {url && <VideoLink url={url} />}
          <Button
            onClick={() => {
              handleShowLocation(num);
            }}
            startIcon={<LocationOnIcon />}
            style={{ marginTop: 5 }}
          >
            View
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
