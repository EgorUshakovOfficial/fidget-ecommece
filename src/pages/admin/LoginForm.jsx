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

export default function LoginForm(){
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h1" marginBottom="0.6em">E-commerce administration</Typography>
            <Paper elevation={2}>
                <form action="#" method="POST" style={{paddingBlock:"2em"}}>
                    <FormControl sx={{
                        width:"80%",
                        marginInline:"auto",
                        marginBottom:"1em"
                    }}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" aria-describedby="email-text" required />
                    </FormControl>
                    <FormControl sx={{width:"80%", marginInline:"auto"}}>
                        <InputLabel htmlFor="email">Password</InputLabel>
                        <Input type="password" id="email" aria-describedby="email-text" required />
                    </FormControl>
                    <Button variant="contained" color="success" sx={{width:"80%", marginTop:"1em"}}>
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}