import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Tabs, Tab, Toolbar, Button } from "@mui/material";

const Navbar = () => {
    return (
        <div>

            <AppBar>
                <Toolbar>
                <Typography color="secondary"> bodhii </Typography>

                <Tabs>
                    <Tab label='Courses'/>
                </Tabs>
                <Tabs>
                    <Tab label='Fees'/>
                </Tabs>
                <Tabs>
                    <Tab label='Parents'/>
                </Tabs><Tabs>
                    <Tab label='Holidays'/>
                </Tabs><Tabs>
                    <Tab label='Teachers'/>
                </Tabs><Tabs>
                    <Tab label='Openings'/>
                </Tabs>
                <Button varient="contained" color="secondary">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Navbar;