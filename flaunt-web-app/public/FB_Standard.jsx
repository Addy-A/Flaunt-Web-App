/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 FB_4.0_Standard.gltf 
*/

import React from 'react'
import { Center, useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/GLTF_and_bin/FB_4.0_Standard.gltf')
  return (
    <group {...props} dispose={null}>
        <mesh 
        castShadow
        geometry={nodes.Flaunt_Receiver.geometry} 
        material={materials['Powder Coat (Black)']} 
        scale={[0.65, 0.65, 0.65]} 
        position={[0, 0.125, 0]}  
        />
      </group>
  )
}

useGLTF.preload('/FB_4.0_Standard.gltf')
