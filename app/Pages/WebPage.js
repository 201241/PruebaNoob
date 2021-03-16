
/*
import React,{useState, Fragment} from 'react';
import APIInvoker from "../utils/APIInvoker";


const WebPage = () => {

    list:[];

    APIInvoker.invokeGET("/publicar/getAllPublicacion", data => {
        this.setState({
            list: JSON.stringify( data.data[0] )
        })
        alert(this.state.lista)
    }, error=>{
        alert( "error");
    })

    const [lista] = useState(list)

    return(
        <Fragment>
            <h2>
                Listar
            </h2>
            {
                lista.map((item, index) =>
                <p key={index}>{item} - {index}  </p>
                )
            }
        </Fragment>
    );
}

export default WebPage;


/!*
import React, {Fragment} from 'react'
import index from "precss";



class WebPage extends React.Component {
    constructor() {
        super();
    }

    render() {
    }

}
 *!/*/
