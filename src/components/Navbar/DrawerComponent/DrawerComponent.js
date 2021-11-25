import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(true);
    return (
        <>
        <Drawer anchor='right' onClose={() => {
            setOpenDrawer(false)
        }} open={openDrawer}>
            <List>
                <ListItem divider button> 
                    <ListItemIcon>
                        <ListItemText>
                            Classes
                        </ListItemText>
                    </ListItemIcon>
                    </ListItem>


                   <ListItem divider button> 
                    <ListItemIcon>
                        <ListItemText>
                            Teachers
                        </ListItemText>
                    </ListItemIcon>
                    </ListItem>
                    <ListItem divider button> 
                    <ListItemIcon>
                        <ListItemText>
                            Parents
                        </ListItemText>
                    </ListItemIcon>
                    </ListItem>
                    <ListItem divider button> 
                    <ListItemIcon>
                        <ListItemText>
                            Fees
                        </ListItemText>
                    </ListItemIcon>
                    </ListItem>
                    <ListItem divider button> 
                    <ListItemIcon>
                        <ListItemText>
                            Holidays
                        </ListItemText>
                    </ListItemIcon>
                    </ListItem>


                

            </List>

        </Drawer>
        </>
    )
}
export default DrawerComponent;