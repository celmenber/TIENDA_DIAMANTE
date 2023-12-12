import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import ClientsHeader from './ClientsHeader';
import ClientsContent from './ClientsContent';
import ClientsTable from './ClientsTable';

function Clients() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<ClientsHeader />}
      content={<ClientsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default Clients;