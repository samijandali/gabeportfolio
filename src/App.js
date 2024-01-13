import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import ProjectCard from './components/card/card';
import About from './components/about/about';
import Gradient from './components/gradient/gradient'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Row } from 'react-bootstrap';
import {
  ShaderGradientCanvas,
  ShaderGradient,
  // @ts-ignore
  useThree,
  // @ts-ignore
  useFrame,
} from 'shadergradient'
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import GptStack from './components/gptstack/gptstack';


function App() {
  return (
    <div>
      {/* <ShaderGradientCanvas className='gradient'
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: 'absolute',
          top: 0,
        }}
      >
        <ShaderGradient
          cDistance={1000}
          cPolarAngle={100}
          grain={'on'}
          type={'plane'}
          cAzimuthAngle={180}
          cameraZoom={10000}
          lightType={'3d'}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          zoomOut={'false'}
          color1='#f4f4f4'
          color2='#dbba95'
          color3='#d0bce1'


        />
      </ShaderGradientCanvas> */}
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <About />
        </div>
        <div>
          <GptStack />
        </div>
        <div>
          <Row>
            <ProjectCard />

          </Row>

        </div>
      </div>
      <div id="logolink">
        <a target="_blank" href="https://icons8.com/icon/9nmz9TYzN8iO/html-5">Tech Stack</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>

      </div>
    </div>




  );
}

export default App;
