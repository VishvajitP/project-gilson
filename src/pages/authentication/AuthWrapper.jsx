import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project import
import AuthFooter from 'components/cards/AuthFooter';
import Logo from 'components/logo';
import AuthCard from './AuthCard';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';
import { Stack } from '@mui/material';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid container sx={{ minHeight: '100vh' }}>
        <Grid
            item
            lg={4}
            md={12}
            // sm={1}
            container
            justifyContent="left"
            alignItems="center"
            mt={-10}
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <AuthCard>{children}</AuthCard>
          </Grid>
          <Grid 
            item
            lg={8}
            md={12}
            // sm={11}
          >
            <Stack
              height='100%'             
              overflow='hidden'
              alignItems='center'
            >
              <Stack
                height={800}
                width={1280}            
                overflow='hidden'
                sx={{
                  marginY: 'auto', 
                  marginRight: -90,
                  borderRadius: '10px',
                  // filter: "drop-shadow(0px 41.78px 33.42px rgba(0, 0, 0, 0.05))"
                  filter: 'drop-shadow(0px 50px 20px rgba(0, 0, 0, 0.16))'
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/61fe/d86b/8da7e3b2f2832db1ec1ea2f7b6fbacf5?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YNxgWXW262J5afo2939D5gSm7WlBVe7-MSSSIXSOzGgrmfwyKbapl7tG4NdnIAzJrJwfollOhCKnxMkr~1HVdpPUP6weGnEdYeFfTk9p5keMm~5k0SNCW~LF8kqgB-0OAEN24xPxfn1QIMQ~vvWZPZG6cVxSUYSXQbXXWzKA2ATW3FCb4yMo~3Nq5-taVdXHfVdNXpo2fie6rrbBqBbp95SlMZkz55Ccx86F~ArsATXNPIx7ckNlM5oEa5BOS5kR1CVMiEPK60HfR8bznCVjJypxutMdgcSUA1WJbcqwC4AeDAo92ePjmWCSK8AiqfTC~s-a7F9gEOvUu4QNr2zuZw__"
                  width='100%'
                  height='100%'
                />
              </Stack>
            </Stack>
          </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
