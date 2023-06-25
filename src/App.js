import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './Todo-list';


function App() {
  const [data, setData] = useState('');
  return (
    <>
      <Todolist />
    </>
  );
}

export default App;
