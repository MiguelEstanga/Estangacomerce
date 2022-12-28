import React from 'react'
import { useEffect, useRef } from 'react'
import { Box, Container, Ul } from './NavegacionStyled'
import { Link } from 'react-router-dom'
import { useContexto } from '../../context/useContex'
export const Navegacion = () => {
    const navegacion = useRef()
    const burger = useRef()
    const opciones = useRef()
    const ul = useRef()
    const { logout, autentificacion, userData } = useContexto()

    function handleopciones() {
        opciones.current.classList.toggle('active')
    }
    function handleLogoud() {
        logout()
    }
    function handle(e) {
        burger.current.classList.toggle('active')
        ul.current.classList.toggle('active')

    }
    useEffect(function () {
        function change(e) {
            if (window.scrollY > 0) {
                navegacion.current.classList.add('active')
            }
            if (window.scrollY === 0) {
                navegacion.current.classList.remove('active')
            }

        }

        window.addEventListener('scroll', change)

        return () => window.removeEventListener('scroll', change)
    }, [])
    return (
        <Container ref={navegacion}>
            <div>
                <h1 className='Logo'>
                    Estancomerce
                </h1>
            </div>

            <Ul ref={ul} >
                <li className='Logo'>
                    <h1>
                        Estancomerce
                    </h1>
                </li>
                <li className='items'>
                    <Link to="/" onClick={handle}>
                        Inicio
                    </Link>
                </li>
                <li className='items'>
                    <Link to="/QuienesSomos" onClick={handle}>
                        Quienes Somos
                    </Link>
                </li>
                <li className='items'>
                    <Link to="/ComoComprar" onClick={handle}>
                        Como Comprar
                    </Link>
                </li>
                {

                    autentificacion ? (
                        <li className='email ' onClick={handleopciones}>
                            {userData.correo}
                            <div className='opciones' ref={opciones}>
                                
                                <div className='opcionesItems' >
                                    <a onClick={handleLogoud} >cerrar session</a>
                                </div>

                            </div>

                        </li>

                    ) : (

                        <li className='items'>
                            <Link to="/mantenimiento" onClick={handle}> iniciar session</Link>
                        </li>
                    )

                }


            </Ul>
            <div className="burger" ref={burger} onClick={handle}>
                <div className='rayas'></div>
                <div className='rayas'></div>
                <div className='rayas'></div>
            </div>
        </Container>
    )
}
