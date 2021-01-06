import Loadable from 'react-loadable';
import Loading from 'enl-components/Loading';

export const DashboardPage = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});
export const Table = Loadable({
  loader: () => import('./Pages/Table/BasicTable'),
  loading: Loading,
});
export const Form = Loadable({
  loader: () => import('./Pages/Forms/ReduxForm'),
  loading: Loading,
});
export const LoginFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/Login'),
  loading: Loading,
});
export const RegisterFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/Register'),
  loading: Loading,
});
export const ResetPasswordFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/ResetPassword'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () => import('./Pages/Users/Login'),
  loading: Loading,
});
export const Register = Loadable({
  loader: () => import('./Pages/Users/Register'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const ComingSoon = Loadable({
  loader: () => import('./Pages/ComingSoon'),
  loading: Loading,
});
export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});
export const NewUser = Loadable({
  loader: () => import('./Pages/Users/NewUser'),
  loading: Loading,
});
export const UserList = Loadable({
  loader: () => import('./Pages/Users/UserList'),
  loading: Loading,
});
export const LeadsList = Loadable({
  loader: () => import('./Pages/Leads/Index'),
  loading: Loading,
});

export const Distribution = Loadable({
  loader: () => import('./Pages/Leads/Distribution'),
  loading: Loading,
});

export const BookerLeadsList = Loadable({
  loader: () => import('./Pages/DashboardBookers/index'),
  loading: Loading,
});

export const LeadDetails = Loadable({
  loader: () => import('./Pages/DashboardBookers/lead'),
  loading: Loading,
});

export const Solicitude = Loadable({
  loader: () => import('./Pages/DashboardBookers/solicitude'),
  loading: Loading,
});

export const HotelList = Loadable({
  loader: () => import('./Agency/Hotels/index'),
  loading: Loading,
});

export const HotelDetails = Loadable({
  loader: () => import('./Agency/Hotels/details'),
  loading: Loading,
});

export const CouponsView = Loadable({
  loader: () => import('./Agency/Coupons/index'),
  loading: Loading,
});

export const PaymentLink = Loadable({
  loader: () => import('./Agency/Paymentlink/index'),
  loading: Loading,
});

export const LeadDetail = Loadable({
  loader: () => import('./Pages/LeadDetail/index'),
  loading: Loading,
});

export const CreateLead = Loadable({
  loader: () => import('./Pages/Leads/createLead'),
  loading: Loading,
});

export const StatusByBookerContainer = Loadable({
  loader: () => import('./Pages/Leads/statusByBooker'),
  loading: Loading,
});

export const BookerStats = Loadable({
  loader: () => import('./Pages/BookerStats/index'),
  loading: Loading,
});
