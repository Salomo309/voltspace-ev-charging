import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function WallboxModel() {
  const group = useRef<THREE.Group>(null!);
  const ledRef = useRef<THREE.MeshStandardMaterial>(null!);
  const rimRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 1.2) * 0.04;
    }
    const pulse = Math.sin(t * 3.0) * 0.3 + 0.7;
    if (ledRef.current) {
      ledRef.current.emissiveIntensity = 1.2 + pulse * 1.8;
    }
    if (rimRef.current) {
      rimRef.current.intensity = 14 + pulse * 8;
    }
  });

  return (
    <group ref={group}>
      {/* pedestal */}
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <cylinderGeometry args={[1.6, 1.8, 0.2, 36]} />
        <meshStandardMaterial color="#111622" roughness={0.85} metalness={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <torusGeometry args={[1.65, 0.02, 16, 64]} />
        <meshBasicMaterial color="#00e699" />
      </mesh>
      {/* pillar */}
      <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.32, 2.6, 0.22]} />
        <meshStandardMaterial color="#161C28" roughness={0.5} metalness={0.6} />
      </mesh>
      {/* wallbox */}
      <group position={[0, 0.45, 0.15]}>
        <mesh castShadow>
          <boxGeometry args={[0.58, 0.86, 0.24]} />
          <meshStandardMaterial color="#1f2736" roughness={0.35} metalness={0.45} />
        </mesh>
        <mesh position={[0, 0, 0.125]}>
          <boxGeometry args={[0.52, 0.8, 0.02]} />
          <meshStandardMaterial color="#080c14" roughness={0.12} metalness={0.95} />
        </mesh>
        <mesh position={[0, 0.26, 0.14]}>
          <boxGeometry args={[0.38, 0.025, 0.015]} />
          <meshStandardMaterial ref={ledRef} color="#00e699" emissive="#00e699" emissiveIntensity={2} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0.08, 0.14]}>
          <boxGeometry args={[0.24, 0.16, 0.01]} />
          <meshStandardMaterial color="#0d131f" roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.08, 0.148]}>
          <torusGeometry args={[0.04, 0.005, 12, 32]} />
          <meshBasicMaterial color="#00d2ff" toneMapped={false} />
        </mesh>
        <mesh position={[0, -0.22, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 24]} />
          <meshStandardMaterial color="#111622" roughness={0.7} metalness={0.3} />
        </mesh>
        <mesh position={[0, -0.22, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 24]} />
          <meshBasicMaterial color="#00e699" toneMapped={false} />
        </mesh>
        <mesh position={[-0.16, 0.34, 0.14]}>
          <boxGeometry args={[0.14, 0.025, 0.015]} />
          <meshBasicMaterial color="#ff0033" toneMapped={false} />
        </mesh>
      </group>
      <pointLight ref={rimRef} position={[-2.5, 2.0, -1.0]} color="#00e699" intensity={18} distance={10} />
      <pointLight position={[2.5, -0.5, 2.5]} color="#00d2ff" intensity={12} distance={10} />
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
  });
  const positions = useMemo(() => {
    const arr = new Float32Array(140 * 3);
    for (let i = 0; i < 140 * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 5;
      arr[i + 1] = Math.random() * 3.5 - 1.2;
      arr[i + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#00e699" transparent opacity={0.65} />
    </points>
  );
}

export default function Charger3D() {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[520px] rounded-xl overflow-hidden bg-[#0a0e16] border border-white/5">
      <Canvas shadows camera={{ position: [2.8, 1.4, 3.8], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }} performance={{ min: 0.5 }}>
        <ambientLight intensity={1.4} color="#0a1526" />
        <directionalLight position={[4, 6, 4]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
        <WallboxModel />
        <Particles />
        <ContactShadows position={[0, -1.62, 0]} opacity={0.6} scale={6} blur={2.4} far={3} color="#000" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} minPolarAngle={Math.PI / 3.2} maxPolarAngle={Math.PI / 1.7} />
      </Canvas>
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1.5 rounded bg-white/5 backdrop-blur border border-white/10 text-[11px] font-mono flex items-center gap-2 max-w-[calc(100%-24px)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00e699] animate-pulse shrink-0" />
        <span className="truncate">32A • 230V • LIVE TELEMETRY</span>
      </div>
      <div className="absolute bottom-14 sm:bottom-24 left-3 z-10 p-2 rounded sm:p-2.5 sm:rounded bg-white/5 backdrop-blur border border-white/10 text-[10px] sm:text-[11px]">
        <div className="opacity-60">Junction Temp</div>
        <div className="font-bold">28.4°C Nominal</div>
      </div>
      <div className="absolute bottom-14 sm:bottom-6 right-3 z-10 p-2 rounded sm:p-2.5 sm:rounded bg-white/5 backdrop-blur border border-white/10 text-[10px] sm:text-[11px] text-right">
        <div className="opacity-60">Grid DLM</div>
        <div className="font-bold text-[#00e699]">Load Balancing Active</div>
      </div>
      <div className="absolute bottom-2 left-3 right-3 flex justify-between gap-2 text-[10px] sm:text-[11px] font-mono opacity-60">
        <span className="truncate">Drag to rotate 360°</span>
        <span className="text-[#00e699] shrink-0 hidden min-[380px]:inline">Real-time Solid Model</span>
      </div>
    </div>
  );
}
