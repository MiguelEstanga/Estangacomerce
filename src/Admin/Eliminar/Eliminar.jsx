import React from 'react'
import { useState } from 'react'
import { Container } from '../Actuliazar/Actualizar'
import { DataForm } from '../DataForm/DataForm'
import { Spiner } from '../../component/spiner/Spiner'
import { useContexto } from '../../context/useContex'

export const Eliminar = () => {
  const {token} = useContexto()
  const [status , setstatus] = useState('')
  const [spiner , setspiner] = useState(false)
  function handle(e, id) {
    e.preventDefault()
    setspiner(true)
    fetch(`http://localhost:4000/Eliminar/${id}`,{
      method:"DELETE",
      headers:new Headers({
        'Authorization': token
      })
    })
    .then(res => res.json())
    .then(res => {
       setstatus(res)
       console.log(res)
    })
    .finally(() => {
      setspiner(false)
    })
    console.log("a este lo vamos a eliminar ", id)
  }
  return (

    <Container>
      {spiner?<Spiner/>:''}
      <div className="containers d-grid gap-5 row justify-content-md-center p-5">
        <DataForm handle={handle} uso={false}  status={status}/>
      </div>

    </Container>
  )
}
