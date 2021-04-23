import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ContenidoPerfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lista : []
        }
    }

    componentDidMount() {

        let idUser = window.localStorage.getItem("idUser");

        APIInvoker.invokeGET(`/publicar/getAllPublicacionPerfil/${idUser}`,(data) => {
            this.setState({
                lista: data.body
            })

            console.log(this.state.lista + "<__ Lista")
        }, error => {
            alert("si llega no sirve")
            //alert(data.body)
        })
    }

    render() {
        return(
            <div>
                <link rel="stylesheet" href="./CSS/Home.css"/>
                <div className="container-fluid text-center">
                </div>
                <header>
                    <Header/>
                </header>
                //Mi contenido


                <div>
                    <For each="item" index="index" of={this.state.lista} >
                        <Card key={index} title={item.titulo} description={item.comentario} Id_publicacion={item.Id_publicacion} doc={item.doc} />
                    </For>
                </div>
                <br/>
                <Footer/>
            </div>
        )

    }

}

export default ContenidoPerfil;




//ContenidoPerfil