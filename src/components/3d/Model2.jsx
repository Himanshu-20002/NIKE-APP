"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import {  useAnimations,  } from "@react-three/drei";
// {{change 1}}
const Model2 = React.forwardRef((props,ref) => {
  const { scene, animations } = useGLTF("/scifi.glb");
  // ✅ React Three Fiber-managed animation controller
  const { actions } = useAnimations(animations, scene);



  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]]; // play the first animation
      action?.play();
    }
  }, [actions]);
  return (
    <primitive
      ref={ref} // 
      object={scene}
      scale={40} // Adjust scale to fit the view
      position={[0, -1, 0]} // Center the model vertically
      rotation={[0, Math.PI, 0]} // Rotate the model if needed
    />
  );
});











export const ModelCanvas = React.forwardRef((props ,ref) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted ? (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 10], fov: 50 }}
      style={{ height: "100%", width: "100%" }}
      className=" max-lg:pointer-events-none "
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]} // Light from above and in front
        intensity={1.5}
        castShadow
      />
      <Suspense fallback={null}>
      <Model2 ref={ref} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
          minPolarAngle={Math.PI / 2} // Restrict vertical rotation
        />
      </Suspense>
    </Canvas>
  ) : (
    <div style={{ width: "100%", height: "100%" }}></div>
  );
});
