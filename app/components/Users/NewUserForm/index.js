import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Snackbar from '@material-ui/core/Snackbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SnackBarCustom from '../../../utils/tools/SnackBarCustom';
import { createUser } from '../../../utils/schemas/Users';
import { styles } from './styles';
import { createUserApi } from '../../../api/users';

// eslint-disable-next-line import/prefer-default-export
class NewUserForm extends PureComponent {
      state = {
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
        role: '',
        openStyle: false,
        snackErrorMessage: '',
        openError: false
      };

      validate = async () => {
        // eslint-disable-next-line react/destructuring-assignment
        const { error, value } = await createUser.validate({
          // eslint-disable-next-line react/destructuring-assignment
          fullName: this.state.fullName,
          // eslint-disable-next-line react/destructuring-assignment
          email: this.state.email,
          // eslint-disable-next-line react/destructuring-assignment
          password: this.state.password,
          // eslint-disable-next-line react/destructuring-assignment
          repeatPassword: this.state.repeatPassword,
          // eslint-disable-next-line react/destructuring-assignment
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
          console.log('API INSERT');
          const resp = await createUserApi({
            // eslint-disable-next-line react/destructuring-assignment
            fullName: this.state.fullName,
            // eslint-disable-next-line react/destructuring-assignment
            email: this.state.email,
            // eslint-disable-next-line react/destructuring-assignment
            password: this.state.password,
            // eslint-disable-next-line react/destructuring-assignment
            role: this.state.role
          });
          if (resp.status && resp.status !== 200) {
            this.setState({ snackErrorMessage: resp.message });
            this.setState({ openError: true });
          } else {
            this.setState({ snackErrorMessage: 'Usuario registrado' });
            this.setState({ openStyle: true });
            setTimeout(() => {
              window.location.href = '/app/users/';
            }, 1000);
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
                className={classes.demo}
              >
                <div>
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
                  <Fab variant="extended" color="secondary" aria-label="Delete" className={classes.button} onClick={this.handleSubmit}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Registrar Usuario
                  </Fab>
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
            </Grid>
          </Fragment>
        );
      }
}

NewUserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewUserForm);
