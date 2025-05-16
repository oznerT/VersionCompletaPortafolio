import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
const { nodes, materials } = useGLTF('/models/SoccerBall.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GeoSphere001_1.geometry}
        material={materials['02___Default']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GeoSphere001_1_1.geometry}
        material={materials._crayfishdiffuse}
      />
    </group>
  );
}

useGLTF.preload('/models/SoccerBall.glb');
