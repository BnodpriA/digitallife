import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import  { useDispatch } from 'react-redux';

import useStyles from './styles';
import digitallife from '../../images/digitallife.png';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();

    const logout = () => {

    };

    useEffect(() => {
        const token = user?.token;
        //JWT ...

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
        <AppBar position='static' color='inherit' className={classes.appBar}>           
            <div className={classes.brandContainer}>
                <img className={classes.image} src={digitallife} alt="Digitallife" height={70}/>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Digitallife</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>         
        </AppBar>
    );
}

export default Navbar;