import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { Form } from './Form'
import { DataForm } from '../DataForm/DataForm'
import { Spiner } from '../../component/spiner/Spiner'
export const Actualizar = () => {
  const [spiner , setspiner] = useState(false)
  const [nuevadata , setnuevadata] = useState({
    _id:"",
    Nombre:"",
    Precio:"",
    tipo:"",
    Descripcion:""
  })
 


  function handle(e,resul){
    e.preventDefault()
    setnuevadata({...resul})
  }
  
  return (

    <Container>
      
      <div className="containers d-grid gap-5 row justify-content-md-center p-5">
        <Form nuevadata={nuevadata} setstatus={setspiner} />
        {spiner?<Spiner/>:<DataForm handle={handle} status={spiner}/>}
        
      </div>
    </Container>
  )
}

export const Container = styled.div`
    margin-left: 200px;
  
    background-color: #fff;
    height: 100vh;
    overflow-y: scroll;
    box-sizing: border-box;
    .containers{
     
      display: grid;
      padding: 10px;
      grid-template-columns: repeat(3,1fr);
    }

    .mstyle{
      box-shadow: 0 0 10px rgba(0,0,0,.8);
      border-radius: 5px;
    }
`