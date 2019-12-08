import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import styles from './imgModal.module.css'

import ImgSpinner from './../../UI/imgSpinner/imgSpinner';

export default function ImgModal(props) {
  if(!props.data){
    return null;
  }


  const {largeImageURL, tags}=props.data
    
  return (
    <Modal show={props.show} onHide={props.close} >
   
    <Modal.Body>
        <ImgSpinner largeImageURL={largeImageURL} tags={tags} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.close}>
        Close
      </Button>
      <Button variant="primary" onClick={props.close}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  );
}
