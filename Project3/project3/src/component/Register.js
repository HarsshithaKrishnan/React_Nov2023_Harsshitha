import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from 'react-router-dom';


export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const image={
    backgroundImage: "url(https://wallpapers.com/images/featured/travel-ibk7fgrvtvhs7qzg.webp)",
    height:"100%",
    width:"100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    position:"absolute",
};
  return (
    <div style={image}>
    <Container component="main" maxWidth="sm">
      <h2>FIRST<b style={{color:"red"}}> FLY</b></h2>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          backgroundColor:"white",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          REGISTER
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="User Name"
            label="User Name"
            name="User Name"
            autoComplete="User Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Confirm password"
            label="Confirm password"
            type="Confirm password"
            id="Confirm password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component={RouterLink} to="/h"
          >
            REGISTER
          </Button>
        </Box>
      </Box>
    </Container>
    </div>
  );
}