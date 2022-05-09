import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';
import digitallife from '../../images/digitallife.png';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' color='inherit' className={classes.appBar}>
            <img className={classes.image} src={digitallife} alt="Digitallife" height={70}/>
            <Typography className={classes.heading} variant='h2' align='center'>Digitallife</Typography>
        </AppBar>
    );
}

export default Navbar;