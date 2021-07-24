import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './Footer';

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
      <Header>
        <Nav
          components={components}
          setCurrentComponent={setCurrentComponent}
          currentComponent={currentComponent}
        ></Nav>
      </Header>
      
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
