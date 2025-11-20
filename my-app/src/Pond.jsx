// Pond.jsx
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { TextureLoader } from "three"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useEffect } from "react" // Added useEffect hook


function ModelPond() {

    const obj = useLoader(OBJLoader, "/pond/low_poly.obj")
   
    // Load textures (Note: You are loading PNG and JPG/PNG, ensure file names match)
    const [
        baseMap,
        emissiveMap,
        maskMap,
        normalMap,
        specularMap // Using this for Roughness now
    ] = useLoader(TextureLoader, [
        "/pond/pond_low_poly_BaseMap.png",    // Assuming PNG or JPG based on your files
        "/pond/pond_low_poly_Emissive.png",
        "/pond/pond_low_poly_MaskMap.png",
        "/pond/pond_low_poly_Normal.png",
        "/pond/pond_low_poly_Specular.png"
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
  return (
    <div className="w-full h-[500px]">
        <Canvas 
            shadows 
            gl={{ 
                toneMapping: THREE.ReinhardToneMapping, // Softens bright lights
                toneMappingExposure: 1.5, // Brightens the scene slightly
            }}
        >
            <PerspectiveCamera makeDefault position={[6, 6, 6]} fov={35} />
            <OrbitControls makeDefault />

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
  )
}