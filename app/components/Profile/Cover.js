import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Info from '@material-ui/icons/Info';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './cover-jss';

const optionsOpt = [
  'Edit Profile',
  'Change Cover',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

class Cover extends React.Component {
  state = {
    anchorElOpt: null,
  };

  handleClickOpt = event => {
    this.setState({ anchorElOpt: event.currentTarget });
  };

  handleCloseOpt = () => {
    this.setState({ anchorElOpt: null });
  };

  render() {
    const {
      classes,
      avatar,
      name,
      desc,
      coverImg,
      callBack
    } = this.props;
    const { anchorElOpt } = this.state;
    return (
      <div className={classes.cover} style={{ backgroundImage: `url(${coverImg})` }}>
        <div className={classes.content}>
          <Avatar alt={name} src={avatar} className={classes.avatar} />
          <Typography variant="h4" className={classes.name} gutterBottom>
            {name}
          </Typography>
          <Typography className={classes.subheading} gutterBottom>
            {desc}
          </Typography>
          <Button className={classes.button} size="large" variant="contained" color="secondary" onClick={callBack}>
            <FormattedMessage {...messages.add_to_connection} />
          </Button>
        </div>
      </div>
    );
  }
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  callBack: PropTypes.function
};

export default withStyles(styles)(injectIntl(Cover));
