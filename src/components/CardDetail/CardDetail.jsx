import style from './CardDetail.module.css'

//? este componente recibe (id, name, image,continent, capital, subregion, area, population )
const CardDetail = ({id, name, image, continent, capital, subregion, area, population}) => {
  return (
    <div className={style.cardDetailContainer} >
      <div className={style.cardDetailImage}>
        <img className={style.imagen} src={image} alt={name} />
      </div>
      <div className={style.cardDetailInfo}>
        <div className={style.tituloContainer}>
        <h2 className={style.titulo}>Name:</h2>
        <p>{name}</p>
        </div>
        <div className={style.tituloContainer}>
        <h2 className={style.titulo}>ID:</h2>
        <p>{id}</p>
        </div>
        <div className={style.tituloContainer}>
          <h2 className={style.titulo}>Capital:</h2>
          <p>{capital}</p>
        </div>
        <div className={style.tituloContainer}>
          <h2 className={style.titulo}>Subregion:</h2>
          <p>{subregion}</p>
        </div>
          <div className={style.tituloContainer}>
          <h2 className={style.titulo}>Continent:</h2>
          <p>{continent}</p>
        </div>
        <div className={style.tituloContainer}>
          <h2 className={style.titulo}>Area:</h2>
          <p>{area}</p>
        </div>
        <div className={style.tituloContainer}>
          <h2 className={style.titulo}>Population:</h2>
          <p>{population}</p>
        </div>
      </div>

    </div>
  )
}

export default CardDetail