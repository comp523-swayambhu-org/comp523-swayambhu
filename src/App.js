import React, { useState, useRef } from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Typography } from '@mui/material';
import Tutorial from './components/Tutorial.js';
import Bar from './components/Bar.js';
import AnnotationList from './components/AnnotationList';

function App() {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const handleShowLocation = (num) => {
    console.log(num);
    sendMessage('0_annotation_camera', 'SetLocation', num);
  };

  const [tutorialIsOpen, setTutorialIsOpen] = useState(true);
  const [listIsOpen, setListIsOpen] = useState(false);

  const openTutorial = () => {
    setTutorialIsOpen(true);
  };

  const closeTutorial = () => {
    setTutorialIsOpen(false);
  };

  const menuClick = () => {
    setListIsOpen(!listIsOpen);
  };

  document.addEventListener('pointerlockerror', () => {
    console.log('error locking pointer');
  });

  return (
    <div>
      <Bar
        openHelp={openTutorial}
        menuClick={menuClick}
        menuOpened={listIsOpen}
      />
      <Tutorial open={tutorialIsOpen} onClose={closeTutorial} />
      <AnnotationList open={listIsOpen} handleShowLocation={handleShowLocation} />
      <Typography
        variant="h6"
        style={{ position: 'absolute', left: 0, bottom: 0 }}
        color="white"
        mx={2}
        my={2}
      >
        Press 'ESC' twice to free cursor.
      </Typography>
      <div>
        <Unity
          unityProvider={unityProvider}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
}

export default App;
