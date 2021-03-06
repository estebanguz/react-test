import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.png';
import { injectIntl } from 'react-intl';
import { closeMsgAction } from 'enl-redux/actions/authActions';
import { CheckboxRedux, TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import styles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

class LoginForm extends React.Component { // eslint-disable-line
  state = {
    showPassword: false,
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      submitting,
      messagesAuth,
      closeMsg,
      loading,
    } = this.props;
    const { showPassword } = this.state;
    return (
      <Paper className={classes.sideWrap}>
        <Hidden mdUp>
          <div className={classes.headLogo}>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
          </div>
        </Hidden>
        <div className={classes.topBar}>
          <Typography variant="h4" className={classes.title}>
            Inicia Sesi??n
          </Typography>
        </div>
        {
          messagesAuth !== null || ''
            ? (
              <MessagesForm
                variant="error"
                className={classes.msgUser}
                message={messagesAuth}
                onClose={closeMsg}
              />
            )
            : ''
        }
        <section className={classes.pageFormSideWrap}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="email"
                  component={TextFieldRedux}
                  placeholder="Tu correo electr??nico"
                  label="Correo Electr??nico"
                  required
                  validate={[required, email]}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type={showPassword ? 'text' : 'password'}
                  label="Ingresa tu contrase??a"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Mostrar Contrase??a"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  required
                  validate={required}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div className={classes.optArea}>
              <FormControlLabel
                className={classes.label}
                control={<Field name="checkbox" component={CheckboxRedux} />}
                label="Recordarme"
              />
              <Button size="small" component={LinkBtn} to="/reset-password" className={classes.buttonLink}>
                Olvid?? mi contrase??a
              </Button>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" disabled={loading} fullWidth color="primary" size="large" type="submit">
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                Ingresar
                {!loading && <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />}
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  messagesAuth: PropTypes.string,
  loading: PropTypes.bool,

  closeMsg: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  messagesAuth: null,
  loading: false
};

const LoginFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(LoginForm);

const mapDispatchToProps = {
  closeMsg: closeMsgAction
};

const reducerAuth = 'authReducer';
const mapStateToProps = state => ({
  messagesAuth: state.get(reducerAuth).message,
  loading: state.get(reducerAuth).loading,
  ...state,
});

const LoginFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormReduxed);

export default withStyles(styles)(injectIntl(LoginFormMapped));
