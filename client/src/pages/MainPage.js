import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import React, {useRef} from "react";
// import Box from "../components/MainPageScene";
import Box from "../components/MainPageScene";
// import "../Styles/MainPage.scss";
import Background from "../components/MainPageBackground";
import {PerspectiveCamera} from "three";

const MainPage = () => {
  const cameraRef = useRef();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 100;

  return (
    <>
      <Background />
      <Canvas
        style={{height: "100vw", width: "100vw"}}
        // camera={{position: [-30, 40, 100], zoom: 1, left: -1, right: 1}}
        camera={camera}
      >
        <pointLight position={[12, 10, 10]} />
        <Box OrbitControls />
        <OrbitControls camera={cameraRef.current} enableZoom={false} />
        <ambientLight intensity={0.1} />
      </Canvas>
    </>
  );
};

export default MainPage;
