import React, { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Tabs, Tab, Toolbar, Button, MenuList } from "@mui/material";
import { GiBookmarklet } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";

import { SiWebmoney } from "react-icons/si";
import { RiParentLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
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
    const theme=useTheme();
    console.log(theme);
    const isMatch=useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <div>

            <AppBar className="appBar">
                <Toolbar>


                    <Typography color="secondary">
                        {/* <GiBookmarklet/> */}
                        bodhii
                    </Typography>
{isMatch?(<DrawerComponent/>):(
<>
                    <Tabs>

                        <Tab icon={<FiBookOpen />}
                            onMouseOver={handleOpenMenu}
                            area-controls='menu'
                            label='Classes' />
                        <Tab icon={<GiTeacher />} label='Teachers' />
                        <Tab icon={<RiParentLine />} label='Parents' />
                        <Tab icon={<SiWebmoney />} label='Fees' />
                        <Tab icon={<IoMdHappy />} label='Holidays' />

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
            <DrawerComponent/>
        </div>
    );
};
export default Navbar;