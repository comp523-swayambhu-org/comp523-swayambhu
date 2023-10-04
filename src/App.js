import React, {useState} from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';

function App() {
  const { unityProvider, requestPointerLock } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const [onGame, setOnGame] = useState(false);
  function handleClick() {
    setOnGame(true);
    requestPointerLock();
  }

  return (
    <div>
      <h1 id='title-bar'> Hello, World!</h1>
      <div style = {{ height: '100%', width: '100%', position: 'absolute', visibility: onGame?'hidden':'visible'}}
        onClick={() => handleClick()} >
          <h1 style={{height: 'fit-content', width: 'fit-content', paddingTop: '45vh', paddingLeft: '35vw'}}>click to start game</h1>
      </div>
      <Unity 
        unityProvider={unityProvider}
        style={{ height: '100%', width: '100%', visibility: onGame?'visible':'hidden' }}
      />
    </div>
  );
}

export default App;
