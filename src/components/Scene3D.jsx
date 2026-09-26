import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";

function Shapes() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.6}>
        <Sphere args={[1.1, 64, 64]} position={[2.4, 0.6, -2]}>
          <MeshDistortMaterial color="#c9b4fa" distort={0.4} speed={1.6} roughness={0.15} metalness={0.3} />
        </Sphere>
      </Float>

      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={1.2}>
        <Torus args={[0.85, 0.28, 32, 100]} position={[-2.6, -0.8, -1.5]} rotation={[0.6, 0.4, 0]}>
          <MeshDistortMaterial color="#8f7bd6" distort={0.25} speed={1.2} roughness={0.2} metalness={0.4} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
        <Icosahedron args={[0.65, 0]} position={[0.6, 1.4, -1]}>
          <meshStandardMaterial color="#0e3030" roughness={0.3} metalness={0.5} />
        </Icosahedron>
      </Float>

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} color="#c9b4fa" />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#0e3030" />
    </>
  );
}

export default function Scene3D({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.6]}>
        <Suspense fallback={null}>
          <Shapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
