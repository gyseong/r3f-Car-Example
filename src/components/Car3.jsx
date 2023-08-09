import React, { useRef, useState, useEffect, cloneElement } from 'react'
import { useGLTF, TrackballControls, CameraControls } from '@react-three/drei'
import { useFrame, useThree } from 'react-three-fiber';
import { useControls, button, buttonGroup, folder } from 'leva'
import * as THREE from 'three';

export function Car3(props) {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('models/lamborghini_venevo/scene.gltf')
  const [object43Visible, setObject43Visible] = useState(true);
  const [object19Visible, setObject19Visible] = useState(true);
  const [selectedObject, setSelectedObject] = useState(null);
  const { camera } = useThree();
  const cameraControlsRef = useRef()
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [color, setColor] = useState(new THREE.Color());
  const [originalColor, setOriginalColor] = useState(new THREE.Color());

  useEffect(() => {
    // 컴포넌트가 마운트될 때 원래 색상을 저장
    setOriginalColor(new THREE.Color().copy(materials.engine.color));
  }, [materials]);

  const handleObject43Click = () => {
    setObject43Visible((prevVisible) => !prevVisible); // 토글 기능으로 변경
  };
  const handleObject19Click = () => {
    setObject19Visible((prevVisible) => !prevVisible); // 토글 기능으로 변경
  };
  const handleRestoreObjects = () => {
    setSelectedObject(null);
  };
  const { enabled } = useControls({
    setPosition: folder(
      {
        vec2: { value: [-5, 2, 1], label: 'vec' },
        'setPosition(…vec)': button((get) => cameraControlsRef.current?.setPosition(...get('setPosition.vec2'), true))
      }
    ),
    setTarget: folder(
      {
        vec3: { value: [3, 0, -3], label: 'vec' },
        'setTarget(…vec)': button((get) => cameraControlsRef.current?.setTarget(...get('setTarget.vec3'), true))
      },
      { collapsed: true }
    ),
    setLookAt: folder(
      {
        vec4: { value: [1, 2, 3], label: 'position' },
        vec5: { value: [1, 1, 0], label: 'target' },
        'setLookAt(…position, …target)': button((get) => cameraControlsRef.current?.setLookAt(...get('setLookAt.vec4'), ...get('setLookAt.vec5'), true))
      },
      { collapsed: true }
    ),
    lerpLookAt: folder(
      {
        vec6: { value: [-2, 0, 0], label: 'posA' },
        vec7: { value: [1, 1, 0], label: 'tgtA' },
        vec8: { value: [0, 2, 5], label: 'posB' },
        vec9: { value: [-1, 0, 0], label: 'tgtB' },
        t: { value: Math.random(), label: 't', min: 0, max: 1 },
        'f(…posA,…tgtA,…posB,…tgtB,t)': button((get) => {
          return cameraControlsRef.current?.lerpLookAt(
            ...get('lerpLookAt.vec6'),
            ...get('lerpLookAt.vec7'),
            ...get('lerpLookAt.vec8'),
            ...get('lerpLookAt.vec9'),
            get('lerpLookAt.t'),
            true
          )
        })
      },
      { collapsed: true }
    ), enabled: { value: true, label: 'controls on' },
    reset: button(() => cameraControlsRef.current?.reset(true))
  })
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(({ camera }) => {
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : originalColor), 0.1)
  })
  return (
    <group {...props} ref={meshRef} dispose={null} scale={0.1}>
      <group position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]}>
        <mesh geometry={nodes.Object_10.geometry} onClick={handleRestoreObjects} material={materials.material_3} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Vt_Liu.002']} />
      </group>
      <group position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.lamp} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Vt_Liu} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Vt_Liu.001']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('engine clicked')} material={materials.engine} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.wheel} position={[0.915, 1.325, -4.521]} rotation={[1.578, 0, -0.035]} scale={[-3.653, 3.653, 3.653]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.material_5} position={[0.915, 1.325, -4.521]} rotation={[1.578, 0, -0.035]} scale={[-3.653, 3.653, 3.653]} />
      {object43Visible && (<mesh geometry={nodes.Object_19.geometry} onClick={handleObject19Click} material={materials.material_9} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />)}
      <mesh geometry={nodes.Object_21.geometry} material={materials.material_10} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.material_11} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.material_12} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.glass} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.material_14} position={[0.891, 1.329, -5.196]} rotation={[1.578, 0, -0.035]} scale={[-3.653, 3.653, 3.653]} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.material_15} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.logo} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.material_17} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.material_18} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.material_19} position={[0.891, 1.329, -5.196]} rotation={[1.578, 0, -0.035]} scale={[-3.653, 3.653, 3.653]} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.glass} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />
      {object43Visible && (<mesh geometry={nodes.Object_43.geometry} onClick={handleObject43Click} material={materials.material_20} position={[-1.716, 0.502, 0.053]} rotation={[1.578, 0, -0.035]} scale={[-3.366, 3.366, 3.366]} />)}
      <mesh geometry={nodes.Object_45.geometry} material={materials.wheel} position={[1.266, 1.182, 4.529]} rotation={[1.578, 0, -0.035]} scale={[-3.274, 3.274, 3.274]} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.material_5} position={[1.266, 1.182, 4.529]} rotation={[1.578, 0, -0.035]} scale={[-3.274, 3.274, 3.274]} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.material_14} position={[1.248, 1.185, 4.003]} rotation={[1.578, 0, -0.035]} scale={[-3.031, 3.031, 3.031]} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.material_19} position={[1.248, 1.185, 4.003]} rotation={[1.578, 0, -0.035]} scale={[-3.031, 3.031, 3.031]} />
    </group>
  )
}
//useGLTF.preload('/../public/models/lamborghini_venevo/scene.gltf')
