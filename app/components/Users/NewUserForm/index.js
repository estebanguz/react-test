import React, { Fragment, PureComponent } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SnackBarCustom from '../../../utils/tools/SnackBarCustom';
import { createUser } from '../../../utils/schemas/Users';
import { styles } from './styles';
import { createUserApi } from '../../../api/users';
import { createUserAgency, createUserComision } from 'site-agency';
import Checkbox from '@material-ui/core/Checkbox';

// eslint-disable-next-line import/prefer-default-export
class NewUserForm extends PureComponent {
  state = {
    fullName: '',
    email: '',
    password: '',
    repeatPassword: '',
    role: '',
    agency: false,
    openStyle: false,
    snackErrorMessage: '',
    openError: false
  };

  validate = async () => {
    const { error, value } = await createUser.validate({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword,
      role: this.state.role
    });
    if (error) {
      this.setState({ snackErrorMessage: error.details[0].message });
      this.setState({ openError: true });
      return false;
      // eslint-disable-next-line no-else-return
    } else {
      return true;
    }
  }

  handleClickStyle = () => {
    this.setState({ openStyle: true });
  };

  handleCloseStyle = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openStyle: false });
    this.setState({ openError: false });
  };

  handleSubmit = async () => {
    if (await this.validate()) {
      const resp = await createUserApi({
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
        role: this.state.agency ? 5 : this.state.role
      });
      if (resp.status && resp.status !== 200) {
        this.setState({ snackErrorMessage: resp.message });
        this.setState({ openError: true });
      } else {
        const _userAgency = await createUserAgency({
          name: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
        });

        if (_userAgency.status && _userAgency.status == 'success') {
          const _createComision = await createUserComision({
            name: this.state.fullName,
            user: this.state.email,
            pass: this.state.password,
            code: `${this.state.fullName.substring(0, 4).toLowerCase()}20`,
            status: 1
          });

          if (_createComision.message && _createComision.message == true) {
            this.setState({ snackErrorMessage: 'Usuario registrado' });
            this.setState({ openStyle: true });
            setTimeout(() => {
              window.location.href = '/app/users/';
            }, 1000);
          }
        }
      }
    }
  };

  render() {
    const { classes } = this.props;
    const {
      fullName,
      email,
      password,
      repeatPassword,
      role,
      agency,
      openStyle,
      snackErrorMessage,
      openError
    } = this.state;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={3}
        >
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={classes.demo}
          >
            <FormControl className={classes.formControl}>
              <TextField
                id="outlined-password-input"
                label="Nombre completo"
                className={classes.textField}
                type="text"
                margin="normal"
                variant="outlined"
                value={fullName}
                onInput={(field) => {
                  this.setState({ fullName: field.target.value });
                  this.setState({ snackErrorMessage: '' });
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={classes.demo}
          >
            <FormControl className={classes.formControl}>
              <TextField
                id="outlined-password-input"
                label="Correo Electrónico"
                className={classes.textField}
                type="text"
                margin="normal"
                variant="outlined"
                value={email}
                onInput={(field) => {
                  this.setState({ email: field.target.value });
                  this.setState({ snackErrorMessage: '' });
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={classes.demo}
          >
            <FormControl className={classes.formControl}>
              <TextField
                id="outlined-password-input"
                label="Contraseña"
                className={classes.textField}
                type="password"
                margin="normal"
                variant="outlined"
                value={password}
                onInput={(field) => {
                  this.setState({ password: field.target.value });
                  this.setState({ snackErrorMessage: '' });
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={classes.demo}
          >
            <FormControl className={classes.formControl}>
              <TextField
                id="outlined-password-input"
                label="Repetir Contraseña"
                className={classes.textField}
                type="password"
                margin="normal"
                variant="outlined"
                value={repeatPassword}
                onInput={(field) => {
                  this.setState({ repeatPassword: field.target.value });
                  this.setState({ snackErrorMessage: '' });
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={classes.demo}
          >
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="role-simple">Rol</InputLabel>
              <Select
                value={role}
                onChange={(field) => {
                  this.setState({ role: field.target.value });
                  this.setState({ snackErrorMessage: '' });
                }}
                inputProps={{
                  name: 'role',
                  id: 'role-simple'
                }}
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                <MenuItem value={1}>Ventas</MenuItem>
                <MenuItem value={4}>Asesor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            className={classes.demo}
          >
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agency}
                    onChange={() => {
                      this.setState({ agency: !agency })
                    }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="El usuario podrá interactuar con el módulo de Agencia."
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md={12}
            className={`${classes.formControl} ${classes.demo}`}
          >
            <FormControl className={classes.formControl}>
              <Button onClick={this.handleSubmit} className={classes.formControl} variant="contained" color="primary">
                Registrar
              </Button>
            </FormControl>
          </Grid>
          <div>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={openStyle}
              autoHideDuration={6000}
              onClose={this.handleCloseStyle}
            >
              <SnackBarCustom
                variant="success"
                className={classes.margin}
                message={snackErrorMessage}
                onClose={this.handleCloseStyle}
              />
            </Snackbar>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={openError}
              autoHideDuration={6000}
              onClose={this.handleCloseStyle}
            >
              <SnackBarCustom
                variant="error"
                className={classes.margin}
                message={snackErrorMessage}
                onClose={this.handleCloseStyle}
              />
            </Snackbar>

          </div>
        </Grid>
      </Fragment>
    );
  }
}

NewUserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewUserForm);
