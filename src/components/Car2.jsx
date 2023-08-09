/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 public/models/lamborghini_-_ferzor/scene.gltf -o src/components/Car2.jsx -r public
Author: sinnik (https://sketchfab.com/sinnik)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-ferzor-3f415397029e4633a8f2c0fc583d7c6b
Title: Lamborghini - Ferzor
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Car2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models/lamborghini_-_ferzor/scene.gltf')
  const { actions } = useAnimations(animations, group);

  return (
    <group {...props} dispose={null} scale={0.3} rotation-y={-Math.PI/2}>
      <group scale={0.01}>
        <group position={[0, 46.864, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[-2.299, 1.394, 0.018]}>
            <mesh geometry={nodes.BKL_wire_000000000_0.geometry} material={materials.wire_000000000} />
            <mesh geometry={nodes.BKL_Strips_0.geometry} material={materials.Strips} />
            <mesh geometry={nodes.BKL_glass_wheel_0.geometry} material={materials.glass_wheel} />
          </group>
          <group position={[1.489, 1.362, -0.015]}>
            <mesh geometry={nodes.FTL_wire_000000000_0.geometry} material={materials.wire_000000000} />
            <mesh geometry={nodes.FTL_Strips_0.geometry} material={materials.Strips} />
            <mesh geometry={nodes.FTL_glass_wheel_0.geometry} material={materials.glass_wheel} />
          </group>
          <group position={[1.489, -1.372, -0.015]}>
            <mesh geometry={nodes.FTR_wire_000000000_0.geometry} material={materials.wire_000000000} />
            <mesh geometry={nodes.FTR_Strips_0.geometry} material={materials.Strips} />
            <mesh geometry={nodes.FTR_glass_wheel_0.geometry} material={materials.glass_wheel} />
          </group>
          <group position={[-2.299, -1.394, 0.018]}>
            <mesh geometry={nodes.BKR_wire_000000000_0.geometry} material={materials.wire_000000000} />
            <mesh geometry={nodes.BKR_Strips_0.geometry} material={materials.Strips} />
            <mesh geometry={nodes.BKR_glass_wheel_0.geometry} material={materials.glass_wheel} />
          </group>
          <group position={[0.457, 0.439, 0.363]}>
            <mesh geometry={nodes.steerwheel_logo001_0.geometry} material={materials['logo.001']} />
            <mesh geometry={nodes.steerwheel_wire_000000000_0.geometry} material={materials.wire_000000000} />
            <mesh geometry={nodes.steerwheel_Strips_0.geometry} material={materials.Strips} />
            <mesh geometry={nodes.steerwheel_metal_0.geometry} material={materials.metal} />
            <mesh geometry={nodes.steerwheel_redlight_0.geometry} material={materials.redlight} />
            <mesh geometry={nodes.steerwheel_red_0.geometry} material={materials.material} />
          </group>
          <mesh geometry={nodes.Terzo_wire_000000000_0.geometry} material={materials.wire_000000000} />
          <mesh geometry={nodes.Terzo_wire_000000000_0_1.geometry} material={materials.wire_000000000} />
          <mesh geometry={nodes.Terzo_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.Terzo_glass_0.geometry} material={materials.glass} />
          <mesh geometry={nodes.Terzo_Strips_0.geometry} material={materials.Strips} />
          <mesh geometry={nodes.Terzo_redlight_0.geometry} material={materials.redlight} />
          <mesh geometry={nodes.Terzo_logo_0.geometry} material={materials.logo} />
          <mesh geometry={nodes.Terzo_back_0.geometry} material={materials.back} />
          <mesh geometry={nodes.Terzo_glass_wheel_0.geometry} material={materials.glass_wheel} />
          <mesh geometry={nodes.Terzo_Material011_0.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Terzo_tore_0.geometry} material={materials.tore} />
        </group>
      </group>
    </group>
  )
}

//useGLTF.preload('/models/lamborghini_-_ferzor/scene.gltf')