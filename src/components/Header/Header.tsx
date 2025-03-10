import { header } from '../../data/portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
           {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header