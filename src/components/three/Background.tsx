'use client'
import { useRef, useMemo } from 'react'
import * as THREE from "three";
import { Sphere } from "@react-three/drei";
import { fragment } from "@/shader/fragment"
import { vertex } from "@/shader/vertex";
import { useFrame } from "@react-three/fiber";

export const Background = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const v = useRef(new THREE.Vector3()); // evita recriar a cada frame

  // useMemo evita recriar o objeto shader a cada re-render
  const shader = useMemo(() => ({
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector4() },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += 0.005;
    }
    
    state.camera.position.lerp(
      v.current.set(state.pointer.x / 2, state.pointer.y / 2, 1.2),
      0.03,
    );
  });

  return (
    // Reduzir segmentos da esfera: 32,32 → 20,20 (imperceptível visualmente)
    <Sphere args={[1.5, 20, 20]}>
      <shaderMaterial ref={materialRef} args={[shader]} />
    </Sphere>
  );
};