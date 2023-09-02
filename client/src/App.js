import {  useState } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [Tech, setTech] = useState('');
  const [Subject, setSubject] = useState('');
  const [err, setErr] = useState("");

  const onSubmit = async () => {
    if (name !== "" && Tech !== "" && Subject !== "") {
      setErr("");
      try {

        await axios.post('http://localhost:3000/aliens', {
          
          name, Tech, Subject
        });

      } catch (e) {
        setErr(e);
      }

    } else {
      setErr("Enter All Details")
    }
    
  }

  return (
    <>
      <h1>Crud Application Demo</h1>

      <div className='information'>
        <label htmlFor='name'>
          Student name
          <input id="name" type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor='Tech'>
          Tech
          <input id="Tech" type='text' name='Tech' value={Tech} onChange={(e) => setTech(e.target.value)}/>
        </label>
        <label htmlFor='Subject'>
          Subject
          <input id="Subject" type='text' name='Subject' value={Subject} onChange={(e) => setSubject(e.target.value)}/>
        </label>

        <button onClick={onSubmit}>Add Data</button>
      </div>

      {err !== "" &&
        <div className='information' style={{color:"red"}}>
          {err}
        </div>
      }
    </>
  );
}

export default App;
