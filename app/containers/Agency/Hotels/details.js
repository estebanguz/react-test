import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import { HotelDetails } from '../../../components/Agency/Hotels/hotelDetails';

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
          title="Detalles de Hotel"
          icon="hotel"
          desc="Selecciona el tipo de habitación que más se adecue a las necesidades del cliente."
        >
          <HotelDetails />
        </PapperBlock>
      </div>
    );
  }
}

HotelList.propTypes = {};

export default injectIntl(HotelList);
