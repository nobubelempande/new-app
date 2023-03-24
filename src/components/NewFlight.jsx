import React, { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Flight } from '../dtos/FlightDTO'; 

import { Buffer } from 'buffer';

export default function NewFlight(){
    const [flightNumber, setFlightNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState(dayjs());
    const [arrivalTime, setArrivalTime] = useState(dayjs());
    const [seatsAvailable, setSeatsAvailable] = useState(0);
    const [seatCost, setSeatCost] = useState(0);

    const newFlight = new Flight(
        flightNumber,
        origin,
        destination,
        departureTime,
        arrivalTime,
        seatsAvailable
    )

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
            headers: {'Authorization':'Basic ' + Buffer.from(`${"admin"}:${"is_a_lie"}`).toString("base64")
          },
          
            body: JSON.stringify({ flightNumber: flightNumber, origin: origin, destination: destination, departureTime: departureTime, arrivalTime: arrivalTime, seatsAvailable: seatsAvailable, seatCost: seatCost })
            // body: JSON.stringify({ firstName: newCustomer.firstName, lastName: newCustomer.lastName, passportNumber: newCustomer.passportNumber, email: newCustomer.email, phoneNumber: newCustomer.phoneNumber })
        };

        axios.post('http://localhost:8202/flights', newFlight, {
            auth: {
                username: "admin",
                password: "is_a_lie"
            }
        }).then(x => {
            setOpen(false);
        }).catch(err => {
            consol.log(err);
        });
    }

    return(
        <div>
            <Button variant="contained" onClick={dialogOpen}>
                Add Flight
            </Button>

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
                        <TextField margin="dense" label="Origin" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setOrigin(x.target.value);
                            }}
                        />
                        <TextField margin="dense" label="Destination" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                setDestination(x.target.value);
                            }}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker label="Departure Time" fullWidth value={departureTime}
                                    onChange = {x => {
                                        setDepartureTime(x);
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker label="Arrival Time" fullWidth value={arrivalTime}
                                    onChange = {x => {
                                        setArrivalTime(x);
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <TextField margin="dense" label="Available Seats" type="number" fullWidth variant="standard" 
                            onChange = {x => {
                                setSeatsAvailable(x.target.value);
                            }}
                        />
                        <TextField margin="dense" label="Cost of Seat" type="number" fullWidth variant="standard"
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