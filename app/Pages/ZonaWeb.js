import React from 'react'
import Card from "../components/Card";
import {Link} from "react-router-dom";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
class ZonaWeb extends React.Component {
//SVG porn

    constructor(props) {
        super(props);
        this.state = {
            lista : [],
            Jsonlista:[]
        }

    }
//     /publicar/getAllWeb
//     /publicar/getAllBD
    componentDidMount() {
        APIInvoker.invokeGET("/publicar/getAllPublicacionWeb", data => {

            this.setState({
                lista: data.body
            })

            console.log(this.state.lista + "<__ Lista")
        }, error=>{

        })
    }

    render() {
        return(

                <div className="container-fluid">

                    <link rel="stylesheet" href="./CSS/Web.css"/>
                    <header>
                        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" >
                                <ul className="navbar-nav mr-auto">
                                    <Link to='/Home'>
                                        <li className="nav-item active">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                                 className="bi bi-house-door-fill casa" viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                            </svg>
                                        </li>
                                    </Link>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Programación Web<span className="sr-only">(current)</span></a>
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
                    <body>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light float-right shadow-none p-3 mb-5 bg-light rounded ">
                        <div className="container-fluid ">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="d-flex ">
                                    <input className="form-control me-2 busqueda" type="search" placeholder="Escribe aquí"
                                           aria-label="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <For each="item" index="index" of={this.state.lista} >
                        <Card key={index} title={item.titulo} description={item.comentario}/>
                    </For>
                    </body>

                </div>

        )
    }
}
//npm install -save bootstrap@4.6.0
export default ZonaWeb;

/*

                     <div className="container">
                         <Link to='/publicar'>
                             <h6 className='text-center'>publicar</h6>
                         </Link>
                     </div>

 */