import { useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three"

function FactoryModel() {
  const obj = useLoader(OBJLoader, "factory/factory.obj");
  const texture = useLoader(THREE.TextureLoader, "factory/factory_diffuse.png");

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = true;

  obj.traverse((child) => {
    if (child.isMesh) {
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
  const [open, setOpen] = useState(false)

  return (
    <div className="pb-8">
      <h3 className="font-display text-2xl mb-1">Torch Factory</h3>
      <p className="font-body text-sm mb-3">A personal project modelled in Blender and hand-painted in 3DCoat, inspired by concept art by Ben Marquardt.</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {["Blender", "3DCoat", "Hand-Painted Textures"].map((t) => (
          <span key={t} className="font-body text-xs bg-[#ede8f5] px-2 py-1">{t}</span>
        ))}
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="font-display text-xs text-neutral-400 hover:text-neutral-700 transition mb-4"
      >
        {open ? "▲ Show less" : "▼ Show more"}
      </button>

      {open && (
        <div className="flex flex-col gap-6 mb-6 border-b border-neutral-100 pb-6">
          <p className="font-body text-sm leading-relaxed text-neutral-600">
            The model was built in Blender to closely match the shapes and silhouette of the original concept, then taken into 3DCoat where the textures were fully hand-painted to match the illustrator's style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <img
                src={`${import.meta.env.BASE_URL}factory-concept.jpg`}
                alt="Concept art by Ben Marquardt"
                className="w-full h-auto object-contain rounded-sm"
              />
              <p className="font-body text-xs text-neutral-400 text-center">Concept art — Ben Marquardt</p>
            </div>

            <div className="flex flex-col gap-2">
              <img
                src={`${import.meta.env.BASE_URL}factory-wireframe.png`}
                alt="Wireframe view"
                className="w-full h-auto object-contain rounded-sm"
              />
              <p className="font-body text-xs text-neutral-400 text-center">Wireframe view</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-[400px] cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [6, 6, -10], fov: 20 }}
          gl={{ outputColorSpace: THREE.SRGBColorSpace }}
        >
          <FactoryModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <p className="font-body text-sm text-neutral-400 text-center mt-2">Drag to rotate</p>
    </div>
  );
}
