import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

// 왼쪽 벽
const Wall = () => {
  return (
    <>
      <mesh
        // position={[-10, 11.7, -1.5]}
        position={[10, 10, 10]}
        rotation={[0, -Math.PI * 0.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[27, 15, 0.5]} />
        <meshLambertMaterial color={"gray"} />
      </mesh>
    </>
  );
};

// 칵테일 Cosmopolitan
const Cocktail = () => {
  const gltf = useLoader(GLTFLoader, "./page_gltf/tropical_drink/scene.gltf");
  return (
    <mesh>
      <primitive
        object={gltf.scene}
        scale={[0.1, 0.1, 0.1]}
        position={[-160, 97, -40]}
      />
    </mesh>
  );
};

// bar
const Box = () => {
  const gltf = useLoader(GLTFLoader, "./page_gltf/cyberpunk_bar/scene.gltf");
  return (
    <mesh>
      <ambientLight intensity={1} color={"#00BFFF"} />
      <primitive
        object={gltf.scene}
        scale={[0.05, 0.05, 0.05]}
        position={[-4, 19, 10]}
        color={"blue"}
        rotation={[0, -Math.PI * 1.59, 0]}
      >
        <Wall />
        <Cocktail />
      </primitive>
    </mesh>
  );
};

export default Box;
