import '@babylonjs/loaders'; // Optional, if you're importing assets

import React, {
  useEffect,
  useRef,
} from 'react';

import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from '@babylonjs/core';

const BabylonRotatingCube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Add a camera to the scene
    const camera = new ArcRotateCamera('camera1', Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, true);

    // Add a light
    new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

    // Create a rotating cube
    const box = MeshBuilder.CreateBox('box', { size: 1 }, scene);

    engine.runRenderLoop(() => {
      box.rotation.y += 0.01;
      scene.render();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '500px' }} />
  );
};

export default BabylonRotatingCube;
