// estilos-efectos
import './styles/principal.css'
import './styles/login_registro.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './layout/Auth'
import { Principal } from './pages/principal'
import Login from './pages/login'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Principal/>}/>
        
        <Route path='/' element={<Auth/>}>
          <Route path='login' element={<Login />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
