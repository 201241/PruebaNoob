import React from "react";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import ListaTabla from "./ListaTabla";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.componentDid_Mount();
        this.state  = {
            searchWord:'',
            lista : [],
            encontrado : []
        }
    }

    changeField_(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    componentDid_Mount() {
        APIInvoker.invokeGET("/publicar/getAllPublicacionWeb", data => {
            this.setState({
                lista: data.body
            })
            console.log(this.state.lista + "<__ Lista search*")
        }, error=>{

        })
    }

    search(){
        let pos;
        for (let i=0; i<this.state.lista.length; i++){
            pos = this.state.lista[i].titulo.indexOf(this.state.searchWord);
            if(pos!=-1){
                this.state.encontrado.push(this.state.lista[i]);
                console.log(this.state.lista[i].titulo.toString() + "<< encontrado")
            }
        }
        alert("end search");
        for (let j=0; j<this.state.encontrado.length; j++){
            alert(this.state.encontrado[j].titulo);
        }
    }

    eventReturn(response){
        alert(response.titulo + "<< title")
        this.props.onResponse(response);
    }

    render() {
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
                    {
                        //para que agarre de nuevo, hay que cambiar a array (lista y viceverza)
                    }
                    <For each="item" index="index" of={this.state.encontrado}>
                        <ListaTabla key={index} title={item} onResponse={this.eventReturn.bind(this)}/>
                    </For>


                </div>
            </React.Fragment>
        )
    }
};
export default SearchPage;




