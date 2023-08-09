import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Experience1 } from "./components1/Experience1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience1/>
    </Canvas>
  );
}

export default Main;
