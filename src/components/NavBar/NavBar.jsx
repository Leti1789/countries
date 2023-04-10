import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import style from './NavBar.module.css'
import {getCountryByName, getAllCountries} from "../../redux/actions/actions"

const NavBar = () => {

  const dispatch = useDispatch();


  
    const [name, setName] = useState("")

    const handleInputChange = (event) => {
        setName(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getCountryByName(name))
    }
  

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // si se da enter( keyCode=== 13) la funcion llama a handleSubmit que despacha la action que busca el pais por su nombre
      handleSubmit(event)
    }
  }





  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Link to="/home" className={style.linkLogo} onClick={()=>dispatch(getAllCountries())}>
                <h1>Countries</h1>
                </Link>
      </div>
      <div className={style.searchBar_box}>
        <input type='search' placeholder="Search a country" onChange={(event) => handleInputChange(event)} onKeyDown={(event) => handleKeyDown(event)}></input>
            <button type="submit" onClick={handleSubmit}><i class="fi fi-br-search"></i></button>
      </div>
      <div className={style.navLinks}>
            <li className={style.navItems}>
            <Link className={style.link} to="/home" onClick={()=>dispatch(getAllCountries())}>
                Home
            </Link>
            </li>
            <li className={style.navItems}>
            <Link className={style.link} to="/create">Create</Link>
            </li>
            </div>
    </div>
  )
}

export default NavBar