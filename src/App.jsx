// estilos-efectos
import './styles/principal.css'
import './styles/login_registro.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './layout/Auth'
import { Principal } from './pages/principal'
import Login from './pages/login'
import { Registro } from './pages/registro';
import { NotFound } from './pages/notFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Principal/>}/>
        
        <Route path='/' element={<Auth/>}>
          <Route path='login' element={<Login />} />
          <Route path='registro' element={<Registro />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
