import { memo } from 'react';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';
import CartPanel from 'src/app/main/apps/cart/cartPanel/CartPanel';


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
