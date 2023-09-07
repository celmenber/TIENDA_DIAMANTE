import { Box, Typography } from '@mui/material';

const Section = (props) => {
  return (
    <Box>
      <Typography
        variant={props.variant}
        p={{ xs: 2, sm: 6, md: 4 }}
        textAlign={{ xs: 'center', md: 'left' }}
        color="inherit"
      >
        {props.section}
      </Typography>
    </Box>
  );
};

export default Section;
