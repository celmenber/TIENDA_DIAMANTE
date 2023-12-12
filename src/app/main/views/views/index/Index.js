import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';

import { Box, Grid, Typography } from '@mui/material';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

const Index = () => {
  const { t } = useTranslation('IndexPage');
  return (
    <Root
      /*   header={
        <>
          <Box p={1}>
            <Typography color="initial" variant="h6">
              {t('Inicio')}
            </Typography>
          </Box>
        </>
      } */
      content={
        <Box height="100%" width="100%">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ height: '100%' }}
          >
            <Grid item>
              <Typography variant="h1" color="initial" style={{ textAlign: 'center' }}>
                Tienda Diamante Bogotá
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography variant="h5" color="initial" style={{ textAlign: 'center' }}>
                lorem
              </Typography>
            </Grid> */}
          </Grid>
        </Box>
      }
      scroll="content"
    />
  );
};

export default Index;
