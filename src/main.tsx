import * as THREE from 'three'
import {createRoot} from 'react-dom/client'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {getProject} from '@theatre/core'
import {editable as e, SheetProvider} from '@theatre/r3f'
// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

studio.initialize()
studio.extend(extension)






const App = () => {
  return (
    <Canvas camera={{
      position: [5, 5, -5],
      fov: 75
    }}>
      <SheetProvider sheet={getProject('Demo Project').sheet('Demo Sheet')}>
        <ambientLight/>
        <e.pointLight theatreKey="Light" position={[10, 10, 10]}/>
        <mesh>
          <boxGeometry args={[1, 1, 1]}/>
          <meshStandardMaterial color="orange"/>
        </mesh>
      </SheetProvider>
    </Canvas>
  )
}

createRoot(document.getElementById('root')!).render(<App/>)
