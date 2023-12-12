import SignUpPage from './SignUpPage';
import authRoles from '../../../auth/authRoles';

const adm = 'admina';
const valperfil = adm === 'admin';

const SignUpConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: valperfil,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'sign-up',
      element: <SignUpPage />,
    },
  ],
};

export default SignUpConfig;
