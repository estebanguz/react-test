import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, BookerStatsComponent } from 'enl-components';
import { injectIntl } from 'react-intl';

class BookerStats extends React.Component {
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
          title="Estadisticas de Asesor"
          icon="account_box"
          desc="Lista de últimos leads agregados al sistema"
        >
          <BookerStatsComponent />
        </PapperBlock>
      </div>
    );
  }
}

BookerStats.propTypes = {};

export default injectIntl(BookerStats);
