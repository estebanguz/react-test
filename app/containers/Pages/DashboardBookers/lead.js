import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import brand from "enl-api/dummy/brand";
import AppBar from "@material-ui/core/AppBar";
import dummy from "enl-api/dummy/dummyContents";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Info from "@material-ui/icons/Info";
import Message from "@material-ui/icons/Message";
import ListAlt from "@material-ui/icons/ListAlt";
import Mail from "@material-ui/icons/Mail";
import { withStyles } from "@material-ui/core/styles";
import { Cover } from "enl-components";
import { injectIntl, intlShape } from "react-intl";
import messages from "enl-components/Profile/messages";
import styles from "enl-components/Profile/cover-jss";

function TabContainer(props) {
	const { children } = props;
	return <div style={{ paddingTop: 8 * 3 }}>{children}</div>;
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

class LeadDetails extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const title = brand.name + " - Profile";
		const description = brand.desc;
		const { classes, intl } = this.props;
		const { value } = this.state;
		return (
			<div>
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="twitter:title" content={title} />
					<meta property="twitter:description" content={description} />
				</Helmet>
				<Cover
					coverImg=""
					avatar={dummy.user.avatar}
					name={dummy.user.name}
					desc="Consectetur adipiscing elit."
				/>
				<AppBar position="static" className={classes.profileTab}>
					<Hidden mdUp>
						<Tabs
							value={value}
							onChange={this.handleChange}
							variant="fullWidth"
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab label="Información" />
							<Tab label="Discovery" />
							<Tab label="Enviar Mensaje" />
							<Tab label="Historial del Lead" />
							<Tab label="Mailing" />
						</Tabs>
					</Hidden>
					<Hidden smDown>
						<Tabs
							value={value}
							onChange={this.handleChange}
							variant="fullWidth"
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab icon={<AccountCircle />} label="Información" />
							<Tab icon={<Info />} label="Discovery" />
							<Tab icon={<Message />} label="Enviar Mensaje" />
							<Tab icon={<ListAlt />} label="Historial del Lead" />
							<Tab icon={<Mail />} label="Mailing" />
						</Tabs>
					</Hidden>
				</AppBar>
				{value === 0 && (
					<TabContainer>
						<div>About</div>
					</TabContainer>
				)}
				{value === 1 && (
					<TabContainer>
						<div>Connection</div>
					</TabContainer>
				)}
				{value === 2 && (
					<TabContainer>
						<div>Wea</div>
					</TabContainer>
				)}
			</div>
		);
	}
}

LeadDetails.propTypes = {
	classes: PropTypes.object.isRequired,
	intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(LeadDetails));
