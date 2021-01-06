import React from 'react';
import ThemePallete from 'enl-api/palette/themePalette';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { styles } from './styles/charts';

const theme = createMuiTheme(ThemePallete.magentaTheme);
const color = {
  primary: theme.palette.primary.main,
  primaryDark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondaryDark: theme.palette.secondary.dark,
};

const useStyles = makeStyles((theme) => styles(theme));

export const ChartCRM = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.chartFluid}>
        <ResponsiveContainer>
          <BarChart
            width={800}
            height={450}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color.primary} stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor={color.primaryDark}
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine />
            <YAxis
              axisLine={false}
              tickSize={3}
              tickLine={false}
              tick={{ stroke: 'none' }}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <CartesianAxis vertical={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="leads" fillOpacity="1" fill="url(#colorUv)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
