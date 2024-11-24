/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 FD_Eye-Smudge.gltf 
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function FD_Eye_Smudge(props) { // Default export with component name
  const { nodes, materials } = useGLTF('/GLTF_and_bin/FD_Eye-Smudge.gltf');
  return (
    <group {...props} dispose={null} position={[0, 0.05, 0]} scale={2} rotation={[0, Math.PI / 2, 0]}>
      <mesh geometry={nodes.FLAUNTBRUSH_40_EYE_SMUDGE_EYELASH_standard.geometry} material={materials['EPX_150_-_Air_Baked_(with_Carbon_M2_M3_L1_3D_Printers)']} />
      <mesh geometry={nodes.Cylinder001_Cylinder003.geometry} material={materials.brass_pure} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[98.238, 98.238, 63.658]} />
      <mesh geometry={nodes.Mesh_Mesh003.geometry} material={materials.HAIR} position={[0, 0.938, 0]} rotation={[Math.PI / 2, 0, 0]} scale={22.125} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['eye smudger']} position={[0, 1.413, 0]} scale={[0.076, 0.125, 0.122]} />
    </group>
  );
}

useGLTF.preload('/GLTF_and_bin/FD_Eye-Smudge.gltf');
