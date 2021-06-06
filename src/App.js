import React from 'react';
import PetTagForm from './components/PetTagForm';
import PetTagList from './components/PetTagList';
import './App.css';

function App() {
  return (
    <div className="App">
      <PetTagForm />

      <PetTagList />
    </div>
  );
}

export default App;
