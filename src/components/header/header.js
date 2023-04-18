import { Header1, Logo, Button } from './style'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Header1>
        <Logo>
          <Link to="/">
            <a>Filmes Dev</a>
          </Link>
        </Logo>

        <Link to="/favorites">
          <button>Meus filmes</button>
        </Link>
      </Header1>
    </>
  )
}
