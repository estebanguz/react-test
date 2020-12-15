import React from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { ADMIN, VENTAS, AGENCIA, GERENTE } from "site-auth";
import Dashboard from "../Templates/Dashboard";
import { AuthRoute } from "../../components/Router/AuthRoute";
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
  LeadDetail,
} from "../pageListAsync";

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          {/* CRM */}
          <AuthRoute
            exact
            path="/app"
            Component={DashboardPage}
            roles={[ADMIN]}
          />
          <AuthRoute
            exact
            path="/app/users"
            Component={UserList}
            roles={[ADMIN, GERENTE]}
          />
          <AuthRoute
            exact
            path="/app/leads"
            Component={LeadsList}
            roles={[ADMIN]}
          />
          <AuthRoute
            exact
            path="/app/leads/distribution"
            Component={Distribution}
            roles={[ADMIN, GERENTE]}
          />
          <AuthRoute
            exact
            path="/app/lead"
            Component={LeadDetails}
            roles={[ADMIN]}
          />
          <AuthRoute
            exact
            path="/app/booker/solicitude"
            Component={Solicitude}
            roles={[VENTAS, GERENTE]}
          />
          <AuthRoute
            path="/app/users/create"
            Component={NewUser}
            roles={[ADMIN, GERENTE]}
          />
          <AuthRoute
            path="/app/booker/leads"
            Component={BookerLeadsList}
            roles={[VENTAS, GERENTE]}
          />
          <AuthRoute
            exact
            path="/app/booker/lead"
            Component={LeadDetail}
            roles={[VENTAS, GERENTE]}
          />
          {/* Agency */}
          <AuthRoute
            exact
            path="/app/agency/"
            Component={HotelList}
            roles={[AGENCIA]}
          />
          <AuthRoute
            exact
            path="/app/agency/hotels/"
            Component={HotelList}
            roles={[AGENCIA]}
          />
          <AuthRoute
            path="/app/agency/hotels/:hotel_name"
            Component={HotelDetails}
            roles={[AGENCIA]}
          />
          <AuthRoute
            path="/app/agency/coupon"
            Component={CouponsView}
            roles={[AGENCIA]}
          />
          <AuthRoute
            path="/app/agency/paymentlink"
            Component={PaymentLink}
            roles={[AGENCIA]}
          />
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
