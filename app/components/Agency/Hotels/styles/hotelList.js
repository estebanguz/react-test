export const hotelListStyles = (theme) => ({
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
});