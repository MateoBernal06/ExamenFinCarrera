// estilos-efectos
import './styles/principal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './layout/Auth'
import { Principal } from './pages/principal'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Principal/>}/>
        <Route path='/' element={<Auth/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
