import { memo } from 'react';
// import ChatPanel from '../../shared-components/chatPanel/ChatPanel';
import CartPanel from 'src/app/main/apps/cart/cartPanel/CartPanel';

function RightSideLayout2() {
  return (
    <>
      {/* <ChatPanel /> */}

      <CartPanel />

      {/* <QuickPanel /> */}

      {/*     <NotificationPanel /> */}
    </>
  );
}

export default memo(RightSideLayout2);
