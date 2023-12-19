
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import ProtectecRoutes from './components/ProtectecRoutes'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectecRoutes />}>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={<PokemonDetail />} />


        </Route>
      </Routes>
    </>
  )
}

export default App
