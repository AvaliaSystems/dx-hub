import { makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';
import { ResponsiveContainer, Area, AreaChart, YAxis } from 'recharts';
import products from './data/metrics.json';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  chartContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  card: {
    position: 'relative',
    height: '8rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    fontSize: '1rem',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    '& .title': {
      lineHeight: 'normal',
      fontSize: '0.9rem',
      color: theme.palette.textSubtle,
    },
    '& .top': {
      zIndex: 999,
      display: 'flex',
    },
    '& .gearIcon': {
      position: 'absolute',
      right: '0.5rem',
      top: '0.5rem',
      color: theme.palette.textSubtle,
    },
    '& .value': {
      marginTop: '0.2rem',
      marginBottom: '0.2rem',
      fontSize: '1.5rem',
      fontWeight: 700,
      color: theme.palette.infoText,
    },
    '& .delta': {
      fontSize: '0.9rem',
      color: theme.palette.textSubtle,
    },
    '& .deltaValue': {
      fontSize: '0.9rem',
      fontWeight: 700,
      color: theme.palette.success.main,
    },
  },
}));

type MetricCardProps = {
  message: string;
  title: string;
  subTitle: string;
};

export const MetricCard = (props: MetricCardProps) => {
  const classes = useStyles();
  const theme = useTheme() as BackstageTheme;

  return (
    <div className={classes.card}>
      <div className="top">
        <div className="title">
          <div className="value">{props.title}</div>
        </div>
      </div>
      <div className="delta">
        <span className="deltaValue">{props.subTitle} </span>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={classes.chartContainer}
      >
        <AreaChart
          width={300}
          height={100}
          data={products[Math.floor(Math.random() * products.length)].MAUs.map(
            v => {
              return { pv: v };
            },
          )}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <YAxis
            hide
            domain={[
              (minData: number) => minData * 0.8,
              (maxData: number) => maxData * 1.2,
            ]}
          />
          <Area
            dot={false}
            isAnimationActive={false}
            type="monotone"
            dataKey="pv"
            stroke="#5081b900"
            fillOpacity={0.2}
            fill={theme.palette.secondary.main}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
