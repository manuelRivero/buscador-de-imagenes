import React, {useState} from 'react';

import spinnerGif from '../../assets/images/spinner.gif';
import styles from './imgSpinner.module.css';

export default (props)=>{
    const [imageStatus, setImageStatus] = useState(false)
    const {largeImageURL, tags}=props;
    const loadHandler = ()=>{
        setImageStatus(true);
    }

      return (
    <>
        <div className={styles.ImgContainer}style={{backgroundImage:`url(${spinnerGif})`}}>
              <img  src={largeImageURL} 
                    alt={tags} 
                    className={imageStatus && styles.FadeIn}
                    style={{width:'100%',backgroundColor: '#fff'}} 
                    onLoad={loadHandler}/>
        </div>
    </>
  );
}
