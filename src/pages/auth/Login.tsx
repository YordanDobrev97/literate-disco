import { useState, useContext } from 'react'
import {
    Grid,
    CssBaseline,
    TextField,
    Paper,
    Button
} from '@mui/material'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import styles from '../../styles/auth.module.css'
import UserService from '../../services/user'
import AuthContext from '../../context/authContext'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const context = useContext(AuthContext)
    const [cookie, setCookie] = useCookies(['jwt'])

    const navigation = useNavigate()

    const loginHandler = async () => {
        const res = await UserService.login(email, password)
        if (res) {
            setCookie('jwt', res.accessToken)
            context.setAuthenticated(true)
            navigation('/projects')
        }
    }

    return (
        <Grid container component="main" className={styles.root}>
            <CssBaseline />
            <Grid item xs={false} sm={6} md={2} />
            <Grid item xs={12} sm={4} md={8} component={Paper} elevation={3} square>
                <div className={styles.paper}>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button onClick={loginHandler} type="button" fullWidth variant="contained" color="primary" className={styles.submit}>
                            Sign In
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login