import React from 'react';
import {Modal, Button} from 'react-bootstrap';

import ImgSpinner from './../../UI/imgSpinner/imgSpinner';

export default function ImgModal(props) {
  if(!props.data){
    return null;
  }


  const {largeImageURL, tags}=props.data
    
  return (
    <Modal show={props.show} onHide={props.close}  centered >
   
    <Modal.Body>
        <ImgSpinner largeImageURL={largeImageURL} tags={tags} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.close}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
  );
}
