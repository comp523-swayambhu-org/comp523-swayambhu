import React, {useState} from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const { unityProvider, requestPointerLock } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const [onGame, setOnGame] = useState(false);
  const [open, setOpen] = React.useState(true);

  const openTutorial = () => {
    setOpen(true);
  };

  const closeTutorial = () => {
    setOpen(false);
    setOnGame(true);
    requestPointerLock();
  };

  return (
    <div>
      <h1 id='title-bar'> Hello, World!</h1>
      <Dialog
        open={open}
        onClose={closeTutorial}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tutorial"}
        </DialogTitle>
        <DialogContent id="alert-dialog-description">
          <Typography gutterBottom>
            Use WASD to move around.
          </Typography>
          <Typography gutterBottom>
            Double click ESC to freely move cursor.
          </Typography>
          <Typography gutterBottom>
          Notable parts of the Swayambhu are labelled with annotations. Find the annotations in the menu on the right.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTutorial} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
      <Unity 
        unityProvider={unityProvider}
        style={{ height: '100%', width: '100%', visibility: onGame?'visible':'hidden' }}
      />
    </div>
  );
}

export default App;
