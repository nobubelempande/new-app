import { useNavigate } from "react-router-dom";
import flying from '../destination.png'


export default function Flights({flights}){
    const navigate = useNavigate();
    const formatDate = (date) => {
        let newDate = date.split("T").join(" ")
        return newDate.substring(0, newDate.length -3)
    }


    return(
        <div className="flightDetails">
         <div>
         <h1 className="flightNumber">{flights.flightNumber}</h1>
         </div>

         <div>
         <h1 className="flightOrigin">{flights.origin}</h1>
         <h2> {formatDate(flights.departureTime)} </h2>
         </div>

         <div className="checking">
         <figure className="flight-logo">
                <img id="flight-logo" src={flying} alt="airplane icon"/>
            </figure>
         </div>

         <div>
         <h1 className="flightDestination">{flights.destination}</h1>
         <h2> {formatDate(flights.arrivalTime)} </h2>
         </div>

         <div>
         <button onClick={() => navigate("/bookings")}>MANAGE</button>
         </div>
               
            
        
        
    
        </div>

    

    )
}