import style from './Form.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, postActivity } from '../../redux/actions/actions'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';

const Form = () => {

// Campos del formulario (Actividad): Nombre, dificultad, duracion, temporada, posibilidad de agregar/seleccionar varios paises en simultaneo, boton para crear la actividad turistica 


  const dispatch = useDispatch();
  
const countries = useSelector(state => state.countries)
  
  
  //? Estados locales
  
  
  
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  })
  
  
  const [button, setButton] = useState(true)
  
  
  const validateInputs = () => {
    return Object.values(input).every(Boolean) && input.countries.length > 0;
    
  }
  
  //! use effect
      useEffect(() => {
          dispatch(getAllCountries())
      }, [dispatch])
  
  

  useEffect(() => {
        setButton(!validateInputs());
  }, [input])



  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: ""
  })
  
  //* Funciones handlers

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setInput({
      ...input,
      [property]:value
    })
  }


  
  const handleSelect = (event) => {
  const selectedCountry = event.target.value;
  if (!input.countries.includes(selectedCountry) && input.countries.length < 3) {
    setInput({
      ...input,
      countries: [...input.countries, selectedCountry]
    });
  }
      setErrors(validate({
            ...input,
            [event.target.name] : event.target.value
        }))
    
};
  
  const handleSelectChange = (event) => {
  const property = event.target.name;
  const value = event.target.value;
  setInput({
    ...input,
    [property]: value
  })
    setErrors(validate({
            ...input,
            [property] : value
        }))
};

  
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(input))
        alert("activity created successfully!")
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
      }
  
  
    const handleDelete = (e) => {
        const toDelete = e.target.innerText

        setInput({
            ...input,
            countries: input.countries.filter((e) => e !== toDelete)
            

        })
    }


//* Funcion validadora
  
const validate = (input) => {
  //! input name
  let nameRegex = /^[a-zA-Z]{4,20}$/;

  if (!input.name) errors.name = "Name is a required field";
  else if (!nameRegex.test(input.name)) errors.name = "Must be string with length [4, 20]";
  else errors.name = ""; 

  //? Select difficulty
  if (!input.difficulty) errors.difficulty = "Difficulty is a required field";
  else errors.difficulty = ""

  //* input duration
  let durationRegex = /^.{4,12}$/;
  if (!input.duration) errors.duration = "Duration is a required field";
  else if (!durationRegex.test(input.duration)) errors.duration = "Duration must be a string with length [4,12]";
  else errors.duration = ""

  //! select season
  if (!input.season) errors.season = "Season is a required field";
  else errors.season = "";

  //? select countries
  if (!input.countries || input.countries.length === 0) {
    errors.countries = "At least one country is required";
  } else if (input.countries.length > 3) {
    errors.countries = "You can select up to three countries";
  } else if (input.countries.length > 0 && input.countries.length <= 3) {
    errors.countries = "";
  }

  return errors;
};








const season = ['summer', 'spring', 'autumn', 'winter'];
const difficulty = ["1", "2", "3", "4", "5"];



  return (
    <>
      <NavBar/><br />
      <div className={style.container}>
        <div className={style.imagenForm}>

            </div>
        

        <div className={style.containerForm}>
          

        <form onSubmit={(event) => handleSubmit(event)}>
            <h2 className={style.titulo}>Add a new activity!✈</h2><br />
            
          <div className={style.inputDiv}>
                    <label htmlFor='name'>Name</label><br/><br/>
                <input
                  
                    name="name"
                    type="text"
                    placeholder="Name..."
                  value={input.name}
              onChange={handleInputChange}
              className={errors.name ? style.errorsInput : ''}
            />
            <br/>
                    {errors.name && <span className={style.errors}>{errors.name}</span>}

          </div><br />
          
          <div className={style.inputDiv}>
            <label htmlFor='difficulty'>Difficulty</label><br/><br/>
            <select name='difficulty'
              id='difficulty'
              onChange={handleSelectChange}
                className={errors.difficulty ? style.errorsInput : ''}>
                
              <option disabled selected defaultValue>-Choose one-</option>
              {difficulty.map(item => (
                                    <option value={item} name="difficulty" key={item}>{item}</option>
                                    ))}
            </select>
            {errors.difficulty && <span className={style.errors}>{errors.difficulty}</span>}
            </div><br />
            
        <div className={style.inputDiv}>
                    <label htmlFor="duration">Duration</label><br/><br/>
                <input
                  
                    name="duration"
                    type="text"
                    placeholder="ejemplo: 4 horas..."
              value={input.duration}
              onChange={handleInputChange}
              className={errors.duration ? style.errorsInput : ''}
            
              />
              {errors.duration && <span className={style.errors}>{errors.duration}</span>}
          </div><br />

          <div className={style.inputDiv}>
              <label htmlFor='season'>Season</label><br/><br/>
            <select name='season'
              id='season'
                onChange={handleSelectChange}
                className={errors.season ? style.errorsInput : ''}
            >
              <option disabled selected defaultValue>-Choose one-</option>
              {season.map(item => (
                                    <option value={item} name="season" key={item}>{item}</option>
                                    ))}
            </select>
            <br/>
            {errors.season && <span className={style.errors}>{errors.season}</span>}
          </div><br />

            
          <div className={style.inputDiv}>
            <label htmlFor='season'>Country</label><br/><br/>
            <select
              onChange={handleSelect}
              name='country'
              id='country'
              disabled = {input.countries.length === 3? true:false}>
              <option disabled selected defaultValue>-Choose one or more-</option>
              {countries.map(item => (
                                    <option value={item.name} key={item.name} name="country">{item.name}</option>
                                    ))}
            
              </select>
          </div><br />
                    <div>
                        <h2 className={style.countries}>Selected countries:</h2>
                    </div>
                    <br/>

                    <div className={style.containerCountry}>
                        {input.countries.map(country => 
                            <div className={style.countryElement} onClick={handleDelete}>
                                <span>{`${country}`}</span>  
                            </div>
            )}
            <br/>
        {errors.countries && <span className={style.errors}>{errors.countries}</span>}
            </div>

                    <br/>

          
          <button type="submit" disabled={button}>Create new activity!</button>
        </form>

      </div>

      </div><br/>
      <Footer/>
      </>
  )
}

export default Form;