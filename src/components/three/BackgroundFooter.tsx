'use client'
import * as THREE from "three";
import { Sphere } from "@react-three/drei";
import { footerFragment } from "@/shader/footerFragment";
import { vertex } from "@/shader/vertex";
import { useFrame } from "@react-three/fiber";

export const BackgroundFooter = () => {
  const shader = {
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector4() },
    },
    vertexShader: vertex,
    fragmentShader: footerFragment,
  };

  const v = new THREE.Vector3();
  useFrame((state) => {
    shader.uniforms.time.value += 0.005;
    state.camera.position.lerp(
      v.set(state.pointer.x / 2, state.pointer.y / 2, 1.2),
      0.03,
    );
  });

  return (
    <Sphere args={[1.5, 32, 32]}>
      <shaderMaterial args={[shader]} />
    </Sphere>
  );
};