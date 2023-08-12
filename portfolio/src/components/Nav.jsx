import { Link, useLocation } from 'react-router-dom'

function Nav(){
    const currentPage = useLocation().pathname;

    return(
        <>
        <header className="name-title">Nneif Akpunonu</header>
        <ul className="nav justify-content-end nav-tabs">
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