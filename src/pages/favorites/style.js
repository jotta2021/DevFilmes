import styled from 'styled-components'
export const Title = styled.div`
  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    text-align: center;
  }
`
export const Container = styled.li`
  align-items: center;
  justify-content: center;

  display: flex;
  margin-bottom: 1rem;
  gap: 2rem;
  img {
    width: 5rem;
    border-radius: 0.5rem;
  }
  h2 {
    font-size: 1.2rem;
    width: 10rem;
  }
`
export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`
export const Button = styled.div`
  button {
    cursor: pointer;
    width: 7rem;
    height: 2rem;
    background-color: #8b0000;
    border-radius: 0.5rem;
    border: none;
    color: white;
    font-size: 1rem;
  }
  a {
  }
`
