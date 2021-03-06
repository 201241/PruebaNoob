import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import Home from "./Home";

class Publicar extends React.Component {

    constructor() {//
        super()
        this.state  = {
            titulo : '',
            comentario : '',
            doc : ''
        }
        this.status = false
        this.usernameOk = false
    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    Publicar(e){
        this.messageError.innerHTML = ''

            let publicar = {
                titulo: this.state.titulo,
                comentario: this.state.comentario,
                doc: this.state.doc
            }

            APIInvoker.invokePOST('/publicar/addPublicacion',publicar,data=>{
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })

        e.preventDefault()
    }

    render(){
        return (
            <div>
                <h1>Publicar nuevo</h1>
                <form onSubmit={this.Publicar.bind(this)}>
                    <div>
                        <label htmlFor='titulo'>titulo</label>
                        <input type='text'
                               id='titulo'
                               name='titulo'
                               placeholder='titulo'
                               value={this.state.titulo}
                               onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.titulo = self}></label>
                    </div>
                    <div>
                        <label htmlFor='comentario'>comentario</label>
                        <input  type='text'
                                id='comentario'
                                name='comentario'
                                placeholder='comentario'
                                value={this.state.comentario}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.comentario = self}></label>
                    </div>
                    <div>
                        <label htmlFor='doc'>doc</label>
                        <input  type='text'
                                id='doc'
                                name='doc'
                                placeholder='doc'
                                value={this.state.doc}
                                onChange={this.changeField.bind(this)}
                        />
                        <label ref={self=> this.username = self}></label>
                    </div>

                    <button class="btn btn-primary"
                            onClick={this.Publicar.bind(this)}>
                        Subir publicacion
                    </button>
                    <div ref={self => this.messageError = self}></div>
                </form>
            </div>
        )
    }
}

export default Publicar;