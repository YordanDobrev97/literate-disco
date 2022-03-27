import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import AuthContext from '../../context/authContext'
import styles from '../../styles/navbar.module.css'

export const Navbar = () => {
    const context = useContext(AuthContext)
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])
    const navigation = useNavigate()

    const logout = () => {
        context.setAuthenticated(false)
        removeCookie('jwt')
        navigation('/')
    }

    return (
        <AppBar position="static" className={styles.navbar}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    2NJ Projects
                </Typography>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to='/projects'>Projects</Link>
                </Typography>

                {context.isAuthenticated ? (
                    <Button color="inherit" onClick={logout}>Logout</Button>
                ) : (
                    <>
                        <Button color="inherit">
                            <Link to='/auth/signUp'>Register</Link>
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}