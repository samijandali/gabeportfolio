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

function App() {
  return (

    <div>

      <div>
        <NavBar />
      </div>
      <ShaderGradientCanvas style={{ position: 'absolute' }}>
        <Gradient />
      </ShaderGradientCanvas>
      <About />


      <div>
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
