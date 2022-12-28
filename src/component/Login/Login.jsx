import styled from 'styled-components'
import { Container, Box } from '../Registro/RegistroStyle'
import {useForm}  from 'react-hook-form'
import React,{ useRef } from 'react'
import { useContexto  } from '../../context/useContex'
import { useNavigate } from 'react-router-dom'
import { Navegacion } from '../Navegacion/Navegacion'
import { useState } from 'react'

export const Login = () => {
    const [alerta , setAlerta] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const {login } = useContexto()
    const form = useRef()
    const navegacion = useNavigate()
    
    function handlelogin(obj) {
        
        const data = new FormData()
        data.append('email', obj.email)
        data.append('password', obj.password);
       
        fetch('http://localhost:4000/login', {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(res => {
                const {status } = res                   
                if(status !== 401){
                    login(res.token , res)
                  
                    location.reload()
                                        
                }

                if(status === 401){
                    console.log(res)
                    setAlerta(true)
                }
               
            })
        form.current.reset()
     
    }
    return (
        <Container>
            <Navegacion/>
            <Box 
                w="50%"
                gc="repeat(1,1fr)"
            >
                                   
                <form onSubmit={handleSubmit(handlelogin)} ref={form}>
                    <div className="encabezado campos">
                        <h2>Inicia session</h2>
                    </div>
                    <div className='email  campos' >
                        <div>
                            correo
                        </div>
                        <input 
                            type="email" 
                            name="correo" 
                            id="correo" 
                            placeholder='correo' 
                            {...register('email', {
                                required: true,
                                minLength: 3
                            })}
                            />
                    </div>
                    <div className='contraceña  campos'>
                        <div>
                            contraceña
                        </div>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='contraceña' 
                            {...register('password', {
                                required: true,
                                minLength: 3
                            })}
                            />
                    </div>
                    {alerta?<div className="alerta alert alert-danger">usuario no registrado</div>:""}
                    <div className='boton  campos'>
                        <button style={{'--botoncolor':"#239B56"}}>
                            iniciar session
                        </button>
                    </div>
                      
                </form>
            
                <div className='boton  campos' style={{'top':"-50px"}}>
                    <button 
                        style={{'--botoncolor' :"#2874A6"}}
                        onClick={e => {
                            e.preventDefault()
                            navegacion('/registro')
                        }}
                    >
                            Haste Una cuenta
                    </button>
                </div> 
            </Box>
        </Container>
    )
}


const Register = styled.div`

`