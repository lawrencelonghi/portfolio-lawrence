'use client';
import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "@/components/three/Background";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {

  const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.001,
  1000,
    );
  camera.position.set(0, 0, 1.3);

  return (
    <div className="relative h-screen w-screen">
      <CustomCursor />
      <Canvas camera={camera} dpr={Math.min(window.devicePixelRatio, 6)}>
        <Suspense fallback={null}>
          <Background/>
        </Suspense>
      </Canvas>
  
      <Navbar/>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center flex flex-col">
          <h1 className="text-3xl md:text-5xl  text-white/70 font-light text-drop-shadow-2xl">
            LAWRENCE LONGHI
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light  mt-4 drop-shadow-lg">
            Desenvolvedor Full Stack
          </p>
        </div>
      </div>

    </div>
  );
}
