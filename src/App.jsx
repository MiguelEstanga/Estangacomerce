import React from 'react'
import { Navegacion } from './component/Navegacion/Navegacion'
import { Productos } from './component/Productos/Productos'
import { Redes } from './component/Redes/Redes'
import { Wraper } from './component/Wraper/Wraper'
import { Routes, Route } from "react-router-dom";
import { QuienesSomos } from './component/QuienesSomos/QuienesSomos'
import { Detalles } from './component/Detalles/Detalles'
import { GlobalStyle } from './component/style'
import { ComoComprar } from './component/ComoComprar/ComoComprar'
import   Registro from './component/Registro/Registro'
import { Login } from './component/Login/Login'

import { PanelControl } from './Admin/PanelControl/PanelControl'
import { useContexto } from './context/useContex'
import { RutasAdministrativas } from './component/Router/RutasAdministrativas'
import { RutasPrivadas } from './component/Router/RutasPrivadas'
import { RutasPublicas } from './component/Router/RutasPublicas'
import { Verificar } from './component/Verificar/Verificar'
import { Crear } from './Admin/Crear/Crear'
import { Mantenimiento } from './component/error/Mantenimiento'

export const App = () => {
  const { userData} = useContexto()
  
  
  function Principal() {
    return (
      <>
        <Navegacion />
        <Wraper />
        <Productos />
        <Redes />
      </>
    )
  }
  return (
    <>
      <GlobalStyle />
      {userData.confirmacion?"":<Verificar/>}
    

       <Routes>
        <Route path='/' element={<RutasAdministrativas />}>
          <Route path='/administracion/*' element={<PanelControl />} />
        </Route>
       
        <Route path='/mantenimiento'  element={<Mantenimiento/>} />
        <Route path='/' element={<Navegacion />} />
        <Route path='/ComoComprar' element={<ComoComprar />} />
        <Route index path='/' element={<Principal />} />
        <Route path='/QuienesSomos' element={<QuienesSomos />} />

        {
          //Rutas publicas
        }
        <Route path='/login' element={
          <RutasPublicas>
            <Login />
          </RutasPublicas>
        } />

        <Route path='/registro' element={
          <RutasPublicas>
            <Registro />
          </RutasPublicas>
        } />
        {
          //rutas Privadas 
        }
        <Route path='/Detalles/:id' element={
          <RutasPrivadas>
            <Detalles />
          </RutasPrivadas>
        } />
         <Route path='/vender' element={
          <RutasPrivadas>
            <Crear/>
          </RutasPrivadas>
        } />

      </Routes>

    </>
  )
}
