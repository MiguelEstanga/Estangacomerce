import React from 'react'
import styled from 'styled-components'
export const Spiner = () => {
    return (
        <Contaier>
            <Spinerconten>

            </Spinerconten>
        </Contaier>

    )
}
const Contaier = styled.div`
    width: 100%; height: 100vh;
    background: rgba(0,0,0,.40);
    display: flex;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    z-index: 100;
    align-items: center;
`
const Spinerconten = styled.div`
      width: 100px;
  height: 100px;
  margin: center;
  border: 5px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-left-color: #7d47ff;

  animation: spin 1s ease infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`