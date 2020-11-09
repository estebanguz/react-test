import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import { HotelsView } from '../../../components/Agency/Hotels/index';

class HotelList extends React.Component {
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
          title="Búsqueda de Destinos y Hoteles"
          icon="king_bed"
          desc="En esta sección podrás buscar y seleccionar los destinos y mejores hoteles para tus clientes."
        >
          <HotelsView />
        </PapperBlock>
      </div>
    );
  }
}

HotelList.propTypes = {};

export default injectIntl(HotelList);
