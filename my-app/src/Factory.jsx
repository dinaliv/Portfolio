import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";   
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader, MeshBasicMaterial } from "three";

function FactoryModel() {
  // Load OBJ model
  const obj = useLoader(OBJLoader, "/factory/factory.obj");

  // Load texture
  const texture = useLoader(TextureLoader, "/factory/factory_diffuse.png");

  // Apply texture to all child meshes
  obj.traverse((child) => {
    if (child.isMesh) {
      // Use Basic material for flat, cartoon-like appearance
      child.material = new MeshBasicMaterial({
        map: texture,
        
      });
      
    }
  });

  return <primitive object={obj} scale={0.2} />;
}

export default function Factory() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [6, 6, -10], fov: 20 }}>
        

        <FactoryModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
}


