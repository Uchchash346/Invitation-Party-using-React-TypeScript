import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}
function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Mominul Haque",
      url: "https://i.ibb.co/FxnM11D/Mominul-Haque.jpg",
      age: 36,
      note: "He is a player"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
