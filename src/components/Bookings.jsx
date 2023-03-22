import Table from 'react-bootstrap/Table';

function Header(){
    return <div>
  <header>
      Molo Air 
    </header>
  
    <h1>
       Flight Number:      MN123
    </h1>
  
        </div>
   }
  
   function Footer(){
      const currentYear= new Date().getFullYear();
      return <footer className="footer">
        <p>Copyright ⓒ {currentYear}</p>
      </footer>
       }

function Bookings(){
    return (
        <div >
        <Header/>
        <div className="box">
        <Table className="table"striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Passport Number</th>
          <th> Email</th>
          <th>Phone Number</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Belle</td>
          <td>Mpande</td>
          <td>4568484864386</td>
          <td>jane@doe.inc</td>
          <td>+27 80 123 4567</td>
          <td>
          <button mat-raised-button color="accent">Check-In</button>
          </td>
        </tr>
      </tbody>
    </Table>
        </div>
  
  
    <Footer/>
      </div>
    )

}

export default Bookings;