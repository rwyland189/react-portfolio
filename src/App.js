import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [components] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'contact me'},
    { name: 'resume' }
  ]);

  const [currentComponent, setCurrentComponent] = useState(components[0]);



  return (
    <div>
      <Nav
        components={components}
        setCurrentComponent={setCurrentComponent}
        currentComponent={currentComponent}
      ></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
