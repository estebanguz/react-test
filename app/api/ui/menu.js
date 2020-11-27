module.exports = [
  {
    key: 'account_page',
    name: 'Usuarios',
    icon: 'account_box',
    roles: [1],
    child: [
      {
        key: 'list',
        name: 'Lista de Usuarios',
        roles: [1],
        icon: 'account_box',
        link: '/app/users'
      },
      {
        key: 'create',
        name: 'Nuevo Usuario',
        roles: [1],
        icon: 'account_box',
        link: '/app/users/create'
      }
    ]
  },
  {
    key: 'leads_page',
    name: 'Leads',
    icon: 'list',
    roles: [1],
    child: [
      {
        key: 'create',
        name: 'Leads Recientes',
        roles: [1],
        icon: 'list',
        link: '/app/leads'
      },
      {
        key: 'create',
        name: 'Nuevo Lead',
        roles: [1],
        icon: 'list',
        link: '/app/leads/create'
      },
      {
        key: 'distribution',
        name: 'Distribución de Leads',
        roles: [1],
        icon: 'list',
        link: '/app/leads/distribution'
      }
    ]
  },
  {
    key: 'leads_booker',
    name: 'Dashboard Bookers',
    icon: 'list-alt',
    roles: [1, 4],
    child: [
      {
        key: 'index',
        name: 'Leads Recientes',
        roles: [1, 4],
        icon: 'list-alt',
        link: '/app/booker/leads'
      },
      {
        key: 'solicitude',
        name: 'Solicitud de Reserva',
        roles: [1, 4],
        icon: 'list-alt',
        link: '/app/booker/solicitude'
      },
    ]
  },
  {
    key: 'agency',
    name: 'Agencia',
    icon: 'flight',
    roles: [1, 5],
    child: [
      {
        key: 'index',
        name: 'Hoteles',
        roles: [1, 5],
        icon: 'list-alt',
        link: '/app/agency/'
      },
      {
        key: 'index',
        name: 'Cupones',
        roles: [1, 5],
        icon: 'list-alt',
        link: '/app/agency/coupon'
      },
      {
        key: 'index',
        name: 'Pago Banamex',
        roles: [1, 5],
        icon: 'list-alt',
        link: '/app/agency/paymentlink'
      },
    ]
  }
];
