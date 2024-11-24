import React from 'react';

export default function BrushSwitcher({ onSelectBrush }) {
  return (
    <div className="brush-switcher">
      <button onClick={() => onSelectBrush('Face Brush')}>Face Brush</button>
      <button onClick={() => onSelectBrush('Foundation Brush')}>Foundation Brush</button>
      <button onClick={() => onSelectBrush('Eye Smudge Brush')}>Eye Smudge Brush</button>
      <button onClick={() => onSelectBrush('Blending Eye Brush')}>Blending Eye Brush</button>
      <button onClick={() => onSelectBrush('Browcomb Brush')}>Browcomb Brush</button>
      <button onClick={() => onSelectBrush('')}>None</button>
    </div>
  );
}
