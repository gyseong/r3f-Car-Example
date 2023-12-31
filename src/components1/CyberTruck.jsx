import { shaderMaterial, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useControls } from "leva";


export function CyberTruck(props) {
    const { nodes, materials } = useGLTF('./models/tesla_cybertruck/scene.gltf');
    const ref = useRef();

    const stripesControls = useControls("stripes", {
        colorA : "#FF0000",

    })
    useEffect(() => {
        materials.lights.toneMapped = false;
        materials.warninglights.toneMapped = false;
        materials.warninglights.color = new THREE.Color(82, 0, 0);
    });
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.interior001.geometry} material={materials.lights} />
            <mesh geometry={nodes.interior001_1.geometry} castShadow>
                <meshStandardMaterial {...materials.body} />
            </mesh>
            <mesh geometry={nodes.interior001_2.geometry}>
                <meshStandardMaterial
                    opacity={0.92}
                    envMapIntensity={1}
                    transparent
                    roughness={0.2}
                    color={"black"}
                />
            </mesh>
            <mesh
                geometry={nodes.interior001_3.geometry}
                material={materials.glassframes}
                castShadow
            />
            <mesh
                geometry={nodes.interior001_4.geometry}
                material={materials.warninglights}
            />
            <mesh
                geometry={nodes.interior001_5.geometry}
                material={materials.black}
                castShadow
            />
            {/* BODY MESH -> SHADER */}
            <mesh geometry={nodes.interior001_6.geometry}>
                <meshBasicMaterial transparent color={stripesControls.colorA}/>
            </mesh>

            <mesh geometry={nodes.steer.geometry} material={materials.gray} />
            <mesh
                geometry={nodes.tires001.geometry}
                material={materials.tires}
                castShadow
            />
            <mesh
                geometry={nodes.tires001_1.geometry}
                material={materials.rims}
                castShadow
            />
        </group>
    );
}