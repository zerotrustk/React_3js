///import React from "react";

/*function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Kumar" />
      <Greeting name="Asha" />
    </div>
  );
}
export default App
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import Navbar from "./components/Navbar";

export function Apps() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
      </main>
    </div>
  );
}

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive={"#468585"} />
      <Sparkles count={100} size={5} speed={0.002} noise={0.2} color="orange" />
    </mesh>
  );
}
const App = () => {
  return (
    <Canvas style={{
      height: "100vh", width: "100vw", display: "flex", justifyContent: "center",
      alignItems: "center"
    }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[2, 2, 2]} intensity={10} color={"white"} />
      <color attach="background" args={["#7a0f0fff"]} />

      <RotatingCube />
    </Canvas>
  )
}

export default App;
*/

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import Navbar from "./components/Navbar";

// Rotating cube component
const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive={"#468585"} />
      <Sparkles count={100} size={5} speed={0.002} noise={0.2} color="orange" />
    </mesh>
  );
};

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* 3D Canvas */}
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight position={[2, 2, 2]} intensity={10} color={"white"} />
        <color attach="background" args={["#7a0f0fff"]} />

        <RotatingCube />
      </Canvas>
    </div>
  );
}

export default App;
