import React from 'react'
import { Navegacion } from '../Navegacion/Navegacion'
import { Texto,Imagen , Container } from '../QuienesSomos/Styled'


export const ComoComprar = () => {
    return (
        <Container>
            <Navegacion/>
            <Imagen>
                <img src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1666556399/como_l1wn5c.png" alt="Como comprar" />
            </Imagen>
            <Texto>
                <h1>Como Comprar</h1>
                <p>

                    Es muy fácil como no contamos con pasarelas de pago electrónica
                    solo tienes que presionar sobre los botenes de redes sociales
                    que aparecen debajo del producto los cuales te estarán llevando
                    a nuestras redes para que te pongas en contacto y resolver todas
                    tus duda <br />

                    El segundo pasa que harás el llegar un acuerdo en donde quieres hacer
                    el trueque<br />

                    Existen 2 tipos de producto los que ya están aqui se entrega de forma
                    personal y los enviados por MRW en ese caso te pones en contacto con nosotros
                    nos das tusa datos como cédula ,nombre , numero de teléfono la agencia más
                    cercana de mrw y listo te daremos un número de trakin para que puedas rastrear
                    tu producto hasta que llegue a Maturín normalmente como el envió es gratis
                    tarda de 42 a 78 horas Avilés es decir no cuenta sábado y domingo
                </p>
            </Texto>
        </Container>
    )
}
