import React from 'react'
import Card from "../components/Card";
import {Link} from "react-router-dom";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
class ZonaWeb extends React.Component {
//SVG porn
    constructor(props) {
        super(props);
        this.listaPublicacion = []
        APIInvoker.invokeGET('publicar/getAllPublicacion',data=>{
            this.setState({
                listaPublicacion : data.data
                //titulo / comentario
            })
        }, error=>{
            alert( "error");
        })

    }

    render() {
        return(
                <>

                     <div className="container">
                         <For each="item" index="index" of={this.listaPublicacion}>
                             <Card key={index} title={item.titulo} description={item.comentario}/>
                         </For>
                     </div>

                     <link rel="stylesheet" href="./CSS/Home.css"/>
                     <header>
                         <div className="container">
                             <h1 className='text-center'> Programacion Web</h1></div>
                     </header>

                     <div className="container">
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

                    <body>

                    <div className="container">
                        <For each="item" index="index" of={this.listaPublicacion}>
                            <Card key={index} title={item.titulo} description={item.comentario}/>
                        </For>
                    </div>

{/*                    <div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card ">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Titulo</h5>
                                        <p className="card-text"> Resultado de imagen para programacion web
                                            PHP, es el más conocido y usado de los lenguajes de programación Web de servidor.
                                            ASP y JSP, son dos lenguajes de programación Web que actualmente esta siendo muy
                                            usados. Y MySQL, como lenguaje de programación para manejar bases de datos..</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>*/}


                    </body>



                    <>
                    </>


                </>



        )
    }
}
//npm install -save bootstrap@4.6.0
export default ZonaWeb;