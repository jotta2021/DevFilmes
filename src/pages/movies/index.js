import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import api from '../../services/api'
import * as C from '../movies/style'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function Movies() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const Navigate = useNavigate()
  useEffect(() => {
    async function LoadFilmes() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '94d38a5c22d7a67715287c093eb16d7a',
            language: 'pt-BR',
            page: '1'
          }
        })
        .then(response => {
          setMovie(response.data)
          setLoading(false)
        })
        .catch(() => {
          Navigate('/', { replace: true })
          return
        })
    }

    LoadFilmes()
    return () => {
      console.log('componente desmontado')
    }
  }, [])
  //salvando filme no local storage
  function SaveMovie() {
    const mylist = localStorage.getItem('@filmesdev')
    let salvefilmes = JSON.parse(mylist) || []
    const hasfilme = salvefilmes.some(
      salvefilmes => salvefilmes.id === movie.id
    )
    if (hasfilme) {
      return toast.error('Esse filme já esta salvo')
    }
    salvefilmes.push(movie)
    localStorage.setItem('@filmesdev', JSON.stringify(salvefilmes))
    toast.success('Filme salvo com sucesso')
  }

  if (loading) {
    return (
      <C.Loading>
        <h1>Carregando filme...</h1>
      </C.Loading>
    )
  }

  return (
    <C.Container>
      <h1 className="title">{movie.title}</h1>
      <C.Poster>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
      </C.Poster>
      <C.Info>
        <h2>Sinopse</h2>

        <C.Desc>
          <p>{movie.overview}</p>
          <p className="note">{movie.vote_average}</p>
        </C.Desc>
      </C.Info>

      <C.AreaButton>
        <button onClick={SaveMovie}>Salvar Filme </button>
        <button>
          <Link
            target="blank"
            to={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
          >
            Trailer
          </Link>
        </button>
      </C.AreaButton>
    </C.Container>
  )
}
