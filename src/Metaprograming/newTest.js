// Install Three.js by running `npm install three`

import React, {
  useEffect,
  useRef,
} from 'react';

import * as THREE from 'three';

"./Assets/Quickler.png"

const ThreeJSImageTo3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add light
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Load texture
    const loader = new THREE.TextureLoader();
    loader.load('./Assets/Quickler.png', (texture) => {
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const geometry = new THREE.PlaneGeometry(3, 4); // Adjust to the image dimensions

      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      const animate = () => {
        requestAnimationFrame(animate);
        plane.rotation.y += 0.01; // Rotate the plane for a 3D effect
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default ThreeJSImageTo3D;
