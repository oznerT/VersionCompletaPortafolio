import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/Robot.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_101.geometry}
        material={materials._051_Polybot}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload('/models/Robot.glb');
