import { Link } from "react-router-dom";
import style from "./Card.module.css";


const Card = ({id,image, name, continent}) => {
  return (
    <div className={style.cardConteiner}>
      <div className={style.card}>
        <img className={style.imagen} src={image} alt={name}/>
        <Link className={style.linkNombre} to={`/detail/${id}`}>
          <p>{name}</p>
        </Link>
        <div className={style.containerTitulo}>
        <h3 className={style.titulo}>Continent</h3>
        <p>{continent}</p>
        </div>
      </div>
    </div>
  )
}

export default Card