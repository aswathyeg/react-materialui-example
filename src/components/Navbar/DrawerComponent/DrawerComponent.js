import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const useStyles = makeStyles(theme => ({
    menuIconContainer: {
        marginLeft: 'auto',
    },

}));

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const classes = useStyles();

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
            <IconButton className={classes.menuIconContainer} onClick={() => {
                setOpenDrawer(!openDrawer)
            }}>
                <MenuIcon />
            </IconButton>
        </>
    )
}
export default DrawerComponent;