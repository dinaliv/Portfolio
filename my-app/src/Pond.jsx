// Pond.jsx
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { TextureLoader } from "three"
import * as THREE from "three"


function ModelPond() {
  // Load OBJ model
  const obj = useLoader(OBJLoader, "/pond/low_poly.obj")

  // Load textures
  const [
    baseMap,
    emissiveMap,
    maskMap,
    normalMap,
    specularMap
  ] = useLoader(TextureLoader, [
    "/pond/pond_low_poly_BaseMap.png",
    "/pond/pond_low_poly_Emissive.png",
    "/pond/pond_low_poly_MaskMap.png",
    "/pond/pond_low_poly_Normal.png",
    "/pond/pond_low_poly_Specular.png"
  ])

  // Apply material to all meshes inside OBJ
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: baseMap,
        emissiveMap: emissiveMap,
        normalMap: normalMap,
        metalnessMap: specularMap,     // specular → use as metalness map
        roughnessMap: maskMap,        // mask → use as roughness map
        emissive: "#ffffff",          // so emissive map is visible
        emissiveIntensity: 1.0,
      })
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  return <primitive object={obj} />
}

export default function Pond(){
  return (
    <div>
        <Canvas camera={{ position: [3, 3, 5], fov: 25 }}>
            <ambientLight intensity={1} />
            <OrbitControls />
            <ModelPond />
        </Canvas>
    </div>

  )
}
