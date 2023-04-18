// Url da api : /movie/now_playing?api_key=94d38a5c22d7a67715287c093eb16d7a&language=pt-BR

//base da api https://api.themoviedb.org/3

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api
