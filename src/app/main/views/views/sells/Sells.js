import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import SellsHeader from './SellsHeader';
import SellsTable from './SellsTable';

function Sells() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<SellsHeader />}
      content={<SellsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default Sells;
