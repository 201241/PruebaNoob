import React from 'react'
import {Link} from "react-router-dom";
import Header from "../components/Header";
class Home extends React.Component {
    render() {

        return(
            <>
                <link rel="stylesheet" href="./CSS/Home.css"/>
                <div className="container-fluid text-center">
                </div>
                <header>
                    <Header/>
                </header><br/><br/>
                <div class="container">
                </div><br/><br/>

                <body>
                <div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card c1">
                            <img src="./Imagenes/Web.png" className="card-img-top" alt="..."/>
                                <div className="card-body container-fluid">
                                    <Link to='/zonaweb'>
                                        <h5 className="card-title">Programación Web</h5>
                                    </Link>
                                    <p className="card-text">La sección para programación web, está diseñada para brindarte recursos que puedas necesitar a lo largo de tu cuatrimestre. </p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card c2">
                            <img src="./Imagenes/BD.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <Link to='/ZonaBaseDeDatos'>
                                        <h5 className="card-title">Base de Datos</h5>
                                    </Link>

                                    <p className="card-text">Esta sección está hecha para que encuentres libros, referencias, ejemplos, etc. Acerca de base de datos.</p>
                                </div>
                        </div>
                    </div><br/>
                    <div className="col"><br/><br/>
                        <div className="card">
                            <img src="./Imagenes/DI.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <Link to='/ZonaDiseñoDeInterfaces'>
                                        <h5 className="card-title">Diseño de interfaces</h5>
                                    </Link>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col"><br/><br/>
                        <div className="card">
                            <img src="./Imagenes/Mate.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Matemáticas</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>
                </div>
                </body>
                <br/>
            </>
        )
    }
}

//npm install -save bootstrap@4.6.0
export default Home;



/*

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


 */