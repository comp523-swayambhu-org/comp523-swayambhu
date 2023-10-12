import React, {useState, useRef} from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Typography } from '@mui/material';
import Tutorial from './components/Tutorial.js';
import Bar from './components/Bar.js';
import AnnotationList from './components/AnnotationList';

function App() {
  const { unityProvider, requestPointerLock } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const [tutorialIsOpen, setTutorialIsOpen] = useState(true);
  const [listOpen, setListOpen] = useState(false);
  const unityRef = useRef(null);

  const openTutorial = () => {
    setTutorialIsOpen(true);
  }

  const closeTutorial = () => {
    setTutorialIsOpen(false);
  };

  const menuClick = () => {
    setListOpen(!listOpen);
  };

  document.addEventListener('pointerlockerror', (event) => {
    console.log('error locking pointer')
  });

  return (
    <div>
      <Bar 
        openHelp={openTutorial} 
        menuClick={menuClick}  
        menuOpened={listOpen}
      />
      <Tutorial open={tutorialIsOpen} onClose={closeTutorial} />
      <AnnotationList open={listOpen} />
      <Typography 
        variant='h6' 
        style={{position: 'absolute', left: 0, bottom: 0}} 
        color="white"
        mx={2}
        my={2}
      >
        Press 'ESC' twice to free cursor.
      </Typography>
      <div 
        ref={unityRef}
        onClick={() => {requestPointerLock()}}
      >
        <Unity
          unityProvider={unityProvider}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
}

export default App;
