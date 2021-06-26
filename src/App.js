import React from 'react';
import './App.scss'
import Button from './Component/Button'

function App() {
  return (
    <div className="App">
      <div className="Button">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="Button">
        <Button size="large" color="indigo">BUTTON</Button>
        <Button color="indigo">BUTTON</Button>
        <Button size="small" color="indigo">BUTTON</Button>
      </div>
      <div className="Button">
        <Button size="large" color="yellow">BUTTON</Button>
        <Button color="yellow">BUTTON</Button>
        <Button size="small" color="yellow">BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
