import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';
import { MarkdownContent } from '@backstage/core-components';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    padding: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.secondary.main,
    background: `linear-gradient(45deg,${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: theme.spacing(1),
    height: '100%',
    fontSize: theme.typography.h6.fontSize,
    lineHeight: 'normal',
  },
  text: {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: 1.5,
  },
}));

type MessageCardProps = {
  title: string;
  text?: string;
};

export const MessageCard = (props: MessageCardProps) => {
  const classes = useStyles();
  const markdown = props.text?.replace(/\\n/g, '\n') || '';
  return (
    <Box className={classes.root}>
      <Box marginBottom={4}>
        <Typography noWrap variant="h6">
          {props.title}
        </Typography>
      </Box>
      <MarkdownContent className={classes.text} content={markdown} />
    </Box>
  );
};
