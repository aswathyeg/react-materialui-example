import React, { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Tabs, Tab, Toolbar, Button } from "@mui/material";
import { GiBookmarklet } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { SiWebmoney } from "react-icons/si";
import { RiParentLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";
import DrawerComponent from "./DrawerComponent/DrawerComponent";


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget)

    }
    const handleMenuClose = e => {
        setAnchorEl(null)

    }
    //Breakpoints
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <div>

            <AppBar className="appBar">
                <Toolbar>


                    <Typography color="secondary">
                         <GiBookmarklet style={{ fontSize: 60 }}/> 
                       
                    </Typography>
                    {isMatch ? (<DrawerComponent />) : (
                        <>
                            <Tabs sx={{ width:2000}}>

                                <Tab sx={{ width:200}} icon={<FiBookOpen />}
                                    onMouseOver={handleOpenMenu}
                                    area-controls='menu'
                                    label='Classes' />
                                <Tab sx={{ width:200}} icon={<GiTeacher />} label='Teachers' />
                                <Tab sx={{ width:200}} icon={<RiParentLine />} label='Parents' />
                                <Tab sx={{ width:200}} icon={<SiWebmoney />} label='Fees' />
                                <Tab sx={{ width:200}} icon={<IoMdHappy />} label='Holidays' />
                                <Tab sx={{ width:200}} icon={<IoCallSharp />} label='Call us' />

                            </Tabs>
                            <Button varient="contained" color="secondary">Login</Button>
                        </>
                    )}

                </Toolbar>
            </AppBar>

            <Menu id='menu' 
                // style={{marginTop:50}} //for display menu 'under'the button
                onClose={handleMenuClose}
                anchorEl={anchorEl} open={Boolean(anchorEl)}>
                <MenuItem onClick={handleMenuClose}>M0</MenuItem>
                <MenuItem onClick={handleMenuClose}>M1</MenuItem>
                <MenuItem onClick={handleMenuClose}>M2</MenuItem>
                <MenuItem onClick={handleMenuClose}>M3</MenuItem>
            </Menu>
            <DrawerComponent />
        </div>
    );
};
export default Navbar;