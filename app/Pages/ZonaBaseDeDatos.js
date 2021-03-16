import React from 'react'
import Card from "../components/Card";
import {Link} from "react-router-dom";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";

class ZonaBaseDeDatos extends React.Component {
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
        APIInvoker.invokeGET("/publicar/getAllPublicacionBD", data => {

            this.setState({
                lista: data.body
            })

            console.log(this.state.lista + "<__ Lista")
        }, error=>{

        })
    }

    render() {
        return(
                <div>
                    <h1> Base de datos</h1>

                    <div className="container">
                        <For each="item" index="index" of={this.state.lista} >
                            <Card key={index} title={item.titulo} description={item.comentario}/>
                        </For>
                    </div>

                </div>

        )
    }
}
//npm install -save bootstrap@4.6.0
export default ZonaBaseDeDatos;

/*

                     <div className="container">
                         <Link to='/publicar'>
                             <h6 className='text-center'>publicar</h6>
                         </Link>
                     </div>

 */