import React from 'react'
import { useForm } from 'react-hook-form'

export const Input = (
    {
        nombre,
        tipo , 
        dfv="" , 
        form
    }) => {
  
    return (
        <div className="mb-3">
            <label className="form-label">{nombre}</label>
            <input
                type={tipo}
                className="form-control"
                id={nombre}
                defaultValue={dfv}
                {...form}
            />

        </div>
    )
}
