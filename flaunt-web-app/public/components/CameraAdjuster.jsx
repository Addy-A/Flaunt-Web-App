import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Box3, Vector3 } from 'three';

export default function CameraAdjuster({ selectedBrushRef }) {
  const { camera, controls } = useThree();

  useEffect(() => {
    if (selectedBrushRef.current) {
      const box = new Box3().setFromObject(selectedBrushRef.current);
      const size = new Vector3();
      box.getSize(size);
      const center = new Vector3();
      box.getCenter(center);

      const maxSize = Math.max(size.x, size.y, size.z);
      const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
      const fitWidthDistance = fitHeightDistance / camera.aspect;
      const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance); 

      camera.position.set(center.x, center.y, center.z + distance);
      camera.updateProjectionMatrix();

      if (controls) {
        controls.target.copy(center);
        controls.update();
      }
    }
  }, [selectedBrushRef, camera, controls]);

  return null;
}
