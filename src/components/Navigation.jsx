import { Link, useLocation } from 'react-router-dom'
import '../components/Navigation.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation(){
    const currentPage = useLocation().pathname;

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand className="title">Nneif Akpunonu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic navbar-nav">
                <Nav nav-item >
                    <li>
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
                    Websites
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/ui'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    UI Design
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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Navigation;


{/* <header className="title">Nneif Akpunonu</header>
        <ul className="nav nav justify-content-space-between flex-column flex-md-row">
            <li className="nav-item">
                
            </li>
        </ul> */}