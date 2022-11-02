import {
    Grid,
    Paper,
    FormControl,
    Container,
    Input,
    InputLabel,
    Button,
    Typography
} from '@mui/material';
import useLogin from '../../hooks/useLogin';
export default function LoginForm(){
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    } = useLogin();
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h1" marginBottom="0.6em">E-commerce administration</Typography>
            <Paper elevation={2}>
                <form style={{paddingBlock:"2em"}} onSubmit={handleLogin}>
                    <FormControl sx={{
                        width:"80%",
                        marginInline:"auto",
                        marginBottom:"1em"
                    }}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" aria-describedby="email-text" value={email} onChange={e => setEmail(e.target.value)} required />
                    </FormControl>
                    <FormControl sx={{width:"80%", marginInline:"auto"}}>
                        <InputLabel htmlFor="email">Password</InputLabel>
                        <Input type="password" id="password" aria-describedby="password-text" value={password} onChange={e => setPassword(e.target.value)} required />
                    </FormControl>
                    <Button variant="contained" color="success" type="submit" sx={{width:"80%", marginTop:"1em"}}>
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}