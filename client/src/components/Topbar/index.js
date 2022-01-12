import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import useStyles from './styles'
import { AuthContext } from '../../contexts/AuthContext'

let Topbar = () => {
    let classes = useStyles()
    let { token, onLogoutSuccess } = useContext(AuthContext)
    let [anchor, setAnchor] = useState(null)

    let handleMenuClick = event => {
        setAnchor(event.currentTarget)
    }

    let handleMenuClose = () => {
        setAnchor(null)
    }

    let logout = () => {
        handleMenuClose()
        axios
            .post('/api/auth/token/logout/', null, {
                headers: { Authorization: `Token ${token}` },
            })
            .then((res) => {
                onLogoutSuccess()
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return <AppBar position='sticky'>
        <Toolbar>
            <Typography className={classes.title} variant='h5'>Django React Boilerplate</Typography>
            {token ? (
                <>
                    <Button aria-haspopup onClick={handleMenuClick} color="secondary">
                        <MenuRounded />
                    </Button>
                    <Menu
                        elevation={3}
                        anchorEl={anchor}
                        open={Boolean(anchor)}
                        onClose={handleMenuClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </>
            ) : <Link className={classes.link} to="/login">Log in</Link>}
        </Toolbar>
    </AppBar>
}

export default Topbar
