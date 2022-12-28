import styled from "styled-components";

export const Container = styled.nav`
    width:200px;
    height: 100vh;
    border: solid 1px black;
    position: fixed;
    display: flex;
`
export const Contenul = styled.div`
    background-color: black;
    width: 200px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

export const Items = styled.li`
    background-color: black;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 50px;width:100%;

    a{
        text-decoration: none;
        text-align: center;
        color: #fff;
        font-size: 20px;

        &:hover{
            text-decoration: underline;
        }
    }

    &:hover{
        border: solid 1px #fff;
    }
`