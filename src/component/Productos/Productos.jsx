import React from 'react'
import { Box, Container, Encabesado } from './ProductosStyled'
import {useQuery} from "react-query"
import { Spiner } from '../spiner/Spiner'
import { peticiones } from '../helper/peticiones'
import { ImagenProducto } from './Imagen'
import { Datos } from './Datos'
import { ProductosTemporales } from '../../bd/productosTemporal'


export const Productos = () => {
    //const { isLoading , error , data} = useQuery("Productos" , () => peticiones("http://localhost:4000/CompuData/") )
   /*
    if(isLoading){
        return <Spiner/>
    }

    if(error){
        return <p>error {error}</p>
    }
  */
    console.log(ProductosTemporales)
    return (
        <>
            <Encabesado>
                 Productos
            </Encabesado>
            <Container id='productos'>

           
                {
                    
                    ProductosTemporales && ProductosTemporales?.map(d => (

                     (   <Box
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            key={d._id}
                          >
                            <ImagenProducto 
                              imagen={d.Imagenprincipa}
                              id={d._id}
                              Ws={d.Ws}
                              Facebook ={d.Facebook}
                            />
                            <Datos
                                tipo={d.tipo}
                                Precio={d.Precio}
                                Nombre={d.Nombre}
                               
                            />
                           
                        </Box >)
                    ))
                }
            </Container >
        </>
    )
}
