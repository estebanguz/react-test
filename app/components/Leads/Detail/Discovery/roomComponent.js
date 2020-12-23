import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  useEventCallback,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { AdultsComponent } from "./audltsComponent";
import { ChildsComponent } from "./childsComponent";

export const RoomComponent = ({ room, setPax ,adultos ,childs ,ageAdultos , ageChilds}) => {  

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        Habitacion {room + 1}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <AdultsComponent
               room={room} 
               setPax={setPax}   
               adultos = {adultos}                             
               ageAdultos =  {ageAdultos}             
            />
          </Grid>
          <Grid item md={12} >
            <ChildsComponent 
                room={room} 
                setPax={setPax} 
                noChilds = {childs}                
                ageChilds = {ageChilds}
             />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
