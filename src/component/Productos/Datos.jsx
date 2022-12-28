import React from 'react'
import { Titulo } from './ProductosStyled'

export const Datos = ({tipo , Nombre , Precio}) => {
    return (
        <Titulo>
            <div className="disponibilidad">

                {tipo == 0 ? 'Disponible en Maturin' : 'Disponible por Encargo'}<br />
                {Nombre}<br />
                {Precio}$
            </div>
        </Titulo>

    )
}
