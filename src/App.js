import React from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  return (
    <div>
      <h1> Hello, World!</h1>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}

export default App;
