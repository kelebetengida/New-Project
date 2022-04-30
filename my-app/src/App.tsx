import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobies: string[];
let role:[number, string];

type Person={
  name: string;
  age: number;
}

let person: Object={
  name: "py",
  age:22,
}
function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
