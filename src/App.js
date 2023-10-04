import React, {useState} from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import Tutorial from './Tutorial.js'

function App() {
  const { unityProvider, requestPointerLock } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const [onGame, setOnGame] = useState(false);
  const [tutOpen, setTutOpen] = useState(true);

  const closeTutorial = () => {
    setTutOpen(false);
    setOnGame(true);
    requestPointerLock();
  };

  return (
    <div>
      <h1 id='title-bar'> Hello, World!</h1>
      <Tutorial open={tutOpen} onClose={closeTutorial}/>
      <Unity 
        unityProvider={unityProvider}
        style={{ height: '100%', width: '100%', visibility: onGame?'visible':'hidden' }}
      />
    </div>
  );
}

export default App;
