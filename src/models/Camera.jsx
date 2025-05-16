import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/Camera.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camera_mesh.geometry}
        material={materials.Camera_mat1}
      />
    </group>
  );
}

useGLTF.preload('/models/Camera.glb');
