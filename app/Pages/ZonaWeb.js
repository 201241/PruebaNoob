import React from 'react'
import Card from "../components/Card";
import {Link} from "react-router-dom";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
class ZonaWeb extends React.Component {
//SVG porn
    /*
7  constructor(props) {
8    super(props)
9    this.state = { empleados: [] }
10  }
11
12  componentWillMount() {
13    fetch('http://taller-angular.carlosazaustre.es/empleados')
14      .then((response) => {
15        return response.json()
16      })
17      .then((empleados) => {
18        this.setState({ empleados: empleados })
19      })
20  }
     */

    constructor(props) {
        super(props);
        this.state = {
            lista : [],
            Jsonlista:[]
        }

    }

    componentDidMount() {
        APIInvoker.invokeGET("/publicar/getAllPublicacion", data => {

            this.setState({
                lista: data.body
            })

            console.log(this.state.lista + "<__ Lista")
        }, error=>{

        })
    }

/*    componentWillMount() {
        APIInvoker.invokeGET("/publicar/getAllPublicacion", data => {
            this.setState({
                lista: JSON.stringify( data.data)
            })
            alert(this.state.lista)
        }, error=>{
            alert( "error");
        })
    }*/

    render() {
        return(
                <div>
                    <h1> web</h1>

                    <div className="container">
                        <For each="item" index="index" of={this.state.lista} >
                            <Card key={index} title={item.titulo} description={item.comentario}/>
                        </For>
                    </div>

{/*                    <ul> {this.state.lista.map(item => {
                        return <div><li key={item}>{item.titulo} </li>  </div> })}
                    </ul>*/}
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