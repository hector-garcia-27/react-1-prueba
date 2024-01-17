import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'
import Main from './components/main';
import SeccionUno from './components/SeccionUno';
import Footer from './components/Footer';

function App() {

  const [personajes, setPersonajes] = useState([])
  const [resultados, setResultados] = useState([])
  const [buscar, setBuscar] = useState("")

  return (
    <>
      <Main />
      <SeccionUno />
      <h1 className='buscar'>Buscar un personajes</h1>
      <Buscador personajes={personajes} setResultados={setResultados} buscar={buscar} setBuscar={setBuscar} />
      <div className='personajes'>
        <MiApi personajes={personajes} setPersonajes={setPersonajes} resultados={resultados} buscar={buscar} />
      </div>
      <Footer />
    </>
  )
}
export default App
