import React from 'react'
import { NavLink } from 'react-router-dom';
import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
const useStyle=makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
});
function Navbar() {
    const classes = useStyle();
    return (
        <div className="navbar">
            <AppBar position="static" className={classes.header}>
                <Toolbar variant="dense">
                    <NavLink className={classes.tabs} exact to='/'>Afroz Academy</NavLink>
                    <NavLink className={classes.tabs} exact to='all'>All Users</NavLink>
                    <NavLink className={classes.tabs} exact to='add'>Add User</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;
