import React from "react";
import { Helmet } from "react-helmet";
import brand from "enl-api/dummy/brand";
import { PapperBlock } from "enl-components";
import { StatusByBookerComponent } from '../../../components/Leads/StatusByBooker';
import { injectIntl } from "react-intl";

class StatusByBookerContainer extends React.Component {
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
          title="Reporte de leads por Asesor"
          icon="account_box"
          desc="Módulo de reporte de leads por asesor, fechas y estatus de lead."
        >
          <StatusByBookerComponent />
        </PapperBlock>
      </div>
    );
  }
}

StatusByBookerContainer.propTypes = {};

export default injectIntl(StatusByBookerContainer);
