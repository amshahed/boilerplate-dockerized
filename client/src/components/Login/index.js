import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { Button, Grid, Paper, TextField } from '@material-ui/core'
import useStyles from './styles'
import { AuthContext } from '../../contexts/AuthContext'

let Login = () => {
    let classes = useStyles()
    let { token, onLoginSuccess } = useContext(AuthContext)
    let [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    let handleChange = event => {
        setUserData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    let login = () => {
        axios.post('/api/auth/token/login/', userData).then(res => {
            onLoginSuccess(res.data.auth_token)
        }).catch(err => {
            console.log(err)
        })
    }

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div className={classes.container}>
            <Paper elevation={3} className={classes.wrapper}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12}>
                        <TextField fullWidth type="text" variant="outlined" label="Username" name='username' value={userData.username} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth type="password" variant="outlined" label="Password" name="password" value={userData.password} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant='contained' onClick={login}>Login</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Login