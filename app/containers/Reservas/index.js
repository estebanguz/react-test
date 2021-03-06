import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { ListReservation } from "enl-components"

class Reservation extends React.Component {
  render() {   
    const title = brand.name + ' - Reservas';
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
          title="Lista de reservaciones"
          desc=""  
        >
          <ListReservation />
        </PapperBlock>
      </div>
    );
  }
}

export default injectIntl(Reservation);