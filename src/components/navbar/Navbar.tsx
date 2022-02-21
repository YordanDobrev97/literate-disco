import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import AuthContext from '../../context/authContext'

import styles from '../../styles/navbar.module.css'

export const Navbar = () => {
    const context = useContext(AuthContext)

    const logout = () => {
        context.setAuthenticated(false)
    }

    return (
        <AppBar position="static" className={styles.navbar}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to='/'> 2NJ Projects</Link>
                </Typography>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to='/projects'>Projects</Link>
                </Typography>

                {context.isAuthenticated ? (
                    <Button color="inherit" onClick={logout}>Logout</Button>
                ) : (
                    <>
                        <Button color="inherit">
                            <Link to='/auth/signIn'>Login</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to='/auth/signUp'>Register</Link>
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}