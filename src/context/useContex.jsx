
import  React ,{ createContext , useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'

const Contexto = createContext()
export function useContexto(){
    return useContext(Contexto)
}

export default function Context({children}) {
  
   const [autentificacion , setautentificacion] = useState(localStorage.getItem('login') ?? false)
   const [token , settoken] = useState(`bearer ${JSON.parse(window.localStorage.getItem('token'))}`)
   const [userData , setuserData] = useState(JSON.parse(localStorage.getItem('data')) ?? {confirmacion:true}  )
   let confir = true

   const login = useCallback(function(token,data){
      window.localStorage.setItem('login' , true)
      window.localStorage.setItem('token', JSON.stringify(token))
      window.localStorage.setItem('data', JSON.stringify(data))

      setautentificacion(true)
   
   },[setautentificacion])

   const logout = useCallback(function(){
    window.localStorage.removeItem('login')
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('data')

    settoken('')
    setautentificacion(false)
    setuserData('')
 },[setautentificacion])

 const value = useMemo(()=>({
    login,
    logout,
    autentificacion,
    token,
   confir,
    userData,
 }),[login,logout,autentificacion,token,userData ])
  return (
    
    <Contexto.Provider value={value}>
        {children}
    </Contexto.Provider>
  )
}
