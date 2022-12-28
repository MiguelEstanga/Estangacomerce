import React from 'react'
import { useContexto } from '../../context/useContex'
import { Navigate } from 'react-router-dom'

export const RutasPublicas = ({children}) => {
   const {autentificacion} = useContexto()   

   if(autentificacion){
    return <Navigate to='/' />      
   }
   
   return children
}
