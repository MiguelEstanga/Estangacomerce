import React,{useState} from 'react'

import { useForm } from 'react-hook-form'
import { Spiner } from '../../component/spiner/Spiner'
import {useContexto} from "../../context/useContex" 
export const Form = ({ nuevadata , setstatus }) => {
    const [spiner, setSpiner] = useState(false)
    const {token} = useContexto()
    const { register, formState: { errors }, handleSubmit , setValue} = useForm({
        defaultValues: nuevadata
    })
    
    const [text , settex] = useState({
        _id:"",
        Nombre:"",
        Precio:"",
        tipo:"",
        Descripcion:""
    })
    setValue("id",nuevadata._id)
    setValue("Nombre",nuevadata.Nombre)
    setValue("_id",nuevadata._id)
    setValue("Descripcion",nuevadata.Descripcion)
    setValue("Precio",nuevadata.Precio)
    setValue("tipo",nuevadata.Tipo)
    setValue("ws",nuevadata.Ws)


    function handle(obj){
        setSpiner(true)
        setstatus(true)
        const data = new FormData()
        data.append("Nombre" , obj.Nombre)
        data.append("Descripcion" , obj.Descripcion)
        data.append("Ws" , obj.ws)
        data.append("Precio" , obj.Precio)
        data.append('Tipo' , obj.tipo)

        fetch(`http://localhost:4000/Actualizar/${obj._id}`,{
            method:"PUT",
            body:data,
            headers:new Headers({
                'Authorization': token
            })
        })
        .then(res => res.json())
        .then(res => {
           console.log("actualizado")
           console.log(res)
        })
        .catch(err => setstatus(err) )
        .finally(() => {
            setSpiner(false)
            setstatus(false)
        })
    }
    return (
    <div className="card col">
        <div className="card-body">
            <form onSubmit={handleSubmit(handle)} id='formulario'>
            <div className="mb-3">
                    <label className="form-label">id</label>
                    <input
                        type="text"
                        className="form-control"
                      
                        {...register("id")}

                    />

                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input
                        type="text"
                        className="form-control"
                        name="Descripcion"
                        {...register("Descripcion")}

                    />

                </div>
            
           
                <div className="mb-3">
                    <label className="form-label">nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="Nombre"
                        {...register("Nombre")}

                    />
                </div>
             
                <div className="mb-3">
                    <label className="form-label">tipo</label>
                    <input
                        type="text"
                        className="form-control"
                       
                        {...register("tipo" ,{ required:true})}

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">ws</label>
                    <input
                        type="text"
                        className="form-control"
                        name="ws"
                        {...register("ws" ,{ required:true})}

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input
                        type="text"
                        className="form-control"
                        name="Precio"
                        {...register("Precio" ,{ required:true})}

                    />
                </div>
          
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                >   
                    {spiner?"cargando...":'Realizar Actualizacion'}
                   
                </button>

            </form>
        </div>
    </div>    
    )
}
