import { Link, useLocation } from 'react-router-dom'
import '../components/Nav.css'
import neutralBackground from '../assets/neutral.jpeg'

function Nav(){
    const currentPage = useLocation().pathname;

    return(
        <>
        <div style={{ backgroundImage: `url(${neutralBackground})`}}>
        <ul className="nav nav-pills justify-content-space-between flex-column flex-md-row">
        <header className="title">Nneif Akpunonu</header>
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
            {/* <li className="nav-item">
                <Link
                    to='/contact'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li> */}
            <li className="nav-item">
                <Link
                    to='/resume'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
        </div>
        </>
    );
}

export default Nav;