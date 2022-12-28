import React, { useState, useEffect } from 'react'
import { Spiner } from '../../component/spiner/Spiner'
import { useContexto } from '../../context/useContex'
export const DataForm = (
    { 
        handle, 
        uso = true , 
        status 
    }) => {

    const [data, setData] = useState([])
    const [spiner, setSpiner] = useState(true)


    useEffect(function () {
        fetch('http://localhost:4000/CompuData/')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .finally(() => {
                setSpiner(false)
            })
    }, [status , data ])

    return (
        <>
            {spiner ?( <Spiner/>) : ''}
            {
                data && data?.map(resul => (

                
                    <div className="card col " key={resul._id}>
                           
                        <div className="card-body">
                            <form >
                                <div className="mb-3">
                                    <label className="form-label">id</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="id"
                                        defaultValue={resul._id}

                                    />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripcion</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Descripcion"
                                        defaultValue={resul.Descripcion}

                                    />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        defaultValue={resul.Nombre}

                                    />
                                </div>
                             
                                <div className="mb-3">
                                    <label className="form-label">type {"disponibilidad"}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tipo"
                                        defaultValue={resul.Tipo}

                                    />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">ws</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ws"
                                        defaultValue={resul.Ws}

                                    />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">precio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="precio"
                                        defaultValue={resul.Precio}

                                    />
                                </div>
                                {
                                    uso  ? (
                                        <button type="submit" className="btn btn-primary" onClick={e => handle(e, resul)}>Actuliazr</button>

                                    ):(
                                        <button 
                                            type="submit" 
                                            className="btn btn-danger" 
                                            onClick={e => handle(e,resul._id)}
                                        >
                                            Eliminar
                                        </button>

                                    )
                
                                }

                            </form>
                        </div>
                    </div>

                ))
            }
        </>
    )
}
