import NavBar from '../../components/NavBar/NavBar';
import CardContainer from '../../components/CardContainer/CardContainer'
import Footer from '../../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import{ getAllCountries} from '../../redux/actions/actions'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch]);





  return (
    <div>
      <NavBar /><br />
      <CardContainer />
      <Footer/>
    </div>
  )
}

export default Home;