import React, { useState, useEffect } from 'react'
import * as C from '../favorites/style'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
export default function Favorites() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const mylist = localStorage.getItem('@filmesdev')
    setMovies(JSON.parse(mylist) || [])
  }, [])

  function deleteMovie(id) {
    let filter = movies.filter(item => {
      return item.id !== id
    })
    setMovies(filter)
    localStorage.setItem('@filmesdev', JSON.stringify(filter))
    toast.success('Filme removido com sucesso!')
  }

  return (
    <div>
      <C.Title>
        <h1>Meus favoritos</h1>
      </C.Title>

      <ul>
        {movies.length === 0 && (
          <span style={{ alignItems: 'center' }}>
            Você não possui nenhum filme em sua lista
          </span>
        )}
        {movies.map(item => {
          return (
            <C.Container>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              />
              <h2>{item.title}</h2>
              <C.Buttons>
                <C.Button>
                  <Link to={`/movies/${item.id}`}>
                    <button>Ver detalhes</button>
                  </Link>
                </C.Button>
                <C.Button>
                  <button onClick={() => deleteMovie(item.id)}>Excluir</button>
                </C.Button>
              </C.Buttons>
            </C.Container>
          )
        })}
      </ul>
    </div>
  )
}
