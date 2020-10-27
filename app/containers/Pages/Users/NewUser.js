import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, NewUserForm } from 'enl-components';
import { injectIntl } from 'react-intl';

class NewUser extends React.Component {
  render() {
    const title = brand.name + ' - New User';
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
          title="Nuevo Usuario"
          icon="account_box"
          desc="Alta de un nuevo usuario para el CRM"
        >
          <NewUserForm />
        </PapperBlock>
      </div>
    );
  }
}

NewUser.propTypes = {};

export default injectIntl(NewUser);
