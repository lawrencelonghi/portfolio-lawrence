'use client';
import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "@/components/three/Background";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { SocialLinks } from "@/components/SocialLinks";
import { Lens } from "@/components/three/Lens";

export default function Home() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    // Esta função só roda no cliente
    const newCamera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000,
    );
    newCamera.position.set(0, 0, 1.3);
    setCamera(newCamera);
    setDpr(Math.min(window.devicePixelRatio, 6));
  }, []);

  if (!camera) {
    return (
      <div className="relative h-screen w-screen flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen">
      <CustomCursor />
      <Canvas camera={camera} dpr={dpr}>
        <Suspense fallback={null}>
          <Background/>
          <Lens/>
        </Suspense>
      </Canvas>
  
      <Navbar/>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center items-center justify-center flex mt-5 flex-col gap-5 ">
          <h1 className="text-3xl md:text-5xl text-white/70 font-light text-drop-shadow-2xl">
            LAWRENCE LONGHI
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light drop-shadow-lg">
            Full Stack Developer
          </p>
          <SocialLinks/>
        </div>
      </div>
    </div>
  );
}