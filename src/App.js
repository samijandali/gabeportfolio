import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import ProjectCard from './components/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  return (

    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
