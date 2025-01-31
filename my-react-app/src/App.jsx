import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from "./components/LoginForm.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold mt-4">Login Form</h1>
      <LoginForm />
    </div>
  );
}

export default App
