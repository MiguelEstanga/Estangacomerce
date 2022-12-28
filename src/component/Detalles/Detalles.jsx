import React from 'react'
import { Spiner } from '../spiner/Spiner'
import { useParams } from 'react-router-dom';
import { useContexto } from '../../context/useContex';
import { Navegacion } from '../Navegacion/Navegacion';
import { useFetchData } from '../../hook/useFetchData';
import { Container  , Box , Imagenes} from './DetallesStyle';
import { DescripcionProducto } from './DescripcionProducto';
import  {useQuery} from "react-query"
import { peticiones } from '../helper/peticiones';
export const Detalles = () => {
    const { id } = useParams()
    const { token } = useContexto()
    const {isLoading , error , data} = useQuery('detalles' , () => peticiones(`http://localhost:4000/CompuData/${id}`,{
        method: 'get',
        headers: new Headers({
            'Authorization': token,
        })
    }))
    if(isLoading) return <Spiner/>
    if(error) return <p>error</p>
    
    return (
        <Container>
            <Navegacion/>
            {
                data && data?.map(d => (
                    <Box key={d._id} >
                       

                        <Imagenes>
                            <img src={d.Imagenprincipa} alt="" />
                        </Imagenes>

                        <DescripcionProducto
                            Facebook={d.Facebook}
                            Ws={d.Ws}
                            Precio={d.Precio}
                            DescripcionProducto={d.Descripcion}
                        />
                    </Box>
                ))
            }
        </Container>
    )
}
