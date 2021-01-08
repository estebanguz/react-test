import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';

class DetalleReservacion extends React.Component {
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
          title="Distribución de Leads"
          icon="account_box"
          desc="Módulo de distribución de leads. Distribuye leads de manera masiva o seleccionando algunos."
        >
          <h1>Hola Mundo</h1>
        </PapperBlock>
      </div>
    );
  }
}

DetalleReservacion.propTypes = {};

export default injectIntl(DetalleReservacion);
