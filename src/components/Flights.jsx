import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function Flights({flights}){
    const navigate = useNavigate();

    return(
        <div>        
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div>
                        <h1>{flights.origin} to {flights.destination}</h1>
                        <h2>{flights.flightNumber}</h2>
                        
                        {/* Add other information */}
                    </div>
                </CardContent>

                <CardActions>
                <Button onClick={() => navigate("/bookings")}>VIEW</Button>
                </CardActions>
            </Card>
        </div>
    )
}