import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background: #FBFCFC;
    display: grid;
    padding: 10px;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit , minmax(400px , 1fr));
    
    padding: 10px;
    gap: 10px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1,1fr);
    }
`

export const Box = styled.div`
    width:500px;
    height: 500px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px rgba(0,0,0,.7);
    
    margin: auto;
    display: grid;
    background-color: #fff;
    grid-template-rows: 80% 20%;
    overflow: hidden;


    &:hover{
        border: solid 1px black;
    }
    &:hover #detalles{
        opacity: 1;
    }
    &:hover img{
        transform: scale(1.1);
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`
export const Titulo = styled.div`
    width: 100%;
    height:100% ;
    font-size: 30px;
    font-weight: 100;
    display: grid;
    place-items: center;
    top: 0;
    transition-delay:  500ms;
    z-index: 1;
   
    .disponibilidad{
        font-size: 17px;
        font-weight: 100;
        color: #000;
        text-align: center;
    }
   
`
export const Imagen = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    background: black;
    
    position: relative;
    img{
        width: 100%;
        height: 100%;   
       
    }
  
`

export const Detalles = styled.div`
    width: 100%;
    height: 90px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    z-index: 2;
    opacity: 0;
    font-size: 40px;
   
 
    a{
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 900px) {
        opacity: 1;
    }
    
    
`
export const Encabesado = styled.div`
    font-size: 50px;
    font-weight: 300;
    color: #000;
    text-align: center;
    background-color: #FBFCFC;
    position: relative;
    margin-top: 20px;
    &::before{
        position: absolute;
        content: '';
        width: 13%;
        height: 1px;
        border: solid 1px black;
        bottom: 0;
    }
`