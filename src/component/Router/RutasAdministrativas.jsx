import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContexto } from '../../context/useContex'
export const RutasAdministrativas = () => {
    const {autentificacion , userData} = useContexto()

 
 
    if( Number(userData.permisos) === 1 ){
        console.log('no peromis')
        return <Navigate to='/mantenimiento' />
    }
  return (
    <div><Outlet/></div>
  )
}
