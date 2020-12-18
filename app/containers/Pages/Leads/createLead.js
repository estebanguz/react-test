import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, NewLead} from 'enl-components';
import { injectIntl } from 'react-intl';

class CreateLead extends React.Component {
  render() {
    const title = brand.name + ' - Leads';
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
          title="Alta leads"
          icon="account_box"
          desc="Módulo de la creacion de nuevos Leads"
        >
        <NewLead />
        </PapperBlock>
      </div>
    );
  }
}

CreateLead.propTypes = {};

export default injectIntl(CreateLead);
