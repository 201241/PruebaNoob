import React from 'react'
import CardGeneral from "../components/CardGeneral";
import {Link} from "react-router-dom";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
import Header from "../components/Header";
import SearchPage from "../components/SearchPage";
import Footer from "../components/Footer";
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
                        <Header/>
                    </header>
                    <body>
                    <SearchPage/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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
export default ZonaWeb;

/*

                     <div className="container">
                         <Link to='/publicar'>
                             <h6 className='text-center'>publicar</h6>
                         </Link>
                     </div>

 */