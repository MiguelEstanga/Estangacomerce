import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Boton } from '../Wraper/WraperStyled'
export const Verificar = () => {
    const Alerta = useRef()
    return (
        <Container ref={Alerta}>

            <Box>
                <p>
                    Verifica tu cuenta Hemos mandodo un msm a tu gmail si
                    ya lo hisiste cierra session y entra de nuevo
                 
                </p>
                <Boton  onClick={e => {
                    Alerta.current.classList.toggle('active')

                }}>
                        Aceptar
                    </Boton>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;height:100vh;
    background: rgba(0 , 0 ,0 ,.7);
    top: 0;
    z-index: 10001;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
        display: none;
    }
    .cerrar{
        width: 50px;height:50px;
        
        cursor: pointer;
        right: 50px;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
}
`

const Box = styled.div`
    width: 700px;
    height: 400px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    p{
        text-align: center;
        font-size: 30px;
        padding: 10px;
    }
`