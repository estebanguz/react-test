import React from "react";
import { Helmet } from "react-helmet";
import brand from "enl-api/dummy/brand";
import { PapperBlock } from "enl-components";
import { DetailLead } from "../../../components/Leads/Detail";
import { injectIntl } from "react-intl";

class LeadDetail extends React.Component {
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
          title="Detalle de Lead"
          icon="account_box"
          desc="Detalles del Lead Seleccionado"
        >
          <DetailLead />
        </PapperBlock>
      </div>
    );
  }
}

LeadDetail.propTypes = {};

export default injectIntl(LeadDetail);
