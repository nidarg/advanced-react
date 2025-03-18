import React from 'react';
import ReactDOM from 'react-dom/client';
import ReusableButton from './components/reusability/ReusableButton';

import './App.css'

function App() {
  return (
    <main>
      <ReusableButton>Log in with Google</ReusableButton>
      <ReusableButton size="lg" variant="success">Log in with Google</ReusableButton>
      <ReusableButton size="sm" variant="warning">Log in with Google</ReusableButton>
      <ReusableButton size="sm" variant="danger">Log in with Google</ReusableButton>
    </main>
  )
}

export default App
