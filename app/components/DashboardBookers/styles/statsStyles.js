import { blue } from '@material-ui/core/colors';

export const statsStyles = (theme) => ({
  root: {
    border: '1px solid #03a9f4'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: blue[500],
  },
  itemStat: {
    cursor: 'pointer'
  }
});
