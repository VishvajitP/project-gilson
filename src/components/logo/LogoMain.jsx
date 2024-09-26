// material-ui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src="" alt="Mantis" width="100" />
     *
     */
    <Stack alignItems='left' sx={{ml: -20}}>
      <img 
        src="https://s3-alpha-sig.figma.com/img/99b3/14d8/342f141b81d231f8eccdbf8549dfde74?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DzUcYuY5u-ibZKl9ZTRPFS-uoNGHhpPUNC0CM3NLyv8jDSuzcKAtfk7tT~bXY~TkUlWBnBrm4Z7KuWaL-3tyLX6rnoFu~jy5Hqw1KFnFBCxFQEE1Hxtus3oXdxZ0F--JlgzYcjVXj628c4GDctEm1MSr6M93vqLtTv~Px6Nj4ynGkL6USTUaCpDucgcIXmWaf~2VmxyRe9G2jE-k-1yQF9gyets7IL8Tin6Xaxs-fWTtGKkBPt2thto-IW9uGNYOGL80AFbcYT-IZBJLVdPHO0TAgqR~QNiAQ0RvyTO3lDWt19UeWhA0aVSA8KIVyg5Rw13fP0lf-es7~szb6MahmA__" 
        alt="Mantis" 
        width="125"
        // height='70' 
      />
    </Stack>
  );
};

export default Logo;
