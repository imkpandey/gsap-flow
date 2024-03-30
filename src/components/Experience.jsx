/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default Experience;
