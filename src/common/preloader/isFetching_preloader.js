import React from 'react';
import LoaderImg from '../../components/images/loaders.svg'
import style from './isFetching_preloader.module.css'

let Preloader = () => {
return <div className={style.preloader}> <img src={LoaderImg} alt='Loading...'/> </div>

}

export default Preloader