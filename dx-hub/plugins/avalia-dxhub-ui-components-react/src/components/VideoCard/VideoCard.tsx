import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    backgroundColor: 'black',
    borderRadius: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  video: {
    maxWidth: '100%',
  },
  description: {
    color: 'white',
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  title: {
    color: 'white',
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
  },
}));

type VideoCardProps = {
  title: string;
  description: string;
  videoUrl: string;
};

export const VideoCard = (props: VideoCardProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box textAlign="center" className={classes.description}>
        {props.description}
      </Box>
      <iframe
        className={classes.video}
        width="320"
        height="180"
        src={props.videoUrl}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <Box className={classes.title}>{props.title}</Box>
    </Box>
  );
};
