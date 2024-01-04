import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import ProjectCard from './components/card/card';
import About from './components/about/about';
import Gradient from './components/gradient/gradient'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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

      <div>
        <NavBar />
      </div>
      <ShaderGradientCanvas
        style={{ position: 'center' }}>
        <Gradient />


      </ShaderGradientCanvas >
      <div>
        <About />

      </div>


      <div>
        <GptStack />
      </div>


      <div>
        <ProjectCard />
      </div>





    </div>
  );
}

export default App;
