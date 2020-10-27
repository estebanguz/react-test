import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, LeadsList } from 'enl-components';
import { injectIntl } from 'react-intl';

class UserList extends React.Component {
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
          title="Últimos Leads"
          icon="account_box"
          desc="Lista de últimos leads agregados al sistema"
        >
          <LeadsList />
        </PapperBlock>
      </div>
    );
  }
}

UserList.propTypes = {};

export default injectIntl(UserList);
