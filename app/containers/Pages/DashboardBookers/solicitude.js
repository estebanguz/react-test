import React from "react";
import { Helmet } from "react-helmet";
import brand from "enl-api/dummy/brand";
import { PapperBlock } from "enl-components";
import { injectIntl } from "react-intl";
import { SolicitudeStepper } from '../../../components/DashboardBookers/solicitude/index';

class Solicitude extends React.Component {
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
					title="Solicitud de Reserva"
					icon="list-alt"
					desc="Por favor, completa la información necesaria."
				>
					<SolicitudeStepper />
				</PapperBlock>
			</div>
		);
	}
}

Solicitude.propTypes = {};

export default injectIntl(Solicitude);
