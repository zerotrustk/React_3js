import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import Navbar from "./components/Navbar";

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

export default function App() {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">

      {/* Background 3D Canvas */}
      <Canvas className="absolute inset-0 -z-10">
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight position={[2, 2, 2]} intensity={5} color={"white"} />
        <color attach="background" args={["grey"]} />
        <RotatingCube />
      </Canvas>

      {/* Navbar with glass effect */}
      <header className="fixed top-0 left-0 w-full z-20">
        <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Multidimensional View</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to My 3D Website
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          This is a landing page built with React + Three.js + Tailwind.
        </p>
      </div>
    </div>
  );
}


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
      {/* Navbar *}
      <Navbar />

      {/* 3D Canvas *}
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
*/