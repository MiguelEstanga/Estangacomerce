import React ,{useEffect , useState } from 'react'

export const useFetchData = (url , obj) => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(function(){
        setLoading(true)
        fetch( url , obj)
        .then(res => res.json())
        .then(res =>{
            setData(res)
            setLoading(false)
        })
        .catch(error => setData({error}) )
        .finally(() => {
            setLoading(false)
        })
    },[url])

  return {data , loading}
}
