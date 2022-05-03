import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Degitallife</Typography>
                <img src='{digitallife}' alt='Ditallife' height={60}></img>
            </AppBar>
        </Container>
    )
}

export default App;