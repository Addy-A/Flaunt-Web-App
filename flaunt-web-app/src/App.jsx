import React, { useState } from 'react';
import ModelLoader from './ModelLoader';

function App() {
  const [modelRender, setModelRender] = useState(false);

  const toggleModelRender = () => {
    setModelRender((prev) => !prev);
  };

  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          justifyContent: modelRender ? 'flex-start' : 'center',
          alignItems: modelRender ? 'flex-start' : 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        {modelRender && <ModelLoader />}
        <button
          className="app-button"
          onClick={toggleModelRender}
          style={{
            marginRight: !modelRender ? '20px' : '20px',
          }}
        >
          {modelRender ? 'Close Model Loader' : 'Open Model Loader'}
        </button>
      </div>
    </div>
  );
}

export default App;
