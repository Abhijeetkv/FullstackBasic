import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
          const [jokes, setJokes] = useState([])
          
          useEffect(() => {
            axios.get('/api/jokes')
            .then((Response) => {
              setJokes(Response.data)
              console.log(data);
            })

            .catch((error) => {
              console.log(error);
            })
          })
  return (
    <>
     <h1>Jokes By Abhijeet Verma</h1>
     <p>jokes: {jokes.length}</p>

     {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
