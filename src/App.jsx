import { Routes, Route, useParams } from 'react-router-dom'
import { AllPlayers, NavBar, NewPlayerForm, SinglePlayer } from './components'
import './App.css'

function App() { 

  return (
    <>
      <div>
        <NavBar />
        <main>
          <h1>Puppy Bowl</h1>
            <Routes>
              <Route path="/" element={<AllPlayers />}/>
              <Route path="singlePlayer" element={<SinglePlayer/>} />
              <Route path="players/:id" element={<SinglePlayer />} /> 
              <Route path="newPlayerForm" element={<NewPlayerForm />}/>
            </Routes >
        </main>
      </div>
    </>
  )
}

export default App
