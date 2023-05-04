import { BackstageTheme } from '@backstage/theme';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import TimelineIcon from '@material-ui/icons/Timeline';
import { AreaChart, YAxis, Area } from 'recharts';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    fontSize: '1rem',
    backgroundColor: theme.palette.background.paper,
    padding: '1.5rem',
    borderRadius: '1rem',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  stage: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    // minHeight: '6rem',
    paddingRight: '1.5rem',
    marginRight: '0.5rem',
    borderRight: 'thin solid lightGray',
  },
  lastStage: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    // minHeight: '6rem',
  },
  borderRight: {
    borderRight: 'thin solid gray',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      color: theme.palette.secondary.main,
    },
  },
  stageName: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    // backgroundColor: 'gray',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: '0.9rem',
    textAlign: 'right',
    color: theme.palette.textSubtle,
    marginTop: theme.spacing(2),
  },
}));

interface StageProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  footerText: string;
  isLast?: boolean;
  trendValue: number;
}

const Stage = ({
  name,
  icon,
  description,
  footerText,
  isLast,
  trendValue,
}: StageProps) => {
  const classes = useStyles();
  const stageClasses = isLast ? classes.lastStage : classes.stage;

  const getRandomValues = () => {
    const randomValues: number[] = [];
    generateRandomValues(trendValue);
    return randomValues;
    function generateRandomValues(val: number) {
      let previousValue = 1 - val;
      for (let i = 0; i < 20; i++) {
        const shouldIncrement = Math.random() >= 0.5 - 0.1 * val;
        const increment = (shouldIncrement ? 1 : -1) * (Math.random() / 20);
        const currentValue = Math.max(
          0,
          Math.min(1, previousValue + increment),
        );
        randomValues.push(currentValue);
        previousValue = currentValue;
      }
    }
  };
  const trend = getRandomValues();

  function color(values: number[]) {
    const diff = (values[values.length - 1] - values[0]) / values[0];
    if (diff > 0.2) return 'green';
    if (diff < -0.2) return 'red';
    return 'orange';
  }

  return (
    <Grid item xs>
      <div className={stageClasses}>
        <div>
          <div className={classes.header}>
            <div className={classes.stageName}>{name}</div>
            {icon}
          </div>
          <div
            className={classes.stageDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className={classes.footer}>
          <AreaChart
            width={200}
            height={40}
            data={trend.map(v => {
              return { pv: v };
            })}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <YAxis
              hide
              domain={[
                (minData: number) => minData * 0.3,
                (maxData: number) => maxData * 1.1,
              ]}
            />
            <Area
              dot={false}
              isAnimationActive={false}
              type="monotone"
              dataKey="pv"
              stroke={color(trend)}
              fill="#5081b944"
              strokeWidth={2}
            />
          </AreaChart>
          <div className={classes.stageDescription}>{footerText}</div>
        </div>
      </div>
    </Grid>
  );
};

type StagesCardProps = {};

export const StagesCard = (_props: StagesCardProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Stage
          name="Awareness"
          icon={<NotificationsActiveIcon />}
          description="We provide teams with <b>data</b>, <b>information</b> and <b>insights</b>"
          footerText="Backstage Plugins"
          trendValue={2}
        />
        <Stage
          name="Actions"
          icon={<DirectionsWalkIcon />}
          description="We <b>guide</b> teams with best practices <b>baked into</b> our platforms"
          footerText="Backstage Templates"
          trendValue={-2}
        />
        <Stage
          name="Achievements"
          icon={<TimelineIcon />}
          description="We track <b>progress</b> and <b>adherence</b> to our best practices"
          footerText="Backstage Tech Insights"
          trendValue={0}
          isLast
        />
      </Grid>
    </div>
  );
};
