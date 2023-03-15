import { Box, Button, FilledInput, FormControl, FormGroup, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {

    const [user, setUser] = useState({
        user:{
         email:'',
         password: '',
        }
     });
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleOnLogin = (event) => {
        event.preventDefault();
        setUser(user => ({
            user:{
                password: '',email: ''
            }
        }))
        console.log(user);
    }

   
    
    const setEmail = (event) => {
        const email = event.target.value;
        setUser(user => ({
            user:{
                ...user.user, email: email
            }
        }))
    }
    const setPassword = (event) => {
        const password = event.target.value;
        setUser(user => ({
            user:{
                ...user.user, password: password
            }
        }))
    }

  return (
    <main>
            {/* <Box sx={{display: 'flex', flexDirection: 'column'}} component='form'>
                   
            </Box> */}
            <form onSubmit={handleOnLogin}>
            <FormGroup >
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <OutlinedInput id={'input-email'} placeholder='Email' label='Email' value = {user.email} 
                     onChange = {setEmail}/>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            
                    <OutlinedInput id={'input-password'} placeholder='Password' label='Password' type={isShowPassword? 'text': 'password'} onChange={setPassword} value = {user.password}
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setIsShowPassword((prevState) => !prevState)}
                            edge="end"
                          >
                            { isShowPassword? <Visibility />: <VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      }
                    /> 
                    
            </FormControl>
            <Button type='submit'>Login</Button>
            </FormGroup>
            </form>
           
    </main>
  )
}

export default Login