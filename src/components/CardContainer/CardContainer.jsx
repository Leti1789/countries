import style from "./CardContainer.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from '../Card/Card'
import Paginado from "../Paginado/Paginado"
import { getActivities, filterActivity, filterContinent, alphaOrderAZ, alphaOrderZA,populationOrderAsc, populacionOrderDes} from '../../redux/actions/actions'

const CardConteiner = () => {

  const dispatch = useDispatch();


useEffect(() => {
    dispatch(getActivities());
}, [dispatch])



//? Estados globales
const countries = useSelector(state => state.countries)


  const activities = useSelector(state => state.activities)
  console.log(activities.length)

//!Estado local
const [order, setOrder] = useState("")

  
//* Paginado
  
  const [pagina, setPagina] = useState(1);
    

    let cantidadPorPagina = 10

  const maximo = Math.ceil(countries.length / cantidadPorPagina);
  
  let currentPage = countries.slice((pagina-1) * cantidadPorPagina, (pagina-1) * cantidadPorPagina + cantidadPorPagina)

  
//? Filtro por actividad
  
  const handleChangeFilterActivity = (event) => {
        dispatch(filterActivity(event.target.value))
    }

  //!Filtro por continente

    const handleChangeFilterContinent = (event) => {
        dispatch(filterContinent(event.target.value))
    }

//*Ordenamiento alfabetico
  
    const handleChangeOrder = (event) => {
        const { value } = event.target;
        if (value === 'A-Z') {
            dispatch(alphaOrderAZ(value))
            setOrder(`ordenado${event.target.value}`)
        }
        else if (value === 'Z-A') {
            dispatch(alphaOrderZA(value))
            setOrder(`ordenado${event.target.value}`)
        }
    }

  //? Ordenamiento por cantidad de poplacion


     //!Ordenamiento por poblacion asc/des
    const handleChangeOrderPopulation = (event) => {
        const { value } = event.target;
        if (value === 'asc_population') {
            dispatch(populationOrderAsc(value))
            setOrder(`ordenado${event.target.value}`)
        }
        else if (value === 'des_population') {
            dispatch(populacionOrderDes(value))
            setOrder(`ordenado${event.target.value}`)
        }
    }



  return (
    <div className={style.containerCards}>

         <div className={style.containerFilter}>
    

                    <div className={style.orderAlfa}>
                        <select name="Por orden alfabetico" onChange={(event) =>handleChangeOrder(event)}>
                            <option disabled selected defaultValue>
                            Alphabetical order
                            </option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                        </select>
                    </div> 

                    <div className={style.orderPopulation}>
                        <select name="por poplacion" onChange={(event)=>handleChangeOrderPopulation(event)}>
                            <option disabled selected defaultValue>
                            Population order
                            </option>
                            <option value="des_population">DES</option>
                            <option value="asc_population">ASC</option>

                        </select>
                        </div>

                        <div className={style.activity}>
                        <select name="activities" onChange={handleChangeFilterActivity}>
                        <option disabled selected defaultValue>
                            Activities
                            </option>
                            <option value="ALL">
                                All Activities
                            </option>
                                {
                                    activities.map(act => (
                                        <option value={act.name} key={act.id}> {act.name} </option>
                                                    ))}
                            </select>
                    </div>
                    
                    <div className={style.continent}>
                        <select name='continent' onChange={handleChangeFilterContinent}>
                        <option disabled selected defaultValue>
                            Continent
                            </option>
                                        <option value="all">All continents</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Europe">Europe</option>
                                        <option value="North America">North America</option>
                                        <option value="South America">South America</option>
                                        <option value="Oceania">Oceania</option>
                                        </select>
                        </div>
                </div>
      <div className={style.containerCountries}>
        {currentPage
          .map(country => (
            <div className={style.countriesContainer} key={country.id}>
              <Card
                id={country.id}
                image={country.image}
                name={country.name}
                continent={country.continent}
              />
            </div>
            
          ))
        }
      </div>
      <div className={style.containerPaginado}>
                    <Paginado
                pagina={pagina}
                setPagina={setPagina}
                maximo={maximo}/>
            </div>
    </div>
  )
}

export default CardConteiner;