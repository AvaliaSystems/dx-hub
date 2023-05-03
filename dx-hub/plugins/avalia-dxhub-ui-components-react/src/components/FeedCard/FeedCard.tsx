import { alpha, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';
import avaliaLogo from './assets/logo-avalia.png';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    padding: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    height: '100%',
    fontSize: theme.typography.body1.fontSize,
    backgroundSize: '48px',
    backgroundPosition: 'top 4px right 4px',
    backgroundOrigin: 'content-box',
    backgroundBlendMode: 'soft-light',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${avaliaLogo})`,
  },
  item: {
    borderBottom: 'thin solid',
    borderBottomColor: alpha(
      theme.palette.getContrastText(theme.palette.primary.main),
      0.1,
    ),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  date: {
    color: alpha(
      theme.palette.getContrastText(theme.palette.primary.main),
      0.5,
    ),
  },
}));

export type FeedItem = {
  title: string;
  description: string;
  category?: string;
  date: string;
};

export type Feed = {
  items: FeedItem[];
};

type FeedCardProps = {
  message: string;
  feed: Feed;
};

export const FeedCard = (props: FeedCardProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box marginBottom={2}>
        <Typography noWrap variant="h6">
          {props.message}
        </Typography>
      </Box>
      {props.feed.items.map((item, index) => (
        <Box key={index} className={classes.item}>
          <Box className={classes.date}>{item.date}</Box>
          <Box>{item.title}</Box>
        </Box>
      ))}
    </Box>
  );
};
