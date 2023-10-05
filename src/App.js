import React, {useState, useRef} from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import Tutorial from './Tutorial.js';
import Bar from './Bar.js';

function App() {
  const { unityProvider, requestPointerLock } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const [tutOpen, setTutOpen] = useState(true);
  const unityRef = useRef(null);

  const openTutorial = () => {
    setTutOpen(true);
  }

  const closeTutorial = () => {
    setTutOpen(false);
  };

  document.addEventListener('pointerlockerror', (event) => {
    console.log('error locking pointer')
  });

  return (
    <div>
      <Bar openHelp={openTutorial} />
      <Tutorial open={tutOpen} onClose={closeTutorial} />
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
