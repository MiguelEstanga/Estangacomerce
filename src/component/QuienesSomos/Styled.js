import styled from "styled-components";


export const Texto = styled.div`
    width: 100%;
    height: 100%;
    color: #000;
    padding: 20px;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 21px;
        font-weight: 300;

        a{
            color: #000;
        }
    }
`

export const Container = styled.div`
    width: 100vw;

    display: grid;
    grid-template-rows: repeat(1,1fr);
    @media (min-width: 950px) {
        margin-top: 100px;
        grid-template-columns: repeat(2,1fr);
    }
`

export const Imagen = styled.div`
    
    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 950px) {
        margin-top: 100px;
    
    }    
`