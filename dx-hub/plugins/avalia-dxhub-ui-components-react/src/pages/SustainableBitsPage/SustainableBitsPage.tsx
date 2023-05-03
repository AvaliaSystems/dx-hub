import { BackstageTheme } from '@backstage/theme';
import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { PersonaContext } from '../../context';
import { StagesCard } from '../../components/StagesCard/StagesCard';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { GreenSoftwarePatternCard } from '../../components/GreenSoftwareFoundationPatternCard/GreenSoftwarePatternCard';
import { ScoreCard } from '../../components/ScoreCard/ScoreCard';

type SustainableBitsPageProps = {};

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    paddingRight: theme.spacing(2),
  },
  row: {
    marginBottom: theme.spacing(1),
  },
}));

export const SustainableBitsPage = (_props: SustainableBitsPageProps) => {
  const classes = useStyles();
  const { getPersonalizedValue } = useContext(PersonaContext);

  const sustainableBitHeroImageUrls = getPersonalizedValue(
    'sustainableBitHeroImageUrls',
  );

  return (
    <Box className={classes.root}>
      <StagesCard />
      <Grid container className={classes.row}>
        <Grid item md={6} xs={12}>
          <GreenSoftwarePatternCard />
        </Grid>
        <Grid item md={6} xs={12}>
          <HeroCard imageUrl={sustainableBitHeroImageUrls[0]} message="" />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <HeroCard imageUrl={sustainableBitHeroImageUrls[2]} message="" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ScoreCard title="Business Domains" entityType="Domain" />
            </Grid>
            <Grid item xs={12}>
              <ScoreCard title="Organizations & Teams" entityType="Group" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>{' '}
    </Box>
  );
};
