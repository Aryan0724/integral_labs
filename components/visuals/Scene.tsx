"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingSphere({ position, color, size, speed }: { position: [number, number, number], color: string, size: number, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.002;
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={0.4}
          radius={1}
          opacity={0.15}
          transparent
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingSphere position={[-5, 3, -5]} color="#4f46e5" size={2} speed={1.2} />
        <FloatingSphere position={[5, -2, -8]} color="#9333ea" size={3} speed={0.8} />
        <FloatingSphere position={[0, -5, -6]} color="#2563eb" size={2.5} speed={1.5} />
      </Canvas>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

export default Scene;
