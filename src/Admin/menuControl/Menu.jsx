import React from 'react'
import { Container, Contenul , Items} from './MenuStyle'
import {Link } from 'react-router-dom'
import styled from 'styled-components'
export const Menu = () => {
  return (
    <Container>
        <Contenul>
            <Items>
                <Link to="actualizar">Actualizar</Link>
            </Items>
            <Items>
                <Link to="eliminar"> Eliminar</Link>
            </Items>
            <Items>
                <Link to="crear">Nuevo Producto</Link>
            </Items>
            <Items>
                <Link to="/">volover con los mortales</Link>
            </Items>
                
        </Contenul>
       

    </Container>

  )
}

