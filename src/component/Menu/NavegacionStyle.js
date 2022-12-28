import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 65px;
    
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &.color{
        background-color: rgba(66, 7, 138,1);
    }
    .burger{
       
        width: 60px;
        height: 60px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
       
        margin-right: 20px;
        justify-content: center;
        
        z-index: 1001;
        gap: 8px;
        display: none;
        .rayas{
            width: 50%;
            height: 1px;
            border: solid 1px;
            transform-origin: left;
        }
        &.active{
           .rayas{
                &:nth-child(1){
                    transform: rotate(45deg);
                }

                &:nth-child(2){
                   opacity: 0;
                }
                &:nth-child(3){
                   
                    transform: rotate(-45deg);
                }
           }
        }

        @media (max-width: 950px) {
            display: flex;
        }
    }
    
`
export const Box =styled.div`
    
     z-index: 1001;
     width: 100%;
     height: 100%;
     display: grid;
     place-items: start;
     font-size: 40px;
     margin-left: 10px;
     font-weight: 900;
`

export const Ul =styled.ul`
 
     z-index: 1001;
     width: 100%;
     list-style: none;
     display: flex;
     height: 100%;
     justify-content: space-around;
     align-items: center;
     transform-origin: left;
     transform-origin: left;
     li{
        padding: 10px;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        
        a{
            cursor: pointer;
            font-size: 20px;
            text-decoration: none;
          
        }

        &:hover{
            background-color: #C0392B;
        }
     }
     @media (max-width: 950px) {
        position: absolute;
        height: 100vh;
       
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.70);
        flex-direction: column;
        opacity: 0;
        transform: translateX(-1990px);
        &.active{
            opacity: 1;
            transform: translateX(0);
        }
        li{
            background-color: #380746 ;
        }
     }
`