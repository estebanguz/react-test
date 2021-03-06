export const leadsTableStyles = (theme) => ({
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
            height: 70,
            overflow: 'hidden',
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
    buttonsIcons: {
      display: 'flex',
      justifyContent: 'center',
    },
    status: {
      padding: 0,
      margin: 0
    }
  });
  