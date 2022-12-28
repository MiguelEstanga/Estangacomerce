import styled from "styled-components";


export const Container = styled.section`
    width: 100%; height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
`

export const Box = styled.div`
    width:${({w ="80%"}) => w}; height: 70%;
    display: grid;
    
    grid-template-columns:${({gc}) => gc};

    box-shadow: 1px 1px 10px rgba(0,0,0,.70);
    
    


    .encabezado{
            
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 200;
    }
    .campos{
        position: relative;
        width: 100%; height:100px;
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
        margin: 0;
        input{
            width: 100%; height: 100px;
            border-top: 1px;

            border:none;
            padding: 5px;
            border-radius: 5px;
            font   :20px  "handwriting", cursive, sans-serif;
            box-shadow: 0 0 10px rgba(0,0,0,.40);
            color: black;
            font-weight: 100;
            font-family: "Font Awesone 5 free";
        
            &:focus{
            
                outline : solid 1px #239B56;
            }

        }

        button{
            width: 100%; height: 60px;
            box-sizing: border-box;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
            border: none;
            background: var(--botoncolor) ;
            font-size: 30px;
            padding: 0;
            border-radius: 5px;
              &:hover{
                text-shadow: 0 0 10px #fff , 0 0 60px #fff;
                box-shadow:  0 0 10px var(--botoncolor)  , 0 0 60px var(--botoncolor) ;
             }
       
        }
    }
    @media (max-width:700px) {
        width: 100%; height:60%;
      
        grid-template-columns: repeat(1,1fr);
        border: solid 1px;
        box-sizing: border-box;

        .encabezado{
          
            height: 50px;
        }
    }
`

export const Encabezado = styled.div`
    background: linear-gradient( 90deg , #D4AC0D ,#F9E79F);
    height: 100%; width: 100%;
   
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: #000;
    top: 80px;
    margin: 0 10px;
    span{
        text-align: center;
        font-size: 20px;
        font-weight: 100;
        color: #239B56;

    }
    h2{
        font-size: 40px;
        color: #239B56;
        text-align: center;
        font-weight: 300;
    }

    @media (max-width:700px) {
        display: none;
        grid-template-columns: repeat(1,1fr);
    }
`