import { Routes, Route } from 'react-router-dom'
import { AllPlayers, NavBar, NewPlayerForm, SinglePlayer } from './API'
import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <main>
          <h1>Puppy Bowl Site</h1>
            <Routes>
              <Route path="/" element={<AllPlayers />}/>
              <Route path="singlePlayer" element={<SinglePlayer />} />
              <Route path="newPlayerForm" element={<NewPlayerForm />}/>
            </Routes>
        </main>
      </div>
    </>
  )
}

export default App
