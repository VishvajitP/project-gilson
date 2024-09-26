import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import Container from '@mui/material/Container';

// ================================|| LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Stack direction="column" justifyContent="space-between" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Welcome back!</Typography>
            <Typography to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="secondary">
              Enter your email address and password
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
