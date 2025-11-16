// Factory.jsx
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";   // ← correct
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";

function FactoryModel() {
  // Load OBJ model
  const obj = useLoader(OBJLoader, "/factory/factory.obj");

  // Load texture
  const texture = useLoader(TextureLoader, "/factory/factory_diffuse.png");

  // Apply texture to all child meshes
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={obj} scale={1} />;
}

export default function Factory() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <FactoryModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
}


