import React, { useEffect, useState } from 'react';

export default function ModelSwitcher({ onSelectModel }) {
  const models = ['vortex', 'standard', 'hearts', 'complete-standard'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectModel = (index) => {
    setCurrentIndex(index);
    onSelectModel(models[index]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % models.length;
    selectModel(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + models.length) % models.length;
    selectModel(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="model-switcher">
      <button onClick={handlePrevious}>⬅️</button>
      <button onClick={handleNext}>➡️</button>
    </div>
  );
}
