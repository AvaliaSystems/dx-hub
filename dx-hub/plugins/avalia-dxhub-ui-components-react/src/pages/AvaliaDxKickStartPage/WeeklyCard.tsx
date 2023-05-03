import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    padding: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    height: '100%',
    fontSize: theme.typography.h6.fontSize,
    lineHeight: 'normal',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
  },
  main: {
    fontSize: theme.typography.body1.fontSize,
    display: 'flex',
    justifyContent: 'space-between',
    '& ul': {
      paddingInlineStart: '1.5rem',
    },
    '& li': {
      lineHeight: 1.5,
      marginBottom: theme.spacing(2),
    },
  },
}));

type WeeklyActivity = {
  title: string;
};

type BackstageConcept = {
  title: string;
};

export type Week = {
  number: number;
  goal: string;
  activities: WeeklyActivity[];
  backstageConcepts: BackstageConcept[];
};

type WeeklyCardProps = {
  week: Week;
};

export const WeeklyCard = (props: WeeklyCardProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">Key Activities</Typography>
            <ul>
              {props.week.activities?.map((activity, index) => (
                <li key={index}>{activity.title}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Backstage Concepts</Typography>
            <ul>
              {props.week.backstageConcepts?.map((concept, index) => (
                <li key={index}>{concept.title}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
