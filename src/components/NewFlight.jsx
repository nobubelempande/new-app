import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField } from '@mui/material';
import axios from 'axios';
import { Buffer } from 'buffer';
import picture from '../flight.png'

export default function NewFlight(){
    const [flightNumber, setFlightNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [seatsAvailable, setSeatsAvailable] = useState("");
    const [seatCost, setSeatCost] = useState("");

    const [open, setOpen] = useState(false);
    const dialogOpen = () => {
        setOpen(true);
    }
    const dialogClose = () => {
        setOpen(false);
    }
    const addFlight = () => {
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization':'Basic ' + Buffer.from(`${"admin"}:${"is_a_lie"}`).toString("base64")
          },
          
            body: JSON.stringify({ flightNumber: flightNumber, origin: origin, destination: destination, departureTime: departureTime, arrivalTime: arrivalTime, seatsAvailable: seatsAvailable, seatCost: seatCost })

        };

        axios.post('http://localhost:8202/flights', requestOptions).then(x => {
            setOpen(false);
        }).catch(err => {
            console.log(err);
        });
    }

    return(
        <div>
             <div className="moloButton">
         <figure >
                <img className="check" src={picture} alt="airplane icon"/>
                <button onClick={dialogOpen}>NEW FLIGHT</button>
            </figure>
        </div>
  

            <Dialog open={open} onClose={dialogClose}>
                <DialogTitle>
                    New Flight
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Please enter the required flight information below:        
                    </DialogContentText>

                    <FormGroup>
                        <TextField autoFocus margin="dense" label="Flight Number" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setFlightNumber(x.target.value);
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Place of Origin" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setOrigin(x.target.value);
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Destination" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setDestination(x.target.value);
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Departure Time" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setDepartureTime(x.target.value);
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Arrival Time" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setArrivalTime(x.target.value);
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Available Seats" type="number" fullWidth variant="standard" 
                            onChange = {x => {
                                setSeatsAvailable(x.target.value);
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Cost of Seat" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setSeatCost(x.target.value);
                            }}
                        />
                    </FormGroup>
                </DialogContent>

                <DialogActions>
                    <Button variant="text" onClick={addFlight}>Add</Button>
                    <Button variant="text" onClick={dialogClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}