// src/app/page.tsx
'use client';
import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "@/components/three/Background";
import { SocialLinks } from "@/components/SocialLinks";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [dpr, setDpr] = useState(1);
  const { t } = useLanguage();

  useEffect(() => {
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
        <div>       
             <h1 className="text-3xl md:text-2xl text-white/80 font-light text-drop-shadow-2xl">
              Loading...
              </h1>
            </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-screen w-screen">
        <Canvas camera={camera} dpr={dpr}>
          <Suspense fallback={null}>
            <Background/>
          </Suspense>
        </Canvas>

        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '40px',
            background: 'linear-gradient(0deg, #0a0a0a 0%, #0a0a0a 10%, #0a0a0a 10%, rgba(10, 10, 10, 0) 100%)',
            opacity: '1',
            backdropFilter: 'blur(0.5px)',
            WebkitBackdropFilter: 'blur(0.5px)'
          }}
        />
    
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center items-center justify-center flex mt-5 flex-col gap-5">
            <h1 className="text-3xl md:text-5xl text-white/80 font-light text-drop-shadow-2xl">
              LAWRENCE LONGHI
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-light drop-shadow-lg">
              {t.developer}
            </p>
            <SocialLinks/>
          </div>
        </div>
        <div className="flex flex-col gap-16 mt-12">
          <WorkSection/>
          <AboutSection/>
          <ContactSection/>
        </div>
      </div>
    </>
  );
}