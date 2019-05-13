import React, { Component } from 'react'

export default class Buscador extends Component {
    criterio= React.createRef();
    handle= (e) => {
        e.preventDefault();
        const criterio = this.criterio.current.value;
        if(criterio !== ""){
            this.props.criterio(criterio);
        } else {
            alert("intenta escribir algo en el buscador");
        }
        
    }
    
  render() {
    return (
      <div>
          <form onSubmit={this.handle}>
                <div className="row">
                    <div className=" form-group input-group-lg col-md-8">
                        <input type="text" className="form-control" placeholder="Busca tu imagen" ref={this.criterio} />
                    </div>
                    <div className=" form-group col-md-4">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Buscar</button>
                    </div>
                </div>
          </form>
      </div>
    )
  }
}
