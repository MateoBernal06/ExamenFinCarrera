// estilos-efectos
import './styles/principal.css'
import './styles/login_registro.css'
import './styles/style_dashboard.css'
import './styles/pantalla_acciones.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './layout/Auth'
import { Principal } from './pages/principal'
import Login from './pages/login'
import { Registro } from './pages/registro';
import { NotFound } from './pages/notFound';
import Dashboard from './layout/Dashboard';
import AccionesClientes from './pages/clientes';

//falta colocar el privateRoute en dashboard

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Principal/>}/>
        
        <Route path='*' element={<NotFound />}/>
        
        <Route path='/' element={<Auth/>}>
          <Route path='login' element={<Login />} />
          <Route path='registro' element={<Registro />} />
        </Route>
      
        <Route path='dashboard/*' element={<Dashboard/>}>
          <Route path='gestion-producto' element/>
          <Route path='gestion-usuarios' element={<AccionesClientes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
