import { useRef, useEffect } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { gsap } from 'gsap';

// Placeholder model URL - replace with your custom model
const MODEL_URL = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf';

interface ModelProps {
  scrollY: number;
}

const Model = ({ scrollY }: ModelProps) => {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_URL);
  
  // Mouse movement effect
  useFrame(({ mouse }) => {
    if (!groupRef.current) return;
    
    const x = (mouse.x * 0.1);
    const y = (mouse.y * 0.1);
    
    groupRef.current.rotation.y = gsap.utils.interpolate(
      groupRef.current.rotation.y,
      x,
      0.05
    );
    
    groupRef.current.rotation.x = gsap.utils.interpolate(
      groupRef.current.rotation.x,
      y,
      0.05
    );
  });
  
  // Scroll effect
  useEffect(() => {
    if (!groupRef.current) return;
    
    gsap.to(groupRef.current.position, {
      z: scrollY * -0.01,
      duration: 0.5,
    });
    
    gsap.to(groupRef.current.rotation, {
      z: scrollY * 0.001,
      duration: 0.5,
    });
  }, [scrollY]);

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={0.8} position={[0, 0, 0]} />
    </group>
  );
};

const ModelViewer = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="model-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model scrollY={scrollY} />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;