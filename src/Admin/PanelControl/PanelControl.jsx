import React from 'react'
import styled from 'styled-components'
import { Container } from './PanelStyle'
import {Menu} from "../menuControl/Menu"
import { Route, Routes } from 'react-router-dom'
import { Actualizar } from '../Actuliazar/Actualizar'
import { Eliminar } from '../Eliminar/Eliminar'
import { Crear } from '../Crear/Crear'
export const PanelControl = () => {
  return (
    <Container>
        <Panel>
          <Menu/>
          <Routes>
      
             <Route path='/actualizar' element={<Actualizar/>}/>
             <Route path='/eliminar' element={<Eliminar/>}/>
             <Route path='/crear' element={<Crear/>}/>

          </Routes>
        </Panel>
    </Container>
  )
}
const Panel = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
   
`