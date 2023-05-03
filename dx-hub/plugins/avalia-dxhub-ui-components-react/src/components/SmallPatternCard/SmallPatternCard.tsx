import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';
import cncfLogo from './assets/logo-cncf.png';
import innerSourceCommonsLogo from './assets/logo-innersource-commons.png';
import GreenSoftwareFoundationCommonsLogo from './assets/logo-green-software-foundation.png';

import { Link } from '@backstage/core-components';
import useInnerSourcePattern from '../../hooks/useInnerSourcePattern';
import useGreenSoftwarePattern from '../../hooks/useGreenSoftwarePattern';
import { useCNCFGlossary } from '../../hooks/useCNCFGlossary';

type StyleProps = {
  logo: string;
  color: string;
};

const useStyles = makeStyles<BackstageTheme, StyleProps>(theme => ({
  root: {
    padding: theme.spacing(2),
    color: props => theme.palette.getContrastText(props.color),
    backgroundColor: props => props.color,
    borderRadius: theme.spacing(1),
    height: '8rem',
    fontSize: theme.typography.h6.fontSize,
    lineHeight: 'normal',
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundOrigin: 'content-box',
    backgroundBlendMode: 'color-burn',
    backgroundRepeat: 'no-repeat',
    backgroundImage: props => `url(${props.logo})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
  },
}));

type SmallPatternCardProps = StyleProps & {
  pattern: any;
};

const SmallPatternCard = (props: SmallPatternCardProps) => {
  const classes = useStyles({ logo: props.logo, color: props.color });
  return (
    <Box className={classes.root}>
      <Typography noWrap variant="h6">
        {props.pattern.value?.title}
      </Typography>
      <Link className={classes.link} to={props.pattern.value?.properties.url}>
        <Typography variant="body2">Read more...</Typography>
      </Link>
    </Box>
  );
};

export const InnerSourcePatternCard = () => {
  const pattern = useInnerSourcePattern();
  return (
    <SmallPatternCard
      pattern={pattern}
      logo={innerSourceCommonsLogo}
      color="#0aa8a7"
    />
  );
};

export const GreenSoftwareFoundationPatternCard = () => {
  const pattern = useGreenSoftwarePattern();
  return (
    <SmallPatternCard
      pattern={pattern}
      logo={GreenSoftwareFoundationCommonsLogo}
      color="#006d69"
    />
  );
};

export const CncfGlossaryCard = () => {
  const pattern = useCNCFGlossary();
  return <SmallPatternCard pattern={pattern} logo={cncfLogo} color="#0086ff" />;
};
