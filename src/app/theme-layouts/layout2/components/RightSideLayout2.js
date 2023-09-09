import { memo } from 'react';
import CartPanel from 'src/app/main/apps/cart/cartPanel/CartPanel';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';

function RightSideLayout2() {
  return (
    <>
      <CartPanel />

      <QuickPanel />

      <NotificationPanel />
    </>
  );
}

export default memo(RightSideLayout2);
