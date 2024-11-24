import React, { forwardRef } from 'react';
import FD_FACE from '../FD_FACE';
import FD_Foundation_Bronzer from '../FD_Foundation-Bronzer';
import FD_Eye_Smudge from '../FD_Eye_Smudge';
import FD_Blending_Eye_Eyeshadow from '../FD_Blending-Eye_Eyeshadow';
import FD_Browcomb from '../FD_Browcomb';

const BrushDisplay = forwardRef(({ selectedBrush }, ref) => {
  const renderBrush = () => {
    switch (selectedBrush) {
      case 'Face Brush':
        return <FD_FACE ref={ref} />;
      case 'Foundation Brush':
        return <FD_Foundation_Bronzer ref={ref} />;
      case 'Eye Smudge Brush':
        return <FD_Eye_Smudge ref={ref} />;
      case 'Blending Eye Brush':
        return <FD_Blending_Eye_Eyeshadow ref={ref} />;
      case 'Browcomb Brush':
        return <FD_Browcomb ref={ref} />;
      default:
        return null;
    }
  };

  return <group>{renderBrush()}</group>;
});

export default BrushDisplay;
