import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 1.5rem;
`

export const Article = styled.div`
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    width: 30rem;
    max-height: 25rem;
    object-fit: cover;
    display: block;
    border-radius: 2rem;
  }

  button {
    border: none;
    width: 30rem;
    height: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    border-radius: 2rem;
    background-color: #8b0000;
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: 0.3s;
  }

  a:hover {
    font-size: 1.3rem;
    font-weight: bold;
  }
`
export const Load = styled.div`
  font-size: 0.8rem;
  text-align: center;
`
