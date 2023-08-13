import { Link, useLocation } from 'react-router-dom'
import '../components/Nav.css'
import blueBackground from '../assets/blue.jpeg'

function Nav(){
    const currentPage = useLocation().pathname;

    return(
        <>
        {/* <div className="background" style={{ backgroundImage: `url(${blueBackground})`}}> */}
        <ul className="nav justify-content-space-between nav-tabs">
        <header className="name-title">Nneif Akpunonu</header>
            <li className="nav-item">
                <Link
                    to='/about'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/project'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/contact'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/resume'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
        </>
    );
}

export default Nav;