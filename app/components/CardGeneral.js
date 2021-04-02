import React from 'react'

class CardGeneral extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div className="modal-dialog ">
                    <link rel="stylesheet" href="./CSS/Card.css"/>
                    <div className="col-sm-12">
                        <div className="modal-content border-0 ">
                            <div className="col-12">
                                <div className="card tarjeta">
                                    <h5 className="card-header text-center fondoheader">{this.props.title}</h5>
                                    <div className="card-body">
                                        <p className="card-text letras">{this.props.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
};

export default CardGeneral;

/*<div className="row row-cols-1 row-cols-md-2 g-4 my-0">
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
            </div>
        </div>
    </div>
</div>*/