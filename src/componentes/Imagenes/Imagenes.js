import React, { Component } from 'react';
import Imagen from '../Imagen/Imagen';
import Paginacion from '../Paginacion/Paginacion'

export default class Imagenes extends Component {

    renderImagenes = () => {
        const {imagenes, totalPages, page, backPage,fowardPage} = this.props;
        
        return ( 
          <React.Fragment>
              <div className="col-12 p-5 row">
                {
                  imagenes.map( (imagen, index) => (
                  <Imagen key={index} imagen={imagen} clicked={this.props.clickedImg} />
                  ))
                }
              </div>
              <Paginacion backPage={backPage} fowardPage={fowardPage} totalPages={totalPages} page={page} />
          </React.Fragment>
          
        )
    }

   renderNoResults = () => {
     return (
      <div class="alert alert-warning" role="alert">
        <p> No results!</p>
      </div>
     )
   }
  render() {

    return (
        <React.Fragment>
            {   this.props.imagenes.length > 0 ?
                this.renderImagenes() :
                this.renderNoResults()
                }
        </React.Fragment>
    )
  }
}
