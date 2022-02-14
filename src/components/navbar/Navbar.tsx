import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import styles from '../../styles/navbar.module.css'

export const Navbar = () => {
    return (
        <AppBar position="static" className={styles.navbar}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'> 2NJ Projects</Link>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/projects'>Projects</Link>
                    </Typography>

                    <Button color="inherit">
                        <Link to='/auth/signIn'>Login</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/auth/signUp'>Register</Link>
                    </Button>
                </Toolbar>
            </AppBar>
    )
}