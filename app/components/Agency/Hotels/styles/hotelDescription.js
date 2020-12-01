export const hotelDescriptionStyles = (theme) => ({
  table: {
    '& > div': {
      overflow: 'auto',
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'scroll',
          textOverflow: 'ellipsis',
        },
      },
      [theme.breakpoints.down('xs')]: {
        '& tr': {
          borderBottom: '4px solid #7bd5ff',
        },
      },
    },
  },
  paper: {
    position: 'absolute',
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
  modalTitle: {
    color: 'white'
  },
  modalInput: {
    width: '100%'
  },
  inputCLass: {
    width: '100%'
  },
  modalIndex: {
    zIndex: '1000 !important'
  },
  paper: {
    padding: '15px'
  },
  precioHabitacion: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  loaderDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkModal: {
    textDecoration: 'none'
  }
});