import React from 'react'
import CardGeneral from "../components/CardGeneral";
import {Link} from "react-router-dom";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
import Header from "../components/Header";
import SearchPage from "../components/SearchPage";
import Footer from "../components/Footer";
class ZonaMatematicas extends React.Component {
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
        APIInvoker.invokeGET("/publicar/getAllPublicacionMatematicas", data => {

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
                        <Header/>
                    </header>
                    <body>
                    <div className="modal-dialog">
                        <div className="col-sm-12">
                            <div className="modal-content prueba">
                                <div className="col-12">
                                    <img src="./Imagenes/Mates.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchPage/>
                    <For each="item" index="index" of={this.state.lista} >
                        <CardGeneral key={index} title={item.titulo} description={item.comentario} doc={item.doc}/>
                    </For>
                    </body>
                    <br/>
                    <Footer/>
                </div>

        )
    }
}
//npm install -save bootstrap@4.6.0
export default ZonaMatematicas;
