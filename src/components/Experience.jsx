import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture, Text, CameraControls, ContactShadows } from "@react-three/drei";
import * as THREE from 'three'
import gsap from "gsap";
import { Car1 } from "./Car1.jsx"
import { Car2 } from "./Car2.jsx"
import { Car3 } from "./Car3.jsx"
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { easing } from "maath";
import {useControls, button, buttonGroup, folder} from 'leva'
export const Experience = () => {
    const [active, setActive] = useState(null);
    const [hovered, setHover] = useState(null);
    const controlsRef = useRef();
    const scene = useThree((state) => state.scene);
  
    useEffect(() => {
        if (active) {
            const targetPosition = new THREE.Vector3();
            scene.getObjectByName(active).getWorldPosition(targetPosition);
            controlsRef.current.setLookAt(
                -1.85, 1.87, 1.55, targetPosition.x, targetPosition.y, targetPosition.z, true
            )
        } else {
            controlsRef.current.setLookAt(
                0, 0, 7, 0, 0, 0, true
            )
        }
    }, [active]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />
            <Stage texture={"textures/3d-dark-grunge-display-background-with-smoky-atmosphere.jpg"}
                name="Cobra-427"
                color={"#df8d52"}
                active={active}
                setActive={setActive}
                hovered={hovered}
                setHover={setHover}>
                <Car1 scale={0.6} hovered={hovered === "Cobra-427"}/>
                
            </Stage>
            <Stage texture={"textures/3d-dark-grunge-display-background-with-smoky-atmosphere.jpg"} position-x={-2.5}
                rotation-y={Math.PI / 8}
                name="Ferzor"
                color={"#df8d52"}
                active={active}
                setActive={setActive}
                hovered={hovered}
                setHover={setHover}>
                <Car2 scale={0.4} hovered={hovered === "Ferzor"} />
            </Stage>
            <Stage texture={"textures/3d-dark-grunge-display-background-with-smoky-atmosphere.jpg"} position-x={2.5}
                rotation-y={-Math.PI / 8}
                name="Veneno"
                color={"#df8d52"}
                active={active}
                setActive={setActive}
                hovered={hovered}
                setHover={setHover}>
                <Car3 scale={0.6} hovered={hovered === "Veneno"} />
            </Stage>
        </>
    )
};

const Stage = ({ children, texture, name, color, active, setActive, hovered, setHover, ...props }) => {
    const map = useTexture(texture);
    const portalMaterial = useRef();
    const shiningRed = new THREE.Color(4.8, 0.1, 0.1);

    useFrame((_state, delta) => {
        const worldOpen = active === name;
        easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta)

    })
    return (<group {...props}>
        <Text font="font/Caprasimo-Regular.ttf" fontSize={0.3} position={[0, -1.3, 0.051]} anchorY={"bottom"}>
            {name}
            <meshBasicMaterial color={color} toneMapped={false} />
        </Text>
        <RoundedBox name={name}
            args={[2, 3, 0.1]} onDoubleClick={() => setActive(active === name ? null : name)}
            onPointerEnter={() => setHover(name)}
            onPointerLeave={() => setHover(null)}>
            <MeshPortalMaterial side={THREE.DoubleSide} ref={portalMaterial}>
                <ambientLight intensity={1} />
                <Environment preset="sunset" />
                {children}
                <mesh>
                    <sphereGeometry args={[5, 32, 32]} />
                    <meshStandardMaterial map={map} side={THREE.BackSide} />
                </mesh>
                <hemisphereLight intensity={0.5} />
            </MeshPortalMaterial>
        </RoundedBox>

    </group>)
}