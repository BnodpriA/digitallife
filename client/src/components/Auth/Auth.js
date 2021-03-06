import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockoutlinedIcon  from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';

const Auth = () => {
    const classes = useStyles();
    const [ showPassword, setShowPassword ] = useState(false);
    const [isSignup, setSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
      setSignUp((prevIsSignUp) => !prevIsSignUp);
      handleShowPassword(false);
    }

    const googlesSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      try {
        dispatch({ type: 'AUTH', data: { result, token } });
        history.push('/');
      } catch (error) {
        console.log(error)
      }
    }

    const googleFailure = (error) => {
      console.log(error);
      console.log("Google Sign In was unsuccessful. Try Again Later");
    }

  return (
    <Container component="main"  maxWidth="xs">
       <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
             <LockoutlinedIcon />
          </Avatar>
          <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                  {
                    isSignup && (
                      <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoCorrect half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                      </>
                    )
                  }
                  <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                  <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                  { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type="password" /> }
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                { isSignup ? 'Sign Up' : 'Sign In' }
              </Button>
              <GoogleLogin
                clientId="806991462788-l30svjnop3lkqnaeqh2gec10a1mrofv0.apps.googleusercontent.com"
                render= {(renderProps) => (
                  <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disable={renderProps.disabled.toString()} startIcon={<Icon />} variant="contained">
                    Google Sign In
                  </Button>
                )}
                onSuccess={googlesSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
              <Grid container justifyContent="flex-end">
                  <Grid item>
                      <Button onClick={switchMode}>
                          { isSignup ? "Already have an account? Sign In " : "Create new Account? Sign Up"}
                      </Button>
                  </Grid>
              </Grid>
          </form>
       </Paper>
    </Container>

  )
}

export default Auth