import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div className="row row-cols-1 row-cols-md-2 g-4 my-0">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.titulo}</h5>
                                <p className="card-text">{this.props.comentario}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default Card;