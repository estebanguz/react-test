import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';

class PaymentLink extends React.Component {
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
          title="Generar Link de Pago"
          icon="account_balance"
          desc="Generar un link de pago por la cantidad ingresada para enviar a tus clientes."
        >
          
        </PapperBlock>
      </div>
    );
  }
}

PaymentLink.propTypes = {};

export default injectIntl(PaymentLink);
