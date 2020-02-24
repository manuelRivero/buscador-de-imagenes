import React, { Component } from 'react'

import {Alert} from 'react-bootstrap'
// css
import './buscador.css';

export default class Buscador extends Component {
    constructor(){
        super()
        this.state={
            inputValue:'',
            showMissinInputAlert:false
        }
    }
    
    handle= (e) => {
        e.preventDefault();
        const criterio = this.state.inputValue;
        if(criterio !== ''){
            this.props.criterio(criterio);
            this.setState({
                showMissinInputAlert:false
            })
        }else{
            this.setState({
                animationOn:true,
                showMissinInputAlert:true
            })

            setTimeout( ()=> {
                this.setState({
                    showMissinInputAlert:false
                })
            }, 1500)
        }
    }

    animationEndHandler = () => {
        this.setState({
            animationOn:false
        })
    }
    
    inputChangeHandler = (e) =>{
        this.setState({
            inputValue:e.target.value
        })
    }

  render() {
    return (
      <div className="buscador mt-5">
          <form onSubmit={this.handle}>
                <div className="row justify-content-center">
                    <div className='form-group input-group-lg col-md-6'>
                        <input type="text"
                                className={this.state.animationOn ? "form-control mb-2 shake" : "form-control mb-2"}
                                placeholder="Busca tu imagen" 
                                onChange={this.inputChangeHandler}
                                onAnimationEnd={this.animationEndHandler} 
                        />
                        {this.state.showMissinInputAlert && 
                            <Alert variant="light" > Intenta escribir algo primero </Alert>}

                    </div>
                    <div className=" form-group col-md-2">
                        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={this.props.isloading}>
                            {this.props.isloading ? 
                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                              <span>Buscar</span>
                            }
                        </button>
                    </div>
                </div>
          </form>
      </div>
    )
  }
}
