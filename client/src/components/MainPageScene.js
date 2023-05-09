import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

// 왼쪽 벽
const Wall = () => {
  return (
    <>
      <mesh
        // position={[-10, 11.7, -1.5]}
        position={[-90, 138, -362]}
        rotation={[0, -Math.PI * 2, 0]}
        castShadow
        receiveShadow
      >
        {/* <ambientLight intensity={0.1} /> */}
        <boxGeometry args={[550, 335, 10]} />
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
        scale={[0.125, 0.125, 0.125]}
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
        // scale={[0.05, 0.05, 0.05]}
        scale={[0.3, 0.3, 0.3]}
        // position={[-4, 19, 10]}
        position={[8, -10, 16]}
        color={"blue"}
        // rotation={[0, -Math.PI * 1.38, 0]}
        rotation={[0, -Math.PI * 1.592, 0]}
      >
        <Wall />
        <Cocktail />
      </primitive>
    </mesh>
  );
};

export default Box;

// import React from "react";

// function Box() {
//   return (
//     <div
//       title="Chatsubo Bar - Neuromancer"
//       width="100%"
//       height="480"
//       src="https://sketchfab.com/models/817d6cf117de4da9a32f1729dba752ec/embed?ui_theme=dark"
//       frameBorder="0"
//       allowFullScreen
//       mozallowfullscreen="true"
//       webkitallowfullscreen="true"
//       allow="autoplay; fullscreen; xr-spatial-tracking"
//       execution-while-out-of-viewport
//       execution-while-not-rendered
//       web-share
//     ></div>
//   );
// }
// export default Box;
