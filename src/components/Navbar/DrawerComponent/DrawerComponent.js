import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List'
import { ListItem, ListItemText } from '@mui/material';
 const DrawerComponent =()=>{
     return(
         <Drawer>
             <List>
<ListItem>
<ListItemText>
    Classes
</ListItemText>

</ListItem>

             </List>

         </Drawer>
     )
 }
 export default DrawerComponent;