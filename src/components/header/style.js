import styled from 'styled-components'

export const Header1 = styled.header`
  display: flex;
  justify-content: space-around;
  align-itens: center;

  height: 3rem;
  background-color: #8b0000;
  width: 100vw;

  button {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    width: 7rem;
    height: 2rem;

    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    transition: 0.2s;
  }
  button:hover {
    font-weight: bold;
    color: #8b0000;
  }
`

export const Logo = styled.a`
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
  }
`
