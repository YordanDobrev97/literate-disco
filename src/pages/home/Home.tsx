import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Login from '../auth/Login'

import '../../App.css'

export const Home = () => {
    return (
        <Typography className='App-header' variant="h2" component="h2" align="center">
            Welcome to 2NJ Projects

            <Login />
            <Link to='/auth/signUp'>Sign Up</Link>
        </Typography>
    )
}