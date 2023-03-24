import React from "react";
import { makeStyles } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function NewBooking(){
return(
    <div>
    <Accordion>
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
        <Typography>
          This is where the admin can book a new customer
        </Typography>
      </AccordionDetails>
    </Accordion>
    <div />
  </div>
)
}
