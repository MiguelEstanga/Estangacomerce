import React from 'react'
import { Boton } from '../Wraper/WraperStyled'

import { Detalles, Imagen } from './ProductosStyled'
import { Link } from 'react-router-dom'
import { Redes } from '../Redes/Redes'
import { Contacto } from '../Detalles/DetallesStyle'
export const ImagenProducto = ({ imagen, id, Ws, Facebook }) => {
    console.log(Ws)
    return (
        <Imagen>
            <img src={imagen} alt="..imagen " />
            <Detalles id='detalles'>

                <Contacto>
                    <div>
                        <a href={`https://wa.me/+58${Ws}`} target="_black">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                    </div>
                    <div>
                        <a href={Facebook} target="_black">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </div>
                </Contacto>
                {
                /* por los momentos no funciona 

                <Boton
                    w="150px"
                    h="70px"
                >
                    
                    <Link to={`Detalles/${id}`}>

                        Detalles
                    </Link>
                </Boton>
                */}
            </Detalles>
        </Imagen>

    )
}
