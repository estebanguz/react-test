import React from "react";
import { Helmet } from "react-helmet";
import brand from "enl-api/dummy/brand";
import { PapperBlock, LeadsBooker } from "enl-components";
import { injectIntl } from "react-intl";

class BookerList extends React.Component {
	render() {
		const title = brand.name + " - Leads";
		const description = brand.desc;
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
				<PapperBlock
					title="Tus leads"
					icon="list-alt"
					desc="Aquí se muestran los leads que te han sido asignados."
				>
					<LeadsBooker />
				</PapperBlock>
			</div>
		);
	}
}

BookerList.propTypes = {};

export default injectIntl(BookerList);
