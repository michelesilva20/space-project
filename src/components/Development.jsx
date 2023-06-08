import React from 'react'
import { Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Atom from './Atom'

const Development = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Atom/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Development
