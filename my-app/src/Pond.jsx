// Pond.jsx
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { TextureLoader } from "three"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useEffect, useState } from "react"


function ModelPond() {

    const obj = useLoader(OBJLoader, "pond/low_poly.obj")
   
    // Load textures (Note: You are loading PNG and JPG/PNG, ensure file names match)
    const [
        baseMap,
        emissiveMap,
        maskMap,
        normalMap,
        specularMap // Using this for Roughness now
    ] = useLoader(TextureLoader, [
        "pond/pond_low_poly_BaseMap.png",    // Assuming PNG or JPG based on your files
        "pond/pond_low_poly_Emissive.png",
        "pond/pond_low_poly_MaskMap.png",
        "pond/pond_low_poly_Normal.png",
        "pond/pond_low_poly_Specular.png"
    ])

    // --- TEXTURE PRE-PROCESSING ---

    // 1. Color Space: Fix base and emissive maps (the color textures)
    baseMap.colorSpace = THREE.SRGBColorSpace
    emissiveMap.colorSpace = THREE.SRGBColorSpace
  
    // Mipmaps were correct, but now we add Anisotropy for oblique angles
    baseMap.minFilter = THREE.LinearMipmapLinearFilter 

    // *** ADDED: FIX TEXTURE WRAPPING MODE ***
    baseMap.wrapS = THREE.RepeatWrapping
    baseMap.wrapT = THREE.RepeatWrapping
 

    // 2. Ambient Occlusion (AO): Extract Green channel (index 1) from the MaskMap
    const aoTexture = maskMap.clone()
    aoTexture.channel = 1 // 0=R, 1=G, 2=B. Green is AO.
    aoTexture.needsUpdate = true
  

    // --- MATERIAL APPLICATION ---
  
    useEffect(() => {
        obj.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    map: baseMap,
                    normalMap: normalMap,
                    emissiveMap: emissiveMap,
                    emissive: new THREE.Color("#ffffff"), 
                    // INTENSITY IS KEY: Values > 1.0 combined with Bloom create the glow
                    emissiveIntensity: 2.2,
          
                    // AMBIENT OCCLUSION
                    aoMap: aoTexture, 
                    aoMapIntensity: 1.0,
          
                    // For that stylized "clay" look on the rocks
                    roughness: 0.42, 
                    metalness: 0.0,
          
                    
                    side: THREE.DoubleSide,
                })
        
                // This is necessary for aoMap to work in Three.js
                if (child.geometry.attributes.uv) {
                    child.geometry.setAttribute('uv2', child.geometry.attributes.uv);
                }

                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }, [obj, baseMap, emissiveMap, normalMap, aoTexture, specularMap])

    return <primitive object={obj} scale={0.61} />
}

export default function Pond(){
  const [open, setOpen] = useState(false)

  return (
    <div className="py-8">
        <h3 className="font-display text-2xl mb-1">Mystic Pond</h3>
        <p className="font-body text-sm mb-3">A personal project sculpted and modelled in Blender, with custom materials created in Adobe Substance 3D Painter to achieve a glowing water effect.</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {["Blender", "Adobe Substance 3D Painter", "High-to-Low Baking"].map((t) => (
            <span key={t} className="font-body text-xs bg-[#ede8f5] px-2 py-0.5">{t}</span>
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
              The key challenge was achieving the glowing water effect. The water and stone materials were built from scratch in Adobe Substance 3D Painter. Both the rocks and the water surface were first sculpted in high poly in Blender, then baked onto a low-poly mesh.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src={`${import.meta.env.BASE_URL}pond-concept.jpg`}
                  alt="Concept art"
                  className="w-full h-auto object-contain rounded-sm"
                />
                <p className="font-body text-xs text-neutral-400 text-center">Concept art</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-full aspect-video bg-neutral-100 flex items-center justify-center rounded-sm">
                  <span className="font-body text-xs text-neutral-300">Sculpt — coming soon</span>
                </div>
                <p className="font-body text-xs text-neutral-400 text-center">High poly sculpt</p>
              </div>

              <div className="flex flex-col gap-2">
                <img
                  src={`${import.meta.env.BASE_URL}pond-render.jpg`}
                  alt="Final render"
                  className="w-full h-auto object-contain rounded-sm"
                />
                <p className="font-body text-xs text-neutral-400 text-center">Final render</p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-[400px] cursor-grab active:cursor-grabbing">
            <Canvas 
                shadows 
                gl={{ 
                    toneMapping: THREE.ReinhardToneMapping, // Softens bright lights
                    toneMappingExposure: 1.5, // Brightens the scene slightly
                }}
            >
                <PerspectiveCamera makeDefault position={[6, 6, 6]} fov={35} />
                <OrbitControls makeDefault enableZoom={false} />

                {/* --- LIGHTING SETUP (The "Night" Look) --- */}
            
                {/* 1. Ambient Light: Purple/Blue to tint the shadows/rocks */}
                <ambientLight intensity={0.8} color="#4c4c8a" />

                {/* 2. Main Light: Cool Blue/Cyan moonlight */}
                <directionalLight 
                    position={[5, 10, 5]} 
                    intensity={2.5} 
                    color="#d2c0eb"
                    castShadow 
                    shadow-bias={-0.001}
              
              
                />
            
                {/* 3. Fill Light: Soft backlight to separate rocks from background */}
                <pointLight position={[0.2, 0, 0.1]} intensity={1} color="#a864e3" distance={20} />

                <ModelPond />

                {/* --- POST PROCESSING --- */}
                <EffectComposer disableNormalPass>
                    <Bloom 
                        luminanceThreshold={0.6} // Only glow things brighter than 1.0 (The emissive parts)
                        mipmapBlur // Makes the glow soft like the render
                        intensity={1} // Strength of the glow
                        radius={0.6} // How far the glow spreads
                    />
                </EffectComposer>

            
            </Canvas>
        </div>   
        <p className="font-body text-sm text-neutral-400 text-center mt-2">Drag to rotate</p>
    </div>
    
  )
}