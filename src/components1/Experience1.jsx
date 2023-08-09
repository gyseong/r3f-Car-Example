import { ContactShadows, Environment, useCursor, CameraControls } from "@react-three/drei"
import { Car3 } from "./Car3"
import { Car2 } from "./Car2"
import { Car1 } from "./Car1"
import { CyberTruck } from "./CyberTruck"
import React, { useRef, useState, useEffect, cloneElement } from 'react'
import { useFrame, useThree } from 'react-three-fiber';
import { useControls, button, folder } from 'leva'
import { useRoute, useLocation } from 'wouter';
import * as THREE from 'three';

export const Experience1 = () => {
    const portal = useRef();

    const controlsRef = useRef();
    const meshRef = useRef();
    console.log(controlsRef);
    const { camera } = useThree()
    const { itemDisplayed } = useControls({
        itemDisplayed: {

            options: ["Car1", "Car2", "Car3", "Car4"],
        },
    })

    const { minDistance, enabled, verticalDragToForward, dollyToCursor, infinityDolly } = useControls({
        setPosition: folder(
            {
                vec2: { value: [-5, 2, 1], label: 'vec' },
                'setPosition(…vec)': button((get) => controlsRef.current?.setPosition(...get('setPosition.vec2'), true))
            },
            { collapsed: true }
        ),
        setTarget: folder(
            {
                vec3: { value: [3, 0, -3], label: 'vec' },
                'setTarget(…vec)': button((get) => controlsRef.current?.setTarget(...get('setTarget.vec3'), true))
            },
            { collapsed: true }
        ),
        setLookAt: folder(
            {
                vec4: { value: [1, 2, 3], label: 'position' },
                vec5: { value: [1, 1, 0], label: 'target' },
                'setLookAt(…position, …target)': button((get) => controlsRef.current?.setLookAt(...get('setLookAt.vec4'), ...get('setLookAt.vec5'), true))
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
                    return controlsRef.current?.lerpLookAt(
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
        ),
        reset: button(() => controlsRef.current?.reset(true)),
        enabled: { value: true, label: 'controls on' },
    })
    const [visibleItem, setVisibleItem] = useState(itemDisplayed);
    const onFadeOut = () => setVisibleItem(itemDisplayed);

    return (
        <>
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
            <ambientLight intensity={0.5} />
            <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />
            <mesh>
                <Car3 ref={meshRef} scale={0.24} position-y={-1} visible={itemDisplayed == "Car1"} onFadeOut={onFadeOut} />
            </mesh>
            <mesh>
                <Car2 ref={meshRef} scale={0.65} position-y={-1} visible={itemDisplayed == "Car2"} onFadeOut={onFadeOut} />
            </mesh>
            <mesh>
                <Car1 ref={meshRef} scale={0.5} position-y={-1} visible={itemDisplayed == "Car3"} onFadeOut={onFadeOut} />
            </mesh>
            <mesh>
                <CyberTruck ref={meshRef} scale={0.5} position-y={-1} visible={itemDisplayed == "Car4"} onFadeOut={onFadeOut} />
            </mesh>
            <Rig />
            <Environment preset="sunset" />
            <ContactShadows position-y={-1} />
        </>
    )
}
function Rig({ position = new THREE.Vector3(3, 3, 3), focus = new THREE.Vector3(0, 0, 0) }) {
    const { controls, scene } = useThree()
    const [, params] = useRoute('/item/:id')
    useEffect(() => {
        const active = scene.getObjectByName(params?.id)
        if (active) {
            active.parent.localToWorld(position.set(0, 0.5, 0.25))
            active.parent.localToWorld(focus.set(0, 0, -2))
        }
        controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    })
    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}

