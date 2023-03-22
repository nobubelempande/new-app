import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

function Header(){
  return <div>
<header>
    Molo Air 
  </header>

  <h1>
      Departure Flights
  </h1>

      </div>
 }

 function Footer(){
    const currentYear= new Date().getFullYear();
    return <footer className="footer">
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
     }


     const Home = (props) => {
        const navigate = useNavigate();
   return (
    <div >
      <Header/>
      <div className="box">
      <Table className="table"striped bordered hover>
    <thead>
      <tr>
        <th>Flight Number</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Departure Time</th>
        <th>Arrival Time</th>
        <th>Manage Bookings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MN123</td>
        <td>JOHANNESBURG</td>
        <td>CAPE_TOWN</td>
        <td>2020-05-06T12:35:00</td>
        <td>2020-05-06T14:40:00</td>
        <td>
        <button mat-raised-button color="accent" onClick={() => navigate("/bookings")}>VIEW</button>
        </td>
      </tr>
      <tr className='button'>
        <td>MN123</td>
        <td>JOHANNESBURG</td>
        <td>CAPE_TOWN</td>
        <td>2020-05-06T12:35:00</td>
        <td>2020-05-06T14:40:00</td>
        <td>
        <button mat-raised-button color="accent" onClick={() => navigate("/bookings")} >VIEW</button>
        </td>
      </tr>
    </tbody>
  </Table>
      </div>


  <Footer/>
    </div>
    
);
}
     

export default Home;