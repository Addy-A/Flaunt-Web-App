import React, { useState } from 'react';
import FB_Standard from '../FB_Standard';

export default function ModelDisplay({ selectedModel }) {
  const renderModel = () => {
    switch (selectedModel) {
      case 'complete-standard':
        return <FB_Standard />;
      default:
        return <FB_Standard />;
    }
  };

  return <group>{renderModel()}</group>;
}
