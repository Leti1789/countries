import { Link } from "react-router-dom";
import style from './Landing.module.css';
import video from '../../assets/mundo.mp4'

const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.contenido}>
        <div className={style.titulo}>
        <h1>Countries</h1><br/>
        </div>
        <div className={style.boton}>
    <Link to='/home'>
            <button><span>Get in</span></button>
        </Link>   
        </div>
    </div>
      <video muted autoPlay loop>
      <source src={video} type="video/mp4" />
      </video> 
      <div className={style.capa}></div>
    </div>
    
  )
}

export default Landing;