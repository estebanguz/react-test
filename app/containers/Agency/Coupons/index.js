import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, GeneratedCoupon, NewCoupon } from 'enl-components';
import { injectIntl } from 'react-intl';


class CouponsView extends React.Component {
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
          title="Gestión de Cupones de descuento."
          icon="bookmarks"
          desc="Gestiona los cupones de descuento disponibles para tus clientes."
        >
          <NewCoupon />
          <GeneratedCoupon />
        </PapperBlock>
      </div>
    );
  }
}

CouponsView.propTypes = {};

export default injectIntl(CouponsView);
