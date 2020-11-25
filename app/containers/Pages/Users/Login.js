import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'enl-components';
import logo from 'enl-images/logo.png';
import styles from 'enl-components/Forms/user-jss';
import { login } from '../../../api/auth';
import { getJWT } from '../../../api/agency';
import { setJWT } from '../../../utils/auth';

class Login extends React.Component {
  state = {
    valueForm: []
  }

  async submitForm(values) {
    this.setState({ valueForm: values }, async () => {
      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.valueForm) {
        // eslint-disable-next-line react/destructuring-assignment
        const _login = await login(this.state.valueForm);
        if (_login.data.status === 200) {
          const jwtAgencyResponse = await getJWT();
          setJWT('jwt', _login.data.message.token, 14);
          setJWT('jwtAgency', jwtAgencyResponse.data.message.Authorization, 14);
          window.location.href = '/app';
        } else {
          console.log(_login.data.message);
        }
      }
    });
  }

  render() {
    const title = 'Vacaciones Cancun - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.containerSide}>
          <Hidden smDown>
            <div className={classes.opening}>
              <div className={classes.openingWrap}>
                <div className={classes.openingHead}>
                  <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name} />
                    {brand.name}
                  </NavLink>
                </div>
                <Typography variant="h3" component="h1" gutterBottom>
                  {`Bienvenido a ${brand.name}`}
                </Typography>
                <Typography variant="h6" component="p" className={classes.subpening}>
                  Por favor, inicie sesión para continuar.
                </Typography>
              </div>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            <LoginForm onSubmit={(values) => this.submitForm(values)} />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
