import React from 'react';

import spinnerGif from '../../assets/images/spinner.gif';
import styles from './imgSpinner.module.css';

export default function imgSpinner(props) {
    const {largeImageURL, tags}=props;
      return (
    <>
        <div className={styles.ImgContainer}style={{backgroundImage:`url(${spinnerGif})`}}>
              <img  src={largeImageURL} alt={tags} style={{width:'100%'}} />
        </div>
    </>
  );
}
