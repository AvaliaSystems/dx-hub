import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BackstageTheme } from '@backstage/theme';
import backstageLogo from './assets/logo-backstage.png';
import { useAsync } from 'react-use';
import { useApi } from '@backstage/core-plugin-api';
import { catalogApiRef } from '@backstage/plugin-catalog-react';

import { Link } from '@backstage/core-components';

type StyleProps = {
  logo: string;
  color: string;
};

const useStyles = makeStyles<BackstageTheme, StyleProps>(theme => ({
  root: {
    padding: theme.spacing(2),
    color: props => theme.palette.getContrastText(props.color),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1),
    minHeight: '8rem',
    fontSize: theme.typography.h6.fontSize,
    height: '100%',
    lineHeight: 'normal',
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundOrigin: 'content-box',
    backgroundBlendMode: 'soft-light',
    backgroundRepeat: 'no-repeat',
    backgroundImage: props => `url(${props.logo})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.h6.fontSize,
  },
  stats: {},
  link: {
    textAlign: 'right',
    marginTop: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    '& a': {
      color: theme.palette.getContrastText(theme.palette.secondary.main),
    },
  },
}));

type CatalogInfoCardProps = {
  kind: string;
  label: string;
};

export const CatalogInfoCard = (props: CatalogInfoCardProps) => {
  const catalogApi = useApi(catalogApiRef);
  const { value, loading, error } = useAsync(async () => {
    const response = await catalogApi.queryEntities({
      filter: { kind: props.kind },
      limit: 0,
    });
    return response.totalItems;
  }, []);

  const classes = useStyles({
    color: '#ff0000',
    logo: backstageLogo,
  });

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
      >
        <Typography variant="h6">
          {value} {props.label}(s)
        </Typography>
        <div className={classes.link}>
          <Link
            to={`/catalog?filters%5Bkind%5D=${props.kind}&filters%5Buser%5D=all`}
          >
            Explore in catalog
          </Link>
        </div>
      </Box>
    </div>
  );
};
