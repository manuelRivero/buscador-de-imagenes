import React from 'react';
import ImgSpinner from './../../UI/imgSpinner/imgSpinner';
import {Badge} from 'react-bootstrap';

export default (props) => {
  const {previewURL, tags, comments, likes, views, largeImageURL} = props.imagen;
  const clickHandler = (e)=>{
    props.clicked(props.imagen)
  }
  return (
    <div className="col-sm-12 col-md-4 col-lg-3" style={{marginBottom:'1rem' }}>
          <div className="card h-100" >
          <ImgSpinner largeImageURL={previewURL} tags={tags} />
            <div className="card-body">
              <p className="card-text"><strong>Likes: </strong> <Badge variant="success">{likes}</Badge></p>
              <p className="card-text"><strong>Views: </strong> <Badge variant="primary">{views}</Badge></p>
              <p className="card-text"><strong>Comments: </strong> <Badge variant="primary">{comments}</Badge></p>
              <button onClick={clickHandler} className="btn btn-primary btn-block">Ver imagen</button>
            </div>
           </div>
    </div>
  )
}
