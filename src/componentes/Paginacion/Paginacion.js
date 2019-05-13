import React, { Component } from 'react'

export default class Paginacion extends Component {

backPageBtn = () => {
  const {page, totalPages} = this.props;
  if(page === 1) return null;
  return (
    <button onClick={this.props.backPage} className="btn btn-primary m-2">Back</button>
  )
}

fowardPageBtn = () => {
  const {page, totalPages} = this.props;
  if(page === totalPages) return null;
  return (
    <button onClick={this.props.fowardPage} className="btn btn-primary m-2">Fowards</button>
  )
}
  render() {
    //const {page, totalPages} = this.props;
    return (
            <div className=" row ">
                {this.backPageBtn()}
                {this.fowardPageBtn()}
            </div>
    )
  }
}
