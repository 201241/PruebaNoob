import React from "react";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import ListaTabla from "./ListaTabla";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            searchWord:'',
            lista : [],
            encontrado : []
        }
        this.componentDid_Mount();
    }

    changeField_(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    componentDid_Mount() {
        //alert("apiiin")
        APIInvoker.invokeGET("/publicar/getAllPublicacion", data => {
            this.setState({
                lista: data.body
            })
            console.log(this.state.lista + "<__ Lista search*")
        }, error=>{
            console.log("error")
        })
        //alert("apiiin end")
    }

    search(e){
        e.preventDefault();
        //alert("fin")
        //this.state.lista = this.props.title;
        this.state.encontrado = [];
        //this.componentDid_Mount();
        let pos;
        let arrayAux=[];
        for (let i=0; i<this.state.lista.length; i++){
            pos = this.state.lista[i].titulo.indexOf(this.state.searchWord);
            if(pos!=-1){
                arrayAux.push(this.state.lista[i]) //console.log(this.state.lista[i].titulo.toString() + "<< encontrado")
            }
        }
        this.setState({
            encontrado : arrayAux
        })

        //alert(arrayAux.length + " aa sd estaaa");
        //alert(this.state.encontrado.length + "estaaa");

        //alert("end search");
        for (let j=0; j<this.state.encontrado.length; j++){
            console.log(this.state.encontrado[j].titulo + " title");
        }
        //alert("end rec search");

    }

    eventReturn(response){
        //alert(response.titulo + "<< title")
        this.props.onResponse(response);
    }

    render() {
      //alert(this.state.encontrado.length + "<long")
        for(let i=0; i<this.state.encontrado.length; i++){
            //alert(this.state.encontrado[i].titulo + " render");
        }

        return(
            <React.Fragment>
                <div>
                    <div>
                        <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand">Noobemy</a>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" value={this.state.searchWord} id='comentario'
                                           name='searchWord' onChange={this.changeField_.bind(this)} aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit" onClick={this.search.bind(this)}>Search</button>
                                </form>
                            </div>
                        </nav>
                        <p className="card-text letras"> </p>
                    </div>
                    <For each="item" index="index" of={this.state.encontrado}>
                        <ListaTabla key={index} title={item} onResponse={this.eventReturn.bind(this)}/>
                    </For>

                </div>
            </React.Fragment>
        )
    }
};
export default SearchPage;
