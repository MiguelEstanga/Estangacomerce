import React from 'react'
import { Descripcion } from './DetallesStyle'

export const DescripcionProducto = ({DescripcionProducto , Precio , Ws , Facebook}) => {
    return (
        <Descripcion>
            <div className="texto">
                Descripcion del producto
            </div>
            <div className="descripcion">
                {DescripcionProducto}
            </div>
            <div className="texto">
                precio
            </div>
            <div className="precio">
                {Precio}$
            </div>
            <div className="texto">
                Proveedores 
            </div>
            <div className="contactanos">

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

            </div>
        </Descripcion>
    )
}
