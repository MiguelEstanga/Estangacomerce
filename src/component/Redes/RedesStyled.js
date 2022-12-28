import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    margin-top: 30px;
    background: #FBFCFC;

    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content:center;
    align-content: center;
    padding: 10px;
`
export const Texto = styled.div`
    
    
    font-weight: 100;
    font-size: 15px;   
    display : flex;
    justify-content: center;
    align-items: center;
    
    a{
        text-decoration: none;
        color: #000;

        &:hover{
            text-decoration: underline;
        }
    }
`
export const BoxRedes = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
       ion-icon{
        text-align: center;
        font-size: 50px;
        text-shadow: 10px 20px 10px rgba(0,0,0,.9);
        }
    }
`