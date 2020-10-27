import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
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
  PaymentLink
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    const user = sessionStorage.getItem('user');

    console.log(JSON.parse(user));
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          { /* Home */ }
          <Route exact path="/app" component={DashboardPage} />
          <Route exact path="/app/users" component={UserList} />
          <Route exact path="/app/leads" component={LeadsList} />
          <Route exact path="/app/leads/distribution" component={Distribution} />
          <Route exact path="/app/lead" component={LeadDetails} />
          <Route exact path="/app/booker/solicitude" component={Solicitude} />
          <Route path="/app/users/create" component={NewUser} />
          <Route path="/app/booker/leads" component={BookerLeadsList} />
          
          <Route path="/app/agency/hotels" component={HotelList} />
          <Route path="/app/agency/coupon" component={CouponsView} />
          <Route path="/app/agency/paymentlink" component={PaymentLink} />

          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
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
