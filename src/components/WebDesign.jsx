import React from 'react'
import { Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Mac from './Mac'

const WebDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign
