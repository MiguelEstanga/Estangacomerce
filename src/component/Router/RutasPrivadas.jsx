import React from 'react'
import { useContexto } from '../../context/useContex'
import { Navigate } from 'react-router-dom'

export const RutasPrivadas = ({children}) => {
   const {autentificacion} = useContexto()   

   if(!autentificacion){
    return <Navigate to='/mantenimiento' />      
   }
   
   return children
}
