import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 2000px;
    background: linear-gradient(  180deg , #ECF0F1 , #F7F9F9);

    justify-content: center;
        align-items: center;    
    position: relative;
    

    @media (max-width: 900px) {
        grid-template-columns: repeat(1,1fr);
      
        grid-auto-flow: dense;
    }

`
export const Imagen = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: flex-end;
`
export const Texto = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 20;
   
    div{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
           
            font-weight: 100;
            color: #CF3716;
            font-size: 80px;  
            animation: sombra linear 5s infinite;
           
        }
        span{
            display: block;
            font-weight: 100;
            width: 100%;
            color: #CF3716;
            font-size: 30px;
            text-align: center;
        }

        @keyframes sombra {
            0%,100%{
                text-shadow: 1px black;
            }  
            50%{
                text-shadow : 0px 0px 20px #CF3716 , 0px 0px 30px #CF3716,
            0px 0px 40px #CF3716, 0px 0px 50px #CF3716;
            } 
        }
    }
    @media (max-width: 900px) {
        
        div{
           h1{
            font-size: 60px;
            text-align: center;
           }
        }
       
    }
`

export const Boton = styled.div`
    
    width: ${ ({w = '200px'} ) => w } ;
    height:${ ({ h = '50px' }) => h };
    border-radius: 5px;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
    transition: all 300ms ;
    background: #000;
    color: #F7F9F9;
    display: grid ;
    place-items: center;
    z-index: 2;
    a{
        text-decoration: none;
        color: #fff;
    }
    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 900px) {
       margin: auto;
       margin-top: 20px;
    }
`