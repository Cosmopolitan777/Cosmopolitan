import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import React, {useRef} from "react";
import Box from "../components/MainPageScene";

const MainPage = () => {
  const cameraRef = useRef();
  return (
    <Canvas
      style={{height: "100vw", width: "100vw"}}
      camera={{position: [-30, 50, 100], zoom: 2}}
    >
      <pointLight position={[12, 10, 10]} />

      <Box
        OrbitControls
        // camera={{ position: [40, 550, 20], zoom: 1, fov: 100 }}
        // camera={{ position: [80, 550, 20], zoom: 1, fov: 100 }}
      />
      {/* <HemisphereLight intensity={0.5} /> */}
      <OrbitControls camera={cameraRef.current} enableZoom={false} />
      <ambientLight intensity={0.2} />
      {/* <Sphere /> */}
    </Canvas>
  );
};

export default MainPage;
