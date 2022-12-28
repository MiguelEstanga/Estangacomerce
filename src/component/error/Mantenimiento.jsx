import React from 'react'
import { Container, Regresar } from './MantenimientoStyle'
import { Link , Navigate , useNavigate} from 'react-router-dom'
import { Navegacion } from '../Navegacion/Navegacion'
export const Mantenimiento = () => {
   
    
   function handle(){
      console.log('swsq')
     return <Navigate to="/" />
   }
  return (
    <Container>
      <Navegacion/>
      <div className='conten'>
        Holis Debido a un cambio de politica en los servidores Heroku
        esto opcion se encuentra actualmente inabilitada por problemas
        en el backend estamos buscando nuevos servidores para a si poder habilitar todas las opciones
        de esta app sin embargo toque el producto que desee comprar y aparecera el contacto para que
        puedas comunicarte con

        
      </div>

    </Container>

  )
}
