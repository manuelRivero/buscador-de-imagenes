import React from 'react'

export default (props) => {
  const {previewURL, tags, comments, likes, views, largeImageURL} = props.imagen;
  const clickHandler = (e)=>{
    props.clicked(props.imagen)
  }
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card" style={{margin:'10px' }}>
            <img src={previewURL} className="card-img-top" alt={tags} />
            <div className="card-body">
              <p className="card-text">Likes {likes}</p>
              <p className="card-text">Views {views}</p>
              <p className="card-text">Comments {comments}</p>
              <a role="button" onClick={clickHandler} className="btn btn-primary btn-block">Ver imagen</a>
            </div>
           </div>
    </div>
  )
}
