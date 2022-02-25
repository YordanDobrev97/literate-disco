import { Typography } from '@mui/material'
import Login from '../auth/Login'
export const Home = () => {
    return (
        <Typography variant="h2" component="h2" align="center">
            Welcome to 2NJ Projects

            <Login />
        </Typography>
    )
}