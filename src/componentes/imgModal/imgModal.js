import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import styles from './imgModal.module.css'

import spinnerGif from '../../assets/images/spinner.gif';

export default function ImgModal(props) {
  if(!props.data){
    return null;
  }


  const {largeImageURL, tags}=props.data
    
  return (
    <Modal show={props.show} onHide={props.close} >
   
    <Modal.Body>
      <div style={{backgroundImage:`url(${spinnerGif})`}}>
              <img  src={largeImageURL} alt={tags} style={{width:'100%'}} />
      </div>
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
