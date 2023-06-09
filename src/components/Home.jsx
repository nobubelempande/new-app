import Axios from 'axios';
import { useEffect, useState } from 'react';
import Flights from './Flights';
import Header from './Header';
import Footer from './Footer';

export default function Home(){
  useEffect(() => {
    Axios.get("http://localhost:8202/flights").then(x => {
      setFlights(x.data);
    })
  });

  const [flights, setFlights] = useState([]);
  const flightObj = (flight, i) => {
    return <Flights flights={flight} key={i} />
  }
  const flightList = flights.map((x, i) => flightObj(x, i))

  return(
      <div>
        <Header></Header>

        {flightList}

        <Footer></Footer>
      </div>
  )
}