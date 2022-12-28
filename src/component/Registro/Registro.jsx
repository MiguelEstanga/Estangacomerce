import React ,{useRef} from 'react'
import {useForm} from 'react-hook-form'
import { Box, Container, Encabezado } from './RegistroStyle'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Navegacion } from '../Navegacion/Navegacion'
import { useContexto } from '../../context/useContex'
export default function Registro() {
    const [Alerta , setAlert] = useState(false)
    const {login} = useContexto()
    const { register, formState: { errors }, handleSubmit } = useForm()
    let navegacion = useNavigate()

    const form = useRef()
    function registro(obj) {
        
        const data = new FormData()
        data.append('nombre' , obj.nombre)
        data.append('correo' , obj.correo)
        data.append('password' , obj.password)
        data.append('telefono' , obj.Telefono)
       

        fetch('http://localhost:4000/registro', {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(res => {
                const {status} = res
                if(status === 401){
                    console.log("este correo esta en usu")
                    setAlert(true)
                }
                if(status !== 401){
                    login(res.token , res )
                    location.reload()
                  
                }
            })
       
        
    }
  return (
    <Container>
        <Navegacion/>
        <Box gc="repeat(1,1fr)" w="30%">

        
            <form onSubmit={handleSubmit(registro)} ref={form}>
                <div className='encabezado campos'>
                   <h2>Registrate Gratis</h2>
                </div>

               <div className="nombre campos">
                    <div>
                    nombre 
                    </div>
                    <input 
                        type="text"  
                        placeholder='nombre' 
                        
                        {   ...register('nombre', {
                            required: true,
                            minLength: 3
                          })
                        }
                    />
               </div>
               <div className='email campos' >
                     <div>
                     correodiv
                    </div>
                    <input 
                        type="email" 
                        name="correo" 
                        id="correo" 
                        placeholder='correo' 

                        {...register('correo', {
                            required: true,
                            minLength: 3
                        })}
                   />
                   {Alerta? <div className="alert alert-danger">Este correo ya esta en uso</div> :""}
               </div>
               <div className='contraceña  campos'>
                  <div>
                  contraceña
                  </div>
                  <input 
                    type="password" 
                    name='contraceña'
                    placeholder='contraceña' 

                    {...register('password', {
                          required: true,
                          minLength: 4
                        })
                    }

                    />  
               </div>
               <div className='contraceña  campos'>
                  <div>
                  Telefono
                  </div>
                  <input 
                    type="number" 
                    name='Telefono'
                    placeholder='Opcional' 
                    
                    {...register('Telefono', {
                          minLength: 4
                        })
                    }

                    />  
               </div>
               <div className='boton campos'>
                    <button style={{'--botoncolor':"#239B56" }}>
                       registrar
                    </button>
               </div>
            </form>
        </Box>
    </Container>

  )
}
