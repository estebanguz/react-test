import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ADMIN, VENTAS, AGENCIA } from 'site-auth';
import Dashboard from '../Templates/Dashboard';
import { AuthRoute } from '../../components/Router/AuthRoute';
import {
  DashboardPage,
  Error,
  NotFound,
  NewUser,
  UserList,
  LeadsList,
  Distribution,
  BookerLeadsList,
  LeadDetails,
  Solicitude,
  HotelList,
  CouponsView,
  PaymentLink,
  HotelDetails,
  LeadDetail
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          { /* CRM */}
          <AuthRoute exact path="/app" Component={DashboardPage} role={ADMIN} />
          <AuthRoute exact path="/app/users" Component={UserList} role={ADMIN} />
          <AuthRoute exact path="/app/leads" Component={LeadsList} role={ADMIN} />        
          <AuthRoute exact path="/app/leads/distribution" Component={Distribution} role={ADMIN} />
          <AuthRoute exact path="/app/lead" Component={LeadDetails} role={ADMIN} />
          <AuthRoute exact path="/app/booker/solicitude" Component={Solicitude} role={VENTAS} />
          <AuthRoute path="/app/users/create" Component={NewUser} role={ADMIN} />
          <AuthRoute path="/app/booker/leads" Component={BookerLeadsList} role={VENTAS} />
          <AuthRoute exact path="/app/booker/lead" Component={LeadDetail} role={VENTAS} />
          { /* Agency */}
          <AuthRoute exact path="/app/agency/" Component={HotelList} role={AGENCIA} />
          <AuthRoute exact path="/app/agency/hotels/" Component={HotelList} role={AGENCIA} />
          <AuthRoute path="/app/agency/hotels/:hotel_name" Component={HotelDetails} role={AGENCIA} />
          <AuthRoute path="/app/agency/coupon" Component={CouponsView} role={AGENCIA} />
          <AuthRoute path="/app/agency/paymentlink" Component={PaymentLink} role={AGENCIA} />
          <Route path="/app/not-found" component={NotFound} />
          <Route path="/app/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
