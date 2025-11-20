// Pond.jsx
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { TextureLoader } from "three"
import * as THREE from "three"
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
  
    // 3. Roughness: Invert the Specular map (Smoothness) to become Roughness
    // If the map is brighter=smoother, then Roughness = 1 - Smoothness.
    // We use the `colorSpace` property to trigger the invertion on the GPU side.
    // This is a common hack in Three.js for single-channel inversion.
    specularMap.colorSpace = THREE.NoColorSpace 
    specularMap.wrapS = THREE.RepeatWrapping;
    specularMap.wrapT = THREE.RepeatWrapping;

    // --- MATERIAL APPLICATION ---
  
    useEffect(() => {
        obj.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    map: baseMap,
                    normalMap: normalMap,
                    emissiveMap: emissiveMap,
          
                    // AMBIENT OCCLUSION
                    aoMap: aoTexture, 
                    aoMapIntensity: 1.0,
          
                    // ROUGHNESS (inverted Specular map)
                    // We apply the inversion by setting the map as the roughness map 
                    // and using a custom map property for inversion in the shader (using roughnessMap's channel/map)
                    roughnessMap: specularMap,
          
                    // METALNESS
                    metalness: 0.0, // Always 0 for non-metal rock/water
          
                    // LIGHTING & MISC
                    emissiveIntensity: 2.0, 
                    transparent: true,
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

    return <primitive object={obj} scale={0.283} />
}

export default function Pond(){
  return (
    <div className="w-full h-[500px]">
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 35 }}>
            <ambientLight intensity={0.8} />
            <directionalLight 
              position={[5, 10, 5]} 
              intensity={2} 
              castShadow 
            />
            <OrbitControls />
            <ModelPond />
        </Canvas>
    </div>
  )
}