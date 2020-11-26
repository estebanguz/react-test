import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, TableCoupon, NewCoupon } from 'enl-components';
import { injectIntl } from 'react-intl';
import {ListCupon} from 'api/agency/Cupones.js';

class CouponsView extends React.Component 
{
  state = {
    value:[]
  }

  async componentWillMount()
  {
    await this.Peticion()    
  }
  
  async Peticion ()
  {    
      const _cupon = await ListCupon()
      if (_cupon.data.code === 201)
      {        
        this.setState({value:_cupon.data.message})      
      } 
      else 
      {
        console.log(_cupon.data.message);
      }
  }
  
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
          <TableCoupon dataResponse  = {this.state.value}/>          
        </PapperBlock>
      </div>
    );
  }
}

CouponsView.propTypes = {};

export default injectIntl(CouponsView);
