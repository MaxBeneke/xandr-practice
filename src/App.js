import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import Display from './Display'


function App() {
  const [dogs, setDogs] = useState([]);
  const [title, setTitle] = useState("Wow! Dogs!");

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(r => r.json())
      .then(data => setDogs(data.message))
  }, [])

  return (
    <div className="App">
      <h1>Welcome To Dogs</h1>
      <Form setDogs={setDogs} setTitle={setTitle} />
      <Display title={title} dogs={dogs} />

    </div>
  );
}

export default App;
