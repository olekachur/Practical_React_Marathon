import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className='header'>
            <Link className='header_link' to="/"> People </Link>
            <Link className='header_link' to="/planets"> Planets </Link>
            <Link className='header_link' to="/ptarships"> Starships </Link>
        </nav>
    )
}
