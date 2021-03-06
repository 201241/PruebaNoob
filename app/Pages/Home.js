import React from 'react'
import {Link} from "react-router-dom";
class Home extends React.Component {
    render() {

        return(
            <>
                <link rel="stylesheet" href="./CSS/Home.css"/>
                <header>
                    <div class="container">
                        <h1 className='text-center'> Bienvenido a Noob-Emy</h1></div>
                </header>

                <div class="container">  <Link to='/login'>
                    <h3 className='text-center'>Iniciar sesion</h3>
                </Link>
                    <h6 className='text-center'>¿No tienes cuenta?</h6>
                    <Link to='/signUp'>
                        <h3 className='text-center'>Regístrate</h3>
                    </Link>
                    <Link to='/publicar'>
                        <h6 className='text-center'>publicar</h6>
                    </Link>
                </div>




                <button type="button" className="btn btn-warning">Warning</button>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
//npm install -save bootstrap@4.6.0
export default Home;