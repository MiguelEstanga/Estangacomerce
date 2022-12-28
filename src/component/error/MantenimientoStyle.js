import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background: #922B21;

    .conten{
        width: 70%;
        position: relative;
        text-align: justify;
        color: #fff;
        
        padding: 10px;
    }
`
export const Regresar = styled.div`
    width: 130px;
    height:100px;
    
    color: #fff;
    border-radius: 50%;
    display: flex;
   
    justify-content: center;
    align-items: center;

    a{
        font-size: 20px;
        color: #fff;
        text-decoration: none;

        &:hover{
            text-align: underline;
        }
    }

    &:hover{
        background: #2471A3;
    }
`