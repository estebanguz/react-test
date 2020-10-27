import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import logo from 'enl-images/logo.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import MainMenu from './MainMenu';
import styles from './sidebar-jss';
import { getUser } from '../../api/auth';

class SidebarContent extends React.Component {
  state = {
    transform: 0,
    fullName: '',
    email: '',
    role: 0
  };

  componentDidMount = async () => {
    // Scroll content to top
    const _user = await getUser();
    _user ? sessionStorage.setItem('user', JSON.stringify(_user.data.message)) : '';
    this.setState({ fullName: _user.data.message.username });
    this.setState({ email: _user.data.message.email });
    this.setState({ role: _user.data.message.role_id });
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    const mainContent = document.getElementById('sidebar');
    mainContent.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    this.setState({
      transform: scroll
    });
  }

  render() {
    const {
      classes,
      drawerPaper,
      toggleDrawerOpen,
      loadTransition,
      leftSidebar,
      dataMenu,
      status,
      anchorEl,
      openMenuStatus,
      closeMenuStatus,
      changeStatus,
      userAttr
    } = this.props;
    const {
      transform,
      fullName,
      email,
      role
    } = this.state;

    const setStatus = st => {
      switch (st) {
        case 'online':
          return classes.online;
        case 'idle':
          return classes.idle;
        case 'bussy':
          return classes.bussy;
        default:
          return classes.offline;
      }
    };
    return (
      <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
        <div className={classes.drawerHeader}>
          <div
            className={classes.profile}
            style={{ opacity: 1 - (transform / 100), marginTop: transform * -0.3 }}
          >
            <Avatar
              alt={userAttr.name}
              src={logo}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <div>
              <h4>{fullName}</h4>
              <Button size="small" onClick={openMenuStatus}>
                <i className={classNames(classes.dotStatus, setStatus(status))} />
                {role === 1 ? 'Ventas' : 'Asesor'}
              </Button>
              <Menu
                id="status-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenuStatus}
                className={classes.statusMenu}
              >
                <MenuItem onClick={() => changeStatus('online')}>
                  <i className={classNames(classes.dotStatus, classes.online)} />
                  <FormattedMessage {...messages.online} />
                </MenuItem>
                <MenuItem onClick={() => changeStatus('idle')}>
                  <i className={classNames(classes.dotStatus, classes.idle)} />
                  <FormattedMessage {...messages.idle} />
                </MenuItem>
                <MenuItem onClick={() => changeStatus('bussy')}>
                  <i className={classNames(classes.dotStatus, classes.bussy)} />
                  <FormattedMessage {...messages.bussy} />
                </MenuItem>
                <MenuItem onClick={() => changeStatus('offline')}>
                  <i className={classNames(classes.dotStatus, classes.offline)} />
                  <FormattedMessage {...messages.offline} />
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div
          id="sidebar"
          className={
            classNames(
              classes.menuContainer,
              leftSidebar && classes.rounded,
              classes.withProfile
            )
          }
        >
          <MainMenu loadTransition={loadTransition} dataMenu={dataMenu} toggleDrawerOpen={toggleDrawerOpen} />
        </div>
      </div>
    );
  }
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  userAttr: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

SidebarContent.defaultProps = {
  toggleDrawerOpen: () => {},
  toggleDrawerClose: () => {},
  loadTransition: () => {},
  anchorEl: null,
};

export default withStyles(styles)(injectIntl(SidebarContent));
