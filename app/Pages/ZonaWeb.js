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
            personas : ["mia", "guap", "wia"],
            lista : ["1", "2", "3"]
        }
    }

    componentDidMount() {
        APIInvoker.invokeGET("/publicar/getAllPublicacion", data => {
            this.setState({
                lista: JSON.stringify( data.data[0] )
            })
            alert(this.state.lista)
        }, error=>{
            alert( "error");
        })
    }

    render() {
        return(
                <div>
                    <h1> web</h1>

                    <ul> {this.state.lista.map(item => {
                        return <div><li>{item} </li>  </div> })}
                    </ul>


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