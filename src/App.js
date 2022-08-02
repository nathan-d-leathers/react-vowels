import React from 'react';
import './App.css';
import WordInput from './components/WordInput';
import WordOutput from './components/WordOutput';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [word, setWord] = useState([])

  const checkWord = () => {
    let newWord = document.getElementById('input').value
    let data = [...word, newWord]
    setWord(data)
  }

  return (
    <div className="App">
      <br></br>
      <u><h1>Vowel Checker</h1></u>
      <h2>Enter a word below to find it's vowels</h2>
      <br></br>
      <WordInput />
      <Button handleClick={checkWord} />
      <div>
        <WordOutput word={word} />
      </div>
      </div>

  );
}

export default App;
