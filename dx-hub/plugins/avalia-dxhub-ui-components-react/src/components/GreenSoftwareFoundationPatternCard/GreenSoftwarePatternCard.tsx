import { Link, MarkdownContent } from '@backstage/core-components';
import { BackstageTheme } from '@backstage/theme';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import useGreenSoftwarePattern from '../../hooks/useGreenSoftwarePattern';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: '1.5rem',
    borderRadius: '1rem',
    textAlign: 'center',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  header: {
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  refreshButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
  },
  category: {
    borderRadius: '0.25rem',
    backgroundColor: theme.palette.primary.main,
    paddingLeft: '0.6rem',
    paddingRight: '0.6rem',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    color: theme.page.fontColor,
  },
  center: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    textAlign: 'left',
    fontSize: '1rem',
    color: theme.palette.textSubtle,
  },
  footer: {
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'middle',
  },
}));

type GreenSoftwarePatternCardProps = {};

export const GreenSoftwarePatternCard = (
  _props: GreenSoftwarePatternCardProps,
) => {
  const classes = useStyles();
  const {
    value: pattern,
    loading: _loading,
    error,
    retry,
  } = useGreenSoftwarePattern();

  return (
    <div className={classes.root}>
      {error && error.message}
      {pattern && (
        <>
          <div className={classes.header}>
            <div>
              <Link to="https://patterns.greensoftware.foundation/">
                {pattern.catalog}
              </Link>
            </div>
            <IconButton
              className={classes.refreshButton}
              onClick={() => retry()}
              aria-label="reload"
            >
              <RefreshIcon />
            </IconButton>
          </div>
          <div className={classes.center}>
            <div className={classes.title}>{pattern.properties.title}</div>
            <div className={classes.description}>
              <MarkdownContent
                content={pattern.properties.description}
                dialect="common-mark"
              />
            </div>
          </div>
          <div className={classes.footer}>
            <Box display="flex" alignItems="flex-end">
              <Link
                to={`https://github.com/${pattern.properties.submitted_by}`}
              >
                By {pattern.properties.submitted_by}
              </Link>
            </Box>
            <div className={classes.category}>
              {pattern.properties.category}
            </div>
            <Box display="flex" alignItems="flex-end">
              <Link to={pattern.url}>Details...</Link>
            </Box>
          </div>
        </>
      )}
    </div>
  );
};
