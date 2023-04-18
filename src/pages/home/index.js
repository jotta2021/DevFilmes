import api from '../../services/api'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Article, Div, Load } from './style'
export default function Home() {
  const [filmes, setFilmes] = useState([])
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/movie/now_playing?api', {
        params: {
          api_key: '94d38a5c22d7a67715287c093eb16d7a',
          language: 'pt-BR',
          page: '1'
        }
      })
      //console.log(response.data.results.slice(0, 10))
      setFilmes(response.data.results.slice(0, 20))
      setLoading(false)
    }
    loadFilmes()
  }, [])

  if (Loading) {
    return (
      <Load>
        <h1>Carregando...</h1>
      </Load>
    )
  }

  return (
    <Div>
      {filmes.map(filme => {
        return (
          <Article key={filme.id}>
            <strong>{filme.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            />

            <button>
              <Link to={`/movies/${filme.id}`}>Acessar</Link>
            </button>
          </Article>
        )
      })}{' '}
    </Div>
  )
}
