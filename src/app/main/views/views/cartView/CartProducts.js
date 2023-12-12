import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from './store';
import CartProductsHeader from './CartProductsHeader';
import CartProductsTable from './CartProductsTable';

function CartProducts() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<CartProductsHeader />}
      content={<CartProductsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default CartProducts;
