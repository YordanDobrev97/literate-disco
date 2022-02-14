import { useState } from 'react'
import {
    Grid,
    CssBaseline,
    TextField,
    Paper,
    Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast, cssTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from '../../styles/auth.module.css'
import UserService from '../../services/user'

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});

export const Register = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>()

    const navigation = useNavigate()

    const registerHandler = async () => {
        if (password !== confirmPassword) {
            toast.error('passwords do not match')
        } else if (password.length < 6) {
            toast.error('Password must contain more than 6 characters')
        } else if (email.length < 3 || !email.includes('@')) {
            toast.error('Email must contain more than 3 characters and contains @')
        } else {
            const res = await UserService.register(email, password)
            if (res) {
                navigation('/auth/signIn')
            }
        }
    }

    return (
        <Grid item container component="main" className={styles.root}>
            <CssBaseline />
            <ToastContainer transition={bounce} />
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="confirm-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button onClick={registerHandler} type="button" fullWidth variant="contained" color="primary" className={styles.submit}>
                            Sign up
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}