
import React from 'react'
import {Link} from "react-router-dom";
class Header extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <React.Fragment>

                <div>

                <link rel="stylesheet" href="./CSS/Home.css"/>
                <div className="container-fluid text-center">
                </div>
                <header>
                    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Temas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Títulos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Libros</a>
                                </li>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div viewBox="0 0 0 16">
                                    <Link to='/publicar'>
                                        <button type="button" className="btn btn-outline-light">Publicar</button>
                                    </Link>
                                </div>
                                <p>"</p>

                                <Link to='/ContenidoPerfil'>
                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Mi contenido
                                    </button>
                                </Link>

                                <p>"</p>
                                <Link to='/DatosUsuario' data-bs-toggle="tooltip" data-bs-placement="top"
                                      title="Mis datos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-person-circle informacion" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd"
                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </Link>

                            </form>
                        </div>
                    </nav>
                </header>
                <br/><br/>
                </div>


            </React.Fragment>
        )
    }
};

export default Header;




/*

                <link rel="stylesheet" href="./CSS/Home.css"/>
                <div className="container-fluid text-center">
                </div>
                <header>
                    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Temas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Títulos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Libros</a>
                                </li>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div  viewBox="0 0 0 16">
                                    <Link to='/publicar'>
                                        <button type="button" className="btn btn-outline-light">Publicar</button>
                                    </Link>
                                </div><p>"</p>

                                <button  className="btn btn-outline-light my-2 my-sm-0" type="submit">Mi contenido</button> <p>"</p>
                                <Link to='/DatosUsuario' data-bs-toggle="tooltip" data-bs-placement="top" title="Mis datos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-person-circle informacion" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd"
                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </Link>

                            </form>
                        </div>
                    </nav>
                </header><br/><br/>
                <div class="container">


 */

