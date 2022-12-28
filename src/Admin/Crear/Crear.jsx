import React, { useState } from 'react'
import { Container } from '../Actuliazar/Actualizar'
import {useContexto} from "../../context/useContex"
import {useForm}  from 'react-hook-form'
import { Spiner } from '../../component/spiner/Spiner'

export const Crear = () => {
  const [spiner , setspiner] = useState(false)
  const {userData , token} = useContexto()
  const { register, formState: { errors }, handleSubmit } = useForm()
  function handle(obj){
    const data = new FormData()
    setspiner(true)
    data.append("Descripcion" , obj.Descripcion)
    data.append("Precio" , obj.Precio)
    data.append("Ws" , obj.ws)
    data.append('Facebook' , obj.Faceboock)
    data.append("Nombre" , obj.Nombre)
    data.append('Tipo' , obj.Tipo)
    data.append('file' , obj.file[0])
    data.append("Categoria" , obj.Categoria)
    data.append("Idusuario" , obj.Idusuario)

    fetch(`http://localhost:4000/CompuData`,{
        method:"POST",
        body:data,
        headers:new Headers({
          'Authorization': token
        })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log('error del servidor' , err))
    .finally(()=> {
      setspiner(false)
      formulario.reset()
      
    })
  }
  return (
    <Container>
      <div className="container d-grid gap-5 row justify-content-md-center p-5 ">
        <div className="card-body col mstyle">
          <form onSubmit={handleSubmit(handle)} id="formulario">
          {spiner?<Spiner/>:'' }
          <div className="mb-3" style={{'display':'none'}}>
              <label className="form-label">idusuario</label>
              <input
                type="text"
                className="form-control"
                {...register("Idusuario")}
                value={userData.id}
              />

            </div>
          <div className="mb-3">
              <label className="form-label">Imagen Principal</label>
              <input
                type="file"
                className="form-control"
                {...register("file")}

              />

            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input
                type="text"
                className="form-control"
              
                {...register("Descripcion")}

              />

            </div>


            <div className="mb-3">
              <label className="form-label">nombre</label>
              <input
                type="text"
                className="form-control"
              
                {...register("Nombre")}

              />
            </div>

            <div className="mb-3">
              <label className="form-label">tipo</label>
              <input
                type="text"
                className="form-control"
                
                {...register("Tipo", { required: true })}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">ws</label>
              <input
                type="text"
                className="form-control"
            
                {...register("ws", { required: true })}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">Faceboock</label>
              <input
                type="text"
                className="form-control"
                name="Faceboock"
                {...register("Faceboock")}

              />

            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                type="text"
                className="form-control"
                name="Precio"
                {...register("Precio", { required: true })}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
                type="text"
                className="form-control"
                
                {...register("Categoria", { required: true })}

              />
            </div>
            <button type="submit" className="btn btn-primary" >crear</button>

          </form>
        </div>
      </div>
    </Container>

  )
}
