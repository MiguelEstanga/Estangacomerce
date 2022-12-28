import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 900px) {
        &.active{
            background-color: #D0D3D4;
        }
    }
 
    .Logo{
        display: none;
    }
    &::before{
        content:'' ;
        position: absolute;
        bottom: 0;
        width: 90%;
        border: solid 1px black;
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
                color: #000;
               
                z-index: 20;
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

    
    @media (max-width: 900px) {
        height: 80px;     
        justify-content:space-between ;
        .Logo{
            display: block;
            z-index: 1003;
        }
        &::before{
            width: 100%;
        }
    }
    
`
export const Box =styled.div`
    
     z-index: 1001;
     width: 100%;
     height: 100%;
     display: grid;
     place-items: center;
     font-size: 40px;
     margin-left: 10px;
     font-weight: 900;

     @media (max-width: 500px) {
        font-size: 20px;
    }

`

export const Ul =styled.ul`
  
     z-index: 30;
     width: 100%;
     list-style: none;
     display: flex;
     height: 100%;
     justify-content: space-around;
     align-items: center;
     transform-origin: left;
    .Logo{
        display: flex;
    }
    .email{
        cursor: pointer;
        font-size: 20px;
        margin-left :20px ;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background: #17202A;
            color: #fff;
        }
        .opciones{
            transition: 1s;
            position: absolute;
            bottom: -150px;
            width: 300px;
            opacity: 0;
            display: none;
            background-color: #212F3D;
            .opcionesItems{
                color: #fff;
                width: 100%;
                display: flex;
                height: 80px;

                justify-content: center;
                align-items: center;
                &:hover{
                    background:rgba(0,0,0,.40);
                }
            }
           &.active{
            opacity: 1;
            display: block;
           } 
        }
    }  
    .items{
      
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        
        a{
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none;
            color: #000;
        }
        &::before{
            content:'' ;
            position: absolute;
            
            bottom: 30px;
        }
        &:hover::before{
            width: 100%;
            border:solid  1px #000;
            height: 1px;
        }
    
     }
     @media (max-width: 950px) {
        position: absolute;
        height: 100vh;
        width: 100vw;
        display: block;
        background: #fff;
        flex-direction: column;
        justify-content: center;
        
        left: 0;
        top: 80px;
        
        opacity: 0;
        transform: translateX(-1990px);
        &.active{
            opacity: 1;
            transform: translateX(0);
        }
        .email{
            width: 100%;
            height: 80px;
            justify-content: start;
            align-items: start  ;
            position: relative;
            top: 70px;
            left: -15px;
        }
        .Logo{
                display: none;
            }
            
        .items {
            width: 100%;
            height: 80px;
            justify-content: start;
            align-items: start  ;
            position: relative;
            top: 70px;
            left: -15px;
            
            a{
                font-size: 25px;
                font-weight: 100;
                text-align: start;
                color: #000;   
            }

            &::before{
                content:'' ;
                position: absolute;
                width: 100%;
                background: rgba(0,0,0,.40);
                height: 1px;
            }
        }
     }
`