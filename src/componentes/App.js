import React , {Component}from 'react';
import Buscador from './Buscador/Buscador';
import Imagenes from './Imagenes/Imagenes';
import Spinner from './Spinner/Spinner';
import ImgModal from './imgModal/imgModal';
import Navbar from './layout/nabvar/navbar'

// bootstrap
import Alert from 'react-bootstrap/Alert'

export default class App extends Component {

  state={
    criterio: null,
    imagenes:null,
    loading:false,
    page:1,
    totalPages:null,
    showModal:true,
    selectedImg:null,
    error:null
  }
  getData =  (criterio, page = 0) => {
          this.setState({
            loading:true,
            error:null
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
              error:null
            });
          }).catch( err => {
            let message =  "Tal parece que alguien del backend no hizo bien su trabajo! estamos trabajando para resolver este problema :)"
            this.setState({
              loading:false,
              criterio:null,
              error:message
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
    return <Imagenes 
                imagenes={imagenes} 
                backPage={this.backPage} 
                fowardPage={this.fowardPage} 
                totalPages={totalPages} 
                page={page}
                clickedImg={this.clickImgHandler}/>
  }
  closeAlertHanler = ()=>{
    this.setState({error:null})

  }
  renderErrorAlert = () => {
      return  (
        
      <Alert variant="danger" onClose={this.closeAlertHanler} dismissible>
      <Alert.Heading>Oh no! algo paso!</Alert.Heading>
      <p>
        {this.state.error}
      </p>
    </Alert>
      )
  }

  closeHandler = () => {
    this.setState({showModal:false})
  }

  clickImgHandler=(img)=>{
    this.setState({selectedImg: img,
                    showModal:true
                  });
  }
  // content to be render
  content = ( )=> {
     return (
       <React.Fragment>
         <Navbar/>
         <div className="App container" >
          <div  className="jumbotron mt-5">
              <p className="lead text-center display-4">Buscador de imagenes</p>
              <Buscador criterio = {this.criterio} isloading={this.state.loading}></Buscador>
          </div>
          <div className="row justify-content-center">
                { 
                  this.state.loading &&
                    this.renderSpinner()
                 }
                 {
                   (this.state.imagenes && !this.state.error && !this.state.loading ) &&
                    this.renderImg()
                }
                {
                  this.state.error &&
                  this.renderErrorAlert()
                }
                
          </div>
          <ImgModal show={this.state.showModal} close={this.closeHandler} data={this.state.selectedImg} />
      </div>
       </React.Fragment>
      
      )
  
  }

  render (){
    return this.content();
  }

}
