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
        icon: 'account_box',
        link: '/app/users'
      },
      {
        key: 'create',
        name: 'Nuevo Usuario',
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
        icon: 'list',
        link: '/app/leads'
      },
      {
        key: 'create',
        name: 'Nuevo Lead',
        icon: 'list',
        link: '/app/leads/create'
      },
      {
        key: 'distribution',
        name: 'Distribución de Leads',
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
        icon: 'list-alt',
        link: '/app/booker/leads'
      },
      {
        key: 'solicitude',
        name: 'Solicitud de Reserva',
        icon: 'list-alt',
        link: '/app/booker/solicitude'
      },
    ]
  }
];
