import React from 'react'
import { Navegacion } from '../Navegacion/Navegacion'

import { Texto , Container , Imagen} from './Styled'

export const QuienesSomos = () => {
  return (
    <Container>
      <Navegacion/>
     <Imagen>
        <img 
          src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1666500918/quienes_eyznig.png"
         alt="quienes Somos" />
      </Imagen> 
      <Texto>
        <h1>
            Quienes Somos
        </h1>
        <p>
          Somos vendedores de ordenadores en la ciudad de Maturín, distribuimos los equipos en el centro,
          los productos que vendemos son trasladados desde la ciudad Caraca hasta la ciudad de Maturín a través de
          la empresa <a href="#">MRW</a> a si mismo estos productos son exportados desde EEUU hasta Venezuela
          en las mejores condiciones posible para ser vendido a un buen precio al llegar aqui , no contamos con la caja original
          del equipo, pues el envió sería más caro  al  tener que pasar por revisión esto último explicado por la empresa MRW
          tratamos de ser lo más trasparente posible , los equipos tienen una garantía de 6 meses que solo aplica
          si entrega el equipo como lo recibió el cliente, por ahora solo contamos con equipos laptops de la marca HP
          pero el fin de este proyecto es expandirnos y no solo vender  aparatos eléctrico si no cualquier artículo de venta útil
          para los consumidores mi persona Miguel Alejandro Estanga Martínez se hará responsable por cualquier duda del
          cliente soy estudiante de ING de Sistemas en la Universidad De Oriente Udo y un ciudadano honesto mi número de cédula
          es 26101877 puede verificarlo en la página del
          <a href="http://www.cne.gob.ve/web/index.php"> Registro Electoral de Venezuela</a>
          esto lo hago con la intención de que el cliente tenga total confianza a la hora de la compra, espero que los productos
          sean de su agrado, les agradecería que compartieran la pagina en redes sociales con el fin expandirnos en Maturín y que
          más personas conozcan nuestro producto sin más que decir les deseo un feliz día gracias por un momento de tu tiempo
          para cualquier duda comuniquese al 04263821517
        </p>

        
      </Texto>
    </Container>
  )
}
