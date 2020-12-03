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
import Snackbar from '@material-ui/core/Snackbar';
import { login, getUser } from '../../../api/auth';
import { loginUserCommision } from '../../../api/agency/users';
import { setJWT } from '../../../utils/auth';
import SnackBarCustom from '../../../utils/tools/SnackBarCustom';

class Login extends React.Component {
  state = {
    valueForm: [],
    openSnack: false,
    snackMessage: '',
    snackVariant: 'error'
  };

  async submitForm(values) {
    this.setState({
      snackMessage: 'Validando credenciales',
      openSnack: true,
      snackVariant: 'info'
    });
    this.setState({ valueForm: values }, async () => {
      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.valueForm) {
        // eslint-disable-next-line react/destructuring-assignment
        try {
          const _login = await login(this.state.valueForm);
          if (_login.data.status === 200) {
            setJWT('jwt', _login.data.message.token, 14);
            const user = await getUser();
            localStorage.setItem('user', JSON.stringify(user.data.message));
            const _loginAgency = await loginUserCommision(this.state.valueForm);
            if (_loginAgency != 0) {
              setJWT(
                'agencyUser',
                JSON.stringify({
                  user_comision: _loginAgency.user_user_comision,
                  user_code: _loginAgency.code_user_comision,
                  user_id: _loginAgency.id_user_comision,
                }),
                14
              );
            }
            window.location.href = '/app';
          } else {
            console.log(_login.data.message);
          }
        } catch (err) {
          this.setState({
            snackMessage: 'Usuario o contraseña invalidos',
            openSnack: true,
            snackVariant: 'error'
          });
        }
      }
    });
  }

  render() {
    const title = 'Sitio Cancun - Login';
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
                <Typography
                  variant="h6"
                  component="p"
                  className={classes.subpening}
                >
                  Por favor, inicie sesión para continuar.
                </Typography>
              </div>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            <LoginForm onSubmit={(values) => this.submitForm(values)} />
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.openSnack}
              autoHideDuration={6000}
              onClose={() => {
                this.setState({ openSnack: false });
              }}
            >
              <SnackBarCustom
                variant={this.state.snackVariant}
                className={classes.margin}
                message={this.state.snackMessage}
                onClose={() => {
                  this.setState({ openSnack: false });
                }}
              />
            </Snackbar>
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
