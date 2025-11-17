import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";   
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three"

function FactoryModel() {
  // Load OBJ model
  const obj = useLoader(OBJLoader, "/factory/factory.obj");

  // Load texture
  const texture = useLoader(THREE.TextureLoader, "/factory/factory_diffuse.png");

  texture.colorSpace = THREE.SRGBColorSpace;                 // correct colors
  texture.flipY = true;  
  
  // Apply texture to all child meshes
  obj.traverse((child) => {
    if (child.isMesh) {
      // Use Basic material for flat, cartoon-like appearance
      child.material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={obj} scale={0.2} />;
}

export default function Factory() {
  return (
    <div className="w-full h-[500px]">
      <Canvas 
        camera={{ position: [6, 6, -10], fov: 20 }}
        gl={{ outputColorSpace: THREE.SRGBColorSpace }} 
      >
        

        <FactoryModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
}


