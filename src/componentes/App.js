import React , {Component}from 'react';
import Buscador from './Buscador/Buscador';
import Imagenes from './Imagenes/Imagenes';
import Spinner from './Spinner/Spinner';

export default class App extends Component {

  state={
    criterio: null,
    imagenes:null,
    loading:false,
    page:1,
    totalPages:null,
    error:{
      status:false,
      message:null
    }
  }
  getData =  (criterio, page = 0) => {
          this.setState({
            loading:true
          })
          console.log(`este es el estado ${this.state}`)
          const url= `https://pixabay.com/api/?key=12382521-b5a34d282a2dc46fad2f95cf3&q=${criterio}&page=${page}`;
          fetch(url)
          .then( res => res.json())
          .then(res => {
            const totalPages = Math.ceil(res.totalHits / 20);
            this.setState({
              imagenes:res.hits,
              loading:false,
              totalPages,
              error:{
                status:false
              }
            });
          }).catch( err => {
            console.log(err.message)
            this.setState({
              loading:false,
              criterio:null,
              error:{
                status:true,
                message:err.message
              }
            })
          })
   }

  criterio = (criterio) => {
    this.setState({
      criterio
    })
  }

  componentWillUpdate (nextProps, nextState){
    const criterio =this.state.criterio;
    const page = this.state.page;
    if( criterio !== nextState.criterio || page !== nextState.page){
      this.getData(nextState.criterio, page);
    }
  }

  // Pagination
  backPage = () => {
    let page = this.state.page;
    if (page === 1) return null;
    page --;
    this.setState({
      page
    })
  }
  fowardPage = () => {
    let {page} = this.state;
    const {totalPages} = this.state
    if( page === totalPages ){
      console.log('ultima pagina')
      return null
    }
    page ++;
    this.setState({
      page
    })
  }

  // renders functions
  renderSpinner = () => {
    return <Spinner/>
  }
  renderImg = () => {
    const {imagenes, totalPages, page} = this.state;
    return <Imagenes imagenes={imagenes} backPage={this.backPage} fowardPage={this.fowardPage} totalPages={totalPages} page={page}/>
  }
  renderErrorAlert = () => {
      return  (
      <div class="alert alert-danger" role="alert">
          <p>{this.state.error.message}</p>
      </div>
      )
  }

  // content to be render
  content = ( )=> {
     return (
      <div className="App container">
          <div className="jumbotron">
              <p className="lead text-center">Buscador de imagenes</p>
              <Buscador criterio = {this.criterio}></Buscador>
          </div>
          <div className="row justify-content-center">
                { 
                  this.state.loading &&
                    this.renderSpinner()
                 }
                 {
                   (this.state.imagenes && !this.state.error.status && !this.state.loading ) &&
                    this.renderImg()
                }
                {
                  this.state.error.status &&
                  this.renderErrorAlert()
                }
                
          </div>
      </div>
      )
  
  }

  render (){
    return this.content();
  }

}
