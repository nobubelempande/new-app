import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField } from '@mui/material';

export default function NewBooking(){
return(
    <div >
    <Accordion >
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="newBooking">
            <h2 >Available Seats: 12        
                <button>Book</button>
            </h2>
        
        </div> 
      </AccordionSummary>
      <AccordionDetails>
        <div >
        <FormGroup className="NewCustomerForm">
                        <TextField autoFocus margin="dense" label="First Name" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Last Name" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                             
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Passport Number" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Email" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                
                            }}
                        />
                        <TextField autoFocus margin="dense" label="Phone Number" type="text" fullWidth variant="standard" 
                            onChange = {x => {
                                
                            }}
                        />
                    </FormGroup>
        </div>
        <Button variant="text" >Add</Button>
        <Button variant="text" >Cancel</Button>

      </AccordionDetails>
    </Accordion>
    <div />
  </div>
)
}
