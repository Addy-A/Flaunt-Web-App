import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { Stage, Grid, OrbitControls, Environment } from '@react-three/drei';
import RecenterButton from '../public/components/RecenterButton';
import BrushDisplay from '../public/components/BrushDisplay';
import BrushSwitcher from '../public/components/BrushSwitcher';
import HandleDisplay from '../public/components/HandleDisplay';
import CameraAdjuster from '../public/components/CameraAdjuster';

function ModelLoader() {
  const orbitRef = useRef();
  const [selectedBrush, setSelectedBrush] = useState('Face Brush');
  const selectedBrushRef = useRef();

  return (
    <div className="App">
      <Canvas
        flat
        shadows
        camera={{
          position: [25, 5, 25],
          fov: 18
        }}>
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[15, 0, 10]}
          intensity={0.25} />
        <Stage
          intensity={0.5}
          environment="city"
          adjustCamera={false}
          fog={false}>
          <OrbitControls
            ref={orbitRef}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableZoom={true}
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
          {selectedBrush && <BrushDisplay selectedBrush={selectedBrush} />}
          <HandleDisplay />
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1.25} mipmapBlur />
            <ToneMapping />
          </EffectComposer>
          <Environment background preset="sunset" backgroundBlurriness={1} />
          <CameraAdjuster selectedBrushRef={selectedBrushRef} />
        </Stage>
      </Canvas>
      <div className="BoxOverlay">
        <RecenterButton orbitRef={orbitRef} />
        <BrushSwitcher onSelectBrush={setSelectedBrush} />
      </div>
    </div>
  );
}

export default ModelLoader;
