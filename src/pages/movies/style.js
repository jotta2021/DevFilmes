import styled from 'styled-components'

export const Container = styled.div`

width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
height: 100vh;
  background: rgb(64,64,64);
  background: linear-gradient(0deg, rgba(64,64,64,1) 0%, rgba(10,10,10,1) 100%);
  );
  .title{
    color:white;
    font-weight:400;
  
  }
`
export const Poster = styled.div`
  img {
    max-width: 50rem;
    border-radius: 1rem;
  }
`
export const Info = styled.div`
  color: white;
  align-items: center;
  h2 {
    text-align: center;
  }
`
export const Desc = styled.div`
  width: 48rem;

  text-align: center;
  p {
    font-size: 0.8rem;
  }
  .note {
    text-align: center;
    color: black;
    background-color: white;
    font-weight: bold;
  }
`
export const AreaButton = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 1rem;
  button {
    border-radius: 0.3rem;
    width: 10rem;
    background-color: white;
    color: black;
    font-family: Poppins, sans-serif;

    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s;
    border: none;
  }
  button:hover {
    background-color: #8b0000;
    color: white;
  }
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: white;
  }
`
export const Loading = styled.div`
  h1 {
    font-size: 0.8rem;
    color: black;
    text-align-center;
  }
`
