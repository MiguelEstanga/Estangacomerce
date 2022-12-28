export const peticiones = async (url , configuracion) => {
    const data = await  fetch(url,configuracion)
     return data.json() 
 }
 