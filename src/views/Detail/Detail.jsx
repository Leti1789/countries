import style from "./Detail.module.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailCountry } from '../../redux/actions/actions'
import CardDetail from "../../components/CardDetail/CardDetail";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Detail = () => {
  const dispatch = useDispatch();

  let { id } = useParams();
  
  useEffect(() => {
    dispatch(getDetailCountry(id))
    window.scroll({
      top: 0,
      left:0,
    })
    }, [dispatch, id]) 
  

const detailCountry = useSelector((state) => state.detailCountry)

//id, name, image, continent, capital, subregion, area, population
  return (
    <div className={style.containerDetail}>
      <NavBar /><br />
      <CardDetail
        id={detailCountry.id}
        name={detailCountry.name}
        image={detailCountry.image}
        continent={detailCountry.continent}
        capital={detailCountry.capital}
        subregion={detailCountry.subregion}
        area={detailCountry.area}
        population={detailCountry.population}
      /><br/>
      <Footer/>
      
    </div>
  )
 }

export default Detail;
