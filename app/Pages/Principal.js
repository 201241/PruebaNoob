import React from 'react'
import {Link} from "react-router-dom";
class Principal extends React.Component {


    render() {
        return(
         <body>
         <h3>Ejemplo básico</h3>
         <div className="container">
             <div className="row">
                 <div className="col-lg-4">
                     <div className="card">
                         <div className="card-header">
                             Encabezado
                         </div>
                         <div className="card-body">
                             <h5 className="card-title">Special title treatment</h5>
                             <p className="card-text">With supporting text below as a natural lead-in to additional
                                 content.</p>
                             <a href="#" className="btn btn-primary">Go somewhere</a>
                         </div>
                         <div className="card-footer">Pie de página</div>
                     </div>
                 </div>
             </div>
         </div>
         </body>
        )
    }
}