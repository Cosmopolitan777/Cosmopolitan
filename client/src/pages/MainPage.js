import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import React, {useRef} from "react";
// import Box from "../components/MainPageScene";
import Box from "../components/MainPageScene";
// import "../Styles/MainPage.scss";
import Background from "../components/MainPageBackground";
import {PerspectiveCamera} from "three";

// fontawesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChampagneGlasses} from "@fortawesome/free-solid-svg-icons";
import {faMartiniGlassEmpty} from "@fortawesome/free-solid-svg-icons";
import {faWineBottle} from "@fortawesome/free-solid-svg-icons";
import {faWineGlass} from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  const cameraRef = useRef();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.x = -80;
  camera.position.y = 40;
  camera.position.z = 80;

  // const sketchfabEmbedCode =
  //   '<div class="sketchfab-embed-wrapper"> <iframe title="Colorful Bar" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f9c420c36ab3403e8cd38d652fe0dd62/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/colorful-bar-f9c420c36ab3403e8cd38d652fe0dd62?utm_medium=embed&utm_campaign=share-popup&utm_content=f9c420c36ab3403e8cd38d652fe0dd62" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Colorful Bar </a> by <a href="https://sketchfab.com/gabivthobias?utm_medium=embed&utm_campaign=share-popup&utm_content=f9c420c36ab3403e8cd38d652fe0dd62" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> gabivthobias </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f9c420c36ab3403e8cd38d652fe0dd62" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>';

  return (
    <>
      {/* <img
        src={process.env.PUBLIC_URL + `/img/main.png`}
        style={{height: "100vw", width: "100vw"}}
      /> */}
      <Canvas style={{height: "100vw", width: "100vw"}} camera={camera}>
        <pointLight position={[12, 10, 10]} />
        <Box OrbitControls />
        <OrbitControls camera={cameraRef.current} enableZoom={false} />
        <ambientLight intensity={0.1} />
      </Canvas>
    </>
  );
};

export default MainPage;
