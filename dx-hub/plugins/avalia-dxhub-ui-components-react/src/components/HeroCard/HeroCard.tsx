import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';

type StyleProps = {
  imageUrl: string;
};

const useStyles = makeStyles<BackstageTheme, StyleProps>(theme => ({
  root: {
    padding: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.spacing(1),
    minHeight: '400px',
    height: '100%',
  },
}));

type HeroCardProps = {
  message: string;
  imageUrl: string;
};

export const HeroCard = (props: HeroCardProps) => {
  const classes = useStyles({ imageUrl: props.imageUrl });
  return (
    <Box className={classes.root}>
      <Typography variant="h6">{props.message}</Typography>
    </Box>
  );
};
